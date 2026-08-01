-- v0.5.7 rehearsal schema. Do not run this against production.
-- This migration intentionally models Gym only. It contains no customer data.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE sites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid NOT NULL REFERENCES customers(id) ON DELETE RESTRICT,
  template_key text NOT NULL CHECK (template_key = 'gym'),
  display_name text NOT NULL,
  status text NOT NULL CHECK (status IN ('draft', 'active', 'suspended', 'cancelled')),
  visual_variant text NOT NULL CHECK (visual_variant IN ('classic', 'editorial')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (id, customer_id)
);

CREATE TABLE domains (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
  hostname text NOT NULL,
  status text NOT NULL CHECK (status IN ('requested', 'pending_verification', 'active', 'failed', 'removed')),
  is_primary boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (hostname),
  UNIQUE (site_id, hostname)
);

CREATE UNIQUE INDEX domains_one_primary_per_site
  ON domains (site_id) WHERE is_primary AND status = 'active';

CREATE TABLE site_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid NOT NULL UNIQUE REFERENCES sites(id) ON DELETE CASCADE,
  schema_version integer NOT NULL CHECK (schema_version > 0),
  content jsonb NOT NULL,
  source text NOT NULL CHECK (source IN ('migration_rehearsal', 'migration', 'admin')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE site_revisions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
  content jsonb NOT NULL,
  status text NOT NULL CHECK (status IN ('draft', 'published', 'rolled_back')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX site_revisions_site_created_at_idx ON site_revisions (site_id, created_at DESC);

CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_id uuid NOT NULL REFERENCES sites(id) ON DELETE RESTRICT,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed', 'spam')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX leads_site_created_at_idx ON leads (site_id, created_at DESC);

-- Runtime roles and row-level permissions are deliberately deferred to v0.6.0.
-- The v0.5.7 rehearsal proves the data shape only; it must not be exposed to browsers.
