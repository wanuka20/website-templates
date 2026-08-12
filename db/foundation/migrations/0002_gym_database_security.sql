-- v0.6.0 Gym database security foundation.
--
-- This migration defines NOLOGIN capability roles. Environment-specific LOGIN
-- roles and passwords are provisioned separately and must never be committed.
-- The public runtime role is deliberately narrower than the future internal
-- manager: it can resolve one active hostname, read that site's published
-- revision, and insert a lead for that site only.

BEGIN;

DO $roles$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'website_templates_migrator') THEN
    CREATE ROLE website_templates_migrator
      NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS;
  ELSIF EXISTS (
    SELECT 1
    FROM pg_roles
    WHERE rolname = 'website_templates_migrator'
      AND (rolcanlogin OR rolsuper OR rolcreatedb OR rolcreaterole OR rolreplication OR rolbypassrls)
  ) THEN
    RAISE EXCEPTION 'Existing website_templates_migrator role has unsafe attributes';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'website_templates_runtime') THEN
    CREATE ROLE website_templates_runtime
      NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS;
  ELSIF EXISTS (
    SELECT 1
    FROM pg_roles
    WHERE rolname = 'website_templates_runtime'
      AND (rolcanlogin OR rolsuper OR rolcreatedb OR rolcreaterole OR rolreplication OR rolbypassrls)
  ) THEN
    RAISE EXCEPTION 'Existing website_templates_runtime role has unsafe attributes';
  END IF;
END
$roles$;

-- Managed PostgreSQL administrators may create safe roles but cannot reassert
-- superuser-controlled attributes with ALTER ROLE. Existing roles therefore
-- fail closed if any forbidden attribute is enabled. LOGIN credentials use
-- separate environment-specific roles granted one capability role.

-- The migration executor must be able to create SECURITY DEFINER objects owned
-- by the capability role. This does not grant the runtime role to the executor.
GRANT website_templates_migrator TO CURRENT_USER;

REVOKE CREATE ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM website_templates_runtime;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM website_templates_runtime;

GRANT USAGE, CREATE ON SCHEMA public TO website_templates_migrator;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO website_templates_migrator;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO website_templates_migrator;
GRANT USAGE ON SCHEMA public TO website_templates_runtime;

CREATE SCHEMA app_private AUTHORIZATION website_templates_migrator;
REVOKE ALL ON SCHEMA app_private FROM PUBLIC;
GRANT USAGE ON SCHEMA app_private TO website_templates_runtime;

-- A raw custom session setting is not a sufficient tenant boundary because an
-- ordinary role can set custom PostgreSQL parameters. Sign the resolved site,
-- backend PID, and transaction ID with a private random key. The runtime can
-- set a parameter but cannot forge a valid tenant context for another site.
CREATE TABLE app_private.tenant_context_secret (
  singleton boolean PRIMARY KEY DEFAULT true CHECK (singleton),
  secret bytea NOT NULL CHECK (octet_length(secret) = 32)
);

INSERT INTO app_private.tenant_context_secret (secret)
VALUES (gen_random_bytes(32));

ALTER TABLE app_private.tenant_context_secret
  OWNER TO website_templates_migrator;
REVOKE ALL ON TABLE app_private.tenant_context_secret FROM PUBLIC;
REVOKE ALL ON TABLE app_private.tenant_context_secret
  FROM website_templates_runtime;

CREATE FUNCTION app_private.current_site_id()
RETURNS uuid
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public, app_private
AS $function$
DECLARE
  claimed_site_id text;
  claimed_transaction_id text;
  claimed_signature text;
  current_transaction_id xid8;
  signing_secret bytea;
  expected_signature text;
BEGIN
  claimed_site_id := current_setting('app.site_id', true);
  claimed_transaction_id := current_setting('app.site_transaction_id', true);
  claimed_signature := current_setting('app.site_signature', true);
  current_transaction_id := pg_current_xact_id_if_assigned();

  IF claimed_site_id IS NULL OR claimed_site_id = ''
     OR claimed_transaction_id IS NULL OR claimed_transaction_id = ''
     OR claimed_signature IS NULL OR claimed_signature = ''
     OR current_transaction_id IS NULL
     OR claimed_transaction_id::xid8 <> current_transaction_id THEN
    RETURN NULL;
  END IF;

  SELECT context.secret
  INTO STRICT signing_secret
  FROM app_private.tenant_context_secret AS context
  WHERE context.singleton;

  expected_signature := encode(
    hmac(
      convert_to(
        claimed_site_id || ':' || pg_backend_pid()::text || ':' || claimed_transaction_id,
        'UTF8'
      ),
      signing_secret,
      'sha256'
    ),
    'hex'
  );

  IF claimed_signature <> expected_signature THEN
    RETURN NULL;
  END IF;

  RETURN claimed_site_id::uuid;
