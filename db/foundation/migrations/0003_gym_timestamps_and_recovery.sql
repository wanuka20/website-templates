-- v0.6.0 canonical timestamp defaults.
--
-- PostgreSQL timestamptz values represent instants and are stored internally
-- in UTC. Setting the database and capability-role defaults to UTC prevents a
-- connection's display timezone from making machine-readable values ambiguous.

BEGIN;

DO $migration$
BEGIN
  EXECUTE format(
    'ALTER DATABASE %I SET timezone TO %L',
    current_database(),
    'UTC'
  );
END
$migration$;

ALTER ROLE website_templates_migrator SET timezone TO 'UTC';
ALTER ROLE website_templates_runtime SET timezone TO 'UTC';

COMMIT;
