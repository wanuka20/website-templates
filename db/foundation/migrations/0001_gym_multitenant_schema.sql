-- v0.6.0 Gym multi-tenant foundation.
--
-- This is the future local/staging/production migration lineage. It is
-- deliberately separate from db/migrations/0001_gym_rehearsal_schema.sql,
-- which remains synthetic v0.5.7 rehearsal evidence and must never run
-- against a customer database.
--
-- One shared PostgreSQL database serves every Gym. Tenant-owned data is
-- anchored at sites.id through an explicit site_id foreign key.

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name text NOT NULL CHECK (char_length(btrim(display_name)) > 0),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'cancelled', 'deleted')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE sites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid NOT NULL REFERENCES customers(id) ON DELETE RESTRICT,
  template_key text NOT NULL CHECK (template_key = 'gym'),
  display_name text NOT NULL CHECK (char_length(btrim(display_name)) > 0),
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'suspended', 'cancelled', 'deleted')),
  visual_variant text NOT NULL CHECK (visual_variant IN ('classic', 'editorial')),
  published_revision_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (id, customer_id)
);

CREATE INDEX sites_customer_status_idx ON sites (customer_id, status);

CREATE TABLE domains (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid NOT NULL REFERENCES sites(id) ON DELETE RESTRICT,
  hostname text NOT NULL CHECK (
    char_length(hostname) BETWEEN 1 AND 253
    AND hostname = lower(hostname)
    AND hostname = rtrim(hostname, '.')
    AND position(':' IN hostname) = 0
    AND hostname !~ '[[:space:]/]'
  ),
  status text NOT NULL DEFAULT 'requested' CHECK (status IN ('requested', 'pending_verification', 'active', 'failed', 'removed')),
  is_primary boolean NOT NULL DEFAULT false,
  verified_at timestamptz,
  removed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT domains_hostname_unique UNIQUE (hostname),
  CONSTRAINT domains_site_hostname_unique UNIQUE (site_id, hostname),
  CONSTRAINT domains_primary_requires_active CHECK (NOT is_primary OR status = 'active')
);

CREATE UNIQUE INDEX domains_one_active_primary_per_site_idx
  ON domains (site_id)
  WHERE is_primary AND status = 'active';

CREATE INDEX domains_site_status_idx ON domains (site_id, status);

-- This is the site's current structured content document. The complete nested
-- runtime contract lives in lib/gym-content-model.ts; future writes and
-- publishing must parse the record there in addition to these SQL checks.
CREATE TABLE site_content (
  site_id uuid PRIMARY KEY REFERENCES sites(id) ON DELETE RESTRICT,
  schema_version integer NOT NULL CHECK (schema_version > 0),
  content jsonb NOT NULL CHECK (jsonb_typeof(content) = 'object'),
  visual_variant text NOT NULL CHECK (visual_variant IN ('classic', 'editorial')),
  feature_flags jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(feature_flags) = 'object'),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE site_revisions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid NOT NULL REFERENCES sites(id) ON DELETE RESTRICT,
  template_key text NOT NULL CHECK (template_key = 'gym'),
  schema_version integer NOT NULL CHECK (schema_version > 0),
  content jsonb NOT NULL CHECK (jsonb_typeof(content) = 'object'),
  visual_variant text NOT NULL CHECK (visual_variant IN ('classic', 'editorial')),
  feature_flags jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(feature_flags) = 'object'),
  state text NOT NULL DEFAULT 'draft' CHECK (state IN ('draft', 'published', 'superseded', 'rolled_back')),
  supersedes_revision_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  published_at timestamptz,
  UNIQUE (id, site_id),
  CONSTRAINT site_revisions_superseded_revision_same_site_fkey
    FOREIGN KEY (supersedes_revision_id, site_id)
    REFERENCES site_revisions (id, site_id)
    ON DELETE RESTRICT
);

CREATE INDEX site_revisions_site_created_at_idx
  ON site_revisions (site_id, created_at DESC);

CREATE INDEX site_revisions_site_state_created_at_idx
  ON site_revisions (site_id, state, created_at DESC);

-- A published revision can only belong to its own site. This prevents an
-- otherwise valid revision UUID from being attached to a different customer.
ALTER TABLE sites
  ADD CONSTRAINT sites_published_revision_same_site_fkey
  FOREIGN KEY (published_revision_id, id)
  REFERENCES site_revisions (id, site_id)
  ON DELETE RESTRICT;

CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid NOT NULL REFERENCES sites(id) ON DELETE RESTRICT,
  name text NOT NULL CHECK (char_length(btrim(name)) > 0),
  email text NOT NULL CHECK (char_length(btrim(email)) > 0),
  phone text,
  subject text NOT NULL CHECK (char_length(btrim(subject)) > 0),
  message text NOT NULL CHECK (char_length(btrim(message)) > 0),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed', 'spam')),
  delivery_status text NOT NULL DEFAULT 'pending' CHECK (delivery_status IN ('pending', 'delivered', 'failed', 'not_configured')),
  source_route text NOT NULL CHECK (left(source_route, 1) = '/'),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX leads_site_created_at_idx ON leads (site_id, created_at DESC);
CREATE INDEX leads_site_status_created_at_idx ON leads (site_id, status, created_at DESC);

COMMIT;