EXCEPTION
  WHEN invalid_text_representation THEN
    RETURN NULL;
END
$function$;

ALTER FUNCTION app_private.current_site_id()
  OWNER TO website_templates_migrator;
REVOKE ALL ON FUNCTION app_private.current_site_id() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION app_private.current_site_id()
  TO website_templates_runtime;

CREATE FUNCTION app_private.activate_site_context(p_hostname text)
RETURNS uuid
LANGUAGE plpgsql
VOLATILE
SECURITY DEFINER
SET search_path = pg_catalog, public, app_private
AS $function$
DECLARE
  normalized_hostname text;
  resolved_site_id uuid;
  transaction_id xid8;
  signing_secret bytea;
  site_signature text;
BEGIN
  normalized_hostname := lower(rtrim(btrim(p_hostname), '.'));

  IF normalized_hostname IS NULL
     OR char_length(normalized_hostname) NOT BETWEEN 1 AND 253
     OR position(':' IN normalized_hostname) > 0
     OR normalized_hostname ~ '[[:space:]/]' THEN
    PERFORM set_config('app.site_id', '', true);
    PERFORM set_config('app.site_transaction_id', '', true);
    PERFORM set_config('app.site_signature', '', true);
    RETURN NULL;
  END IF;

  SELECT domain.site_id
  INTO resolved_site_id
  FROM public.domains AS domain
  JOIN public.sites AS site ON site.id = domain.site_id
  WHERE domain.hostname = normalized_hostname
    AND domain.status = 'active'
    AND site.status = 'active'
    AND site.template_key = 'gym';

  IF resolved_site_id IS NULL THEN
    PERFORM set_config('app.site_id', '', true);
    PERFORM set_config('app.site_transaction_id', '', true);
    PERFORM set_config('app.site_signature', '', true);
    RETURN NULL;
  END IF;

  transaction_id := pg_current_xact_id();

  SELECT context.secret
  INTO STRICT signing_secret
  FROM app_private.tenant_context_secret AS context
  WHERE context.singleton;

  site_signature := encode(
    hmac(
      convert_to(
        resolved_site_id::text || ':' || pg_backend_pid()::text || ':' || transaction_id::text,
        'UTF8'
      ),
      signing_secret,
      'sha256'
    ),
    'hex'
  );

  PERFORM set_config('app.site_id', resolved_site_id::text, true);
  PERFORM set_config('app.site_transaction_id', transaction_id::text, true);
  PERFORM set_config('app.site_signature', site_signature, true);

  RETURN resolved_site_id;
END
$function$;

ALTER FUNCTION app_private.activate_site_context(text)
  OWNER TO website_templates_migrator;
REVOKE ALL ON FUNCTION app_private.activate_site_context(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION app_private.activate_site_context(text)
  TO website_templates_runtime;

CREATE FUNCTION app_private.valid_gym_feature_flags(flags jsonb)
RETURNS boolean
LANGUAGE sql
IMMUTABLE
PARALLEL SAFE
SET search_path = pg_catalog
AS $function$
  SELECT CASE
    WHEN jsonb_typeof(flags) <> 'object' THEN false
    ELSE
      flags ?& ARRAY[
        'membership',
        'trainers',
        'classSchedule',
        'testimonials',
        'gallery',
        'whatsapp'
      ]
      AND NOT EXISTS (
        SELECT 1
        FROM jsonb_object_keys(flags) AS keys(flag_name)
        WHERE keys.flag_name <> ALL (ARRAY[
          'membership',
          'trainers',
          'classSchedule',
          'testimonials',
          'gallery',
          'whatsapp'
        ]::text[])
      )
      AND NOT EXISTS (
        SELECT 1
        FROM jsonb_each(flags) AS entry
        WHERE jsonb_typeof(entry.value) <> 'boolean'
      )
  END
$function$;

ALTER FUNCTION app_private.valid_gym_feature_flags(jsonb)
  OWNER TO website_templates_migrator;
REVOKE ALL ON FUNCTION app_private.valid_gym_feature_flags(jsonb) FROM PUBLIC;

ALTER TABLE public.site_content
  ALTER COLUMN schema_version SET DEFAULT 1,
  ALTER COLUMN feature_flags SET DEFAULT '{
    "membership": true,
    "trainers": true,
    "classSchedule": true,
    "testimonials": true,
    "gallery": true,
    "whatsapp": true
  }'::jsonb,
  ADD CONSTRAINT site_content_schema_version_v1
    CHECK (schema_version = 1),
  ADD CONSTRAINT site_content_feature_flags_valid
    CHECK (app_private.valid_gym_feature_flags(feature_flags));

ALTER TABLE public.site_revisions
  ALTER COLUMN schema_version SET DEFAULT 1,
  ALTER COLUMN feature_flags SET DEFAULT '{
    "membership": true,
    "trainers": true,
    "classSchedule": true,
    "testimonials": true,
    "gallery": true,
    "whatsapp": true
  }'::jsonb,
  ADD CONSTRAINT site_revisions_schema_version_v1
    CHECK (schema_version = 1),
  ADD CONSTRAINT site_revisions_feature_flags_valid
    CHECK (app_private.valid_gym_feature_flags(feature_flags));

ALTER TABLE public.leads
  ADD CONSTRAINT leads_name_length
    CHECK (char_length(btrim(name)) BETWEEN 2 AND 100),
  ADD CONSTRAINT leads_email_length
    CHECK (char_length(btrim(email)) BETWEEN 3 AND 254),
  ADD CONSTRAINT leads_phone_length
    CHECK (phone IS NULL OR char_length(btrim(phone)) <= 50),
  ADD CONSTRAINT leads_subject_length
    CHECK (char_length(btrim(subject)) BETWEEN 3 AND 200),
  ADD CONSTRAINT leads_message_length
    CHECK (char_length(btrim(message)) BETWEEN 10 AND 5000),
  ADD CONSTRAINT leads_source_route_length
    CHECK (char_length(source_route) BETWEEN 1 AND 300);

-- RLS applies to owners as well as ordinary roles. No foundation table is
-- readable merely because a role received a SQL table privilege.
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers FORCE ROW LEVEL SECURITY;
ALTER TABLE public.sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sites FORCE ROW LEVEL SECURITY;
ALTER TABLE public.domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.domains FORCE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content FORCE ROW LEVEL SECURITY;
ALTER TABLE public.site_revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_revisions FORCE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads FORCE ROW LEVEL SECURITY;

-- The migration capability has explicit full policies but is still NOLOGIN and
-- NOBYPASSRLS. An environment-specific migration login is granted this role.
CREATE POLICY migration_all_customers ON public.customers
  FOR ALL TO website_templates_migrator USING (true) WITH CHECK (true);
CREATE POLICY migration_all_sites ON public.sites
  FOR ALL TO website_templates_migrator USING (true) WITH CHECK (true);
CREATE POLICY migration_all_domains ON public.domains
  FOR ALL TO website_templates_migrator USING (true) WITH CHECK (true);
CREATE POLICY migration_all_site_content ON public.site_content
  FOR ALL TO website_templates_migrator USING (true) WITH CHECK (true);
CREATE POLICY migration_all_site_revisions ON public.site_revisions
  FOR ALL TO website_templates_migrator USING (true) WITH CHECK (true);
CREATE POLICY migration_all_leads ON public.leads
  FOR ALL TO website_templates_migrator USING (true) WITH CHECK (true);

-- The public runtime reads only the active site selected by the hostname
-- resolver and only that site's current published revision.
CREATE POLICY runtime_active_site_select ON public.sites
  FOR SELECT TO website_templates_runtime
  USING (
    id = (SELECT app_private.current_site_id())
    AND status = 'active'
    AND template_key = 'gym'
  );

CREATE POLICY runtime_published_revision_select ON public.site_revisions
  FOR SELECT TO website_templates_runtime
  USING (
    site_id = (SELECT app_private.current_site_id())
    AND state = 'published'
    AND EXISTS (
      SELECT 1
      FROM public.sites AS site
      WHERE site.id = site_revisions.site_id
        AND site.published_revision_id = site_revisions.id
    )
  );

CREATE POLICY runtime_site_lead_insert ON public.leads
  FOR INSERT TO website_templates_runtime
  WITH CHECK (
    site_id = (SELECT app_private.current_site_id())
    AND EXISTS (
      SELECT 1
      FROM public.sites AS site
      WHERE site.id = leads.site_id
        AND site.status = 'active'
        AND site.template_key = 'gym'
    )
  );

GRANT SELECT ON TABLE public.sites, public.site_revisions
  TO website_templates_runtime;
GRANT INSERT (site_id, name, email, phone, subject, message, source_route)
  ON TABLE public.leads TO website_templates_runtime;

-- Future objects start private. Each later migration must grant only the
-- exact runtime capability it introduces.
ALTER DEFAULT PRIVILEGES FOR ROLE website_templates_migrator IN SCHEMA public
  REVOKE ALL ON TABLES FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE website_templates_migrator IN SCHEMA public
  REVOKE ALL ON SEQUENCES FROM PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE website_templates_migrator IN SCHEMA public
  REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;

COMMIT;
