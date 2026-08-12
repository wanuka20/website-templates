-- v0.6.0 synthetic staging seed.
--
-- These records are invented and use reserved .test/example.test values. The
-- fixed IDs make the seed idempotent without deleting or resetting data.

BEGIN;
SET LOCAL ROLE website_templates_migrator;

INSERT INTO public.customers (id, display_name, status)
VALUES
  ('20000000-0000-4000-8000-000000000001', 'Northstar Training Club', 'active'),
  ('20000000-0000-4000-8000-000000000002', 'Harbour Strength Lab', 'active')
ON CONFLICT (id) DO UPDATE SET
  display_name = EXCLUDED.display_name,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO public.sites (
  id,
  customer_id,
  template_key,
  display_name,
  status,
  visual_variant
)
VALUES
  (
    '21000000-0000-4000-8000-000000000001',
    '20000000-0000-4000-8000-000000000001',
    'gym',
    'Northstar Training Club',
    'active',
    'classic'
  ),
  (
    '21000000-0000-4000-8000-000000000002',
    '20000000-0000-4000-8000-000000000002',
    'gym',
    'Harbour Strength Lab',
    'active',
    'editorial'
  )
ON CONFLICT (id) DO UPDATE SET
  customer_id = EXCLUDED.customer_id,
  template_key = EXCLUDED.template_key,
  display_name = EXCLUDED.display_name,
  status = EXCLUDED.status,
  visual_variant = EXCLUDED.visual_variant,
  updated_at = now();

INSERT INTO public.domains (id, site_id, hostname, status, is_primary)
VALUES
  (
    '22000000-0000-4000-8000-000000000001',
    '21000000-0000-4000-8000-000000000001',
    'northstar-gym.staging.test',
    'active',
    true
  ),
  (
    '22000000-0000-4000-8000-000000000002',
    '21000000-0000-4000-8000-000000000002',
    'harbour-gym.staging.test',
    'active',
    true
  )
ON CONFLICT (hostname) DO UPDATE SET
  site_id = EXCLUDED.site_id,
  status = EXCLUDED.status,
  is_primary = EXCLUDED.is_primary,
  updated_at = now();

INSERT INTO public.site_content (
  site_id,
  schema_version,
  content,
  visual_variant,
  feature_flags
)
VALUES
  (
    '21000000-0000-4000-8000-000000000001',
    1,
    $northstar$
    {
      "name": "Northstar Training Club",
      "tagline": "Train with intent",
      "description": "A synthetic strength and conditioning gym used only to verify staging tenant isolation.",
      "phone": "+94 00 000 0001",
      "email": "northstar@example.test",
      "address": "1 Test Orbit",
      "city": "Colombo",
      "heroTitle": "Build strength with a clear plan",
      "heroSubtitle": "Small-group coaching, measured progress, and a synthetic staging-only membership experience.",
      "heroCtaText": "View memberships",
      "heroImage": "/content-placeholder.svg",
      "logo": "/content-placeholder.svg",
      "socialLinks": {},
      "whatsapp": {
        "phone": "94000000001",
        "defaultMessage": "Hello Northstar, this is a synthetic staging enquiry."
      },
      "seo": {
        "title": "Northstar Training Club",
        "description": "Synthetic Northstar Gym content for isolated staging verification.",
        "keywords": ["synthetic", "strength", "staging"],
        "ogImage": "/content-placeholder.svg"
      },
      "aboutImage": "/content-placeholder.svg",
      "membership": [
        {
          "id": "northstar-foundation",
          "name": "Foundation",
          "price": 7500,
          "currency": "LKR",
          "period": "month",
          "description": "Synthetic access to coached strength sessions.",
          "link": "#contact",
          "features": ["Three coached sessions", "Progress review"],
          "highlighted": true,
          "badge": "Synthetic"
        }
      ],
      "trainers": [
        {
          "id": "coach-nova",
          "name": "Coach Nova",
          "specialization": "Strength foundations",
          "experience": "8 synthetic years",
          "image": "/content-placeholder.svg",
          "bio": "A fictional coach profile created only for staging isolation tests.",
          "certifications": ["Synthetic Strength Level 1"]
        }
      ],
      "classes": [
        {
          "id": "northstar-strength",
          "name": "Foundation Strength",
          "instructor": "Coach Nova",
          "day": "Monday",
          "time": "18:30",
          "duration": "60 minutes",
          "level": "Beginner",
          "spots": 10
        }
      ],
      "testimonials": [
        {
          "id": "northstar-review",
          "name": "Synthetic Member A",
          "role": "Test fixture",
          "content": "Northstar content remains distinct from the second synthetic Gym site.",
          "rating": 5,
          "avatar": "/content-placeholder.svg"
        }
      ],
      "galleryImages": [
        {
          "id": "northstar-floor",
          "src": "/content-placeholder.svg",
          "alt": "Synthetic Northstar training floor",
          "category": "Strength"
        }
      ],
      "amenities": ["Strength floor", "Synthetic progress tracking"]
    }
    $northstar$::jsonb,
    'classic',
    '{
      "membership": true,
      "trainers": true,
      "classSchedule": true,
      "testimonials": true,
      "gallery": true,
      "whatsapp": true
    }'::jsonb
  ),
  (
    '21000000-0000-4000-8000-000000000002',
    1,
    $harbour$
    {
      "name": "Harbour Strength Lab",
      "tagline": "Build your base",
      "description": "A separate fictional performance gym used to expose cross-tenant staging mistakes.",
      "phone": "+94 00 000 0002",
      "email": "harbour@example.test",
      "address": "2 Test Harbour",
      "city": "Galle",
      "heroTitle": "Performance training without the noise",
      "heroSubtitle": "A synthetic editorial Gym profile with different content, features, and lead ownership.",
      "heroCtaText": "Explore coaching",
      "heroImage": "/content-placeholder.svg",
      "socialLinks": {
        "instagram": "https://example.test/harbour-strength"
      },
      "whatsapp": {
        "phone": "94000000002",
        "defaultMessage": "Hello Harbour, this is a synthetic staging enquiry."
      },
      "seo": {
        "title": "Harbour Strength Lab",
        "description": "Synthetic Harbour Gym content for isolated staging verification.",
        "keywords": ["synthetic", "performance", "staging"]
      },
      "aboutImage": "/content-placeholder.svg",
      "membership": [
        {
          "id": "harbour-performance",
          "name": "Performance Lab",
          "price": 12000,
          "currency": "LKR",
          "period": "month",
          "description": "Synthetic access to performance coaching and testing.",
          "link": "/contact",
          "features": ["Performance assessment", "Four coached sessions"],
          "highlighted": false
        }
      ],
      "trainers": [
        {
          "id": "coach-tide",
          "name": "Coach Tide",
          "specialization": "Athletic performance",
          "experience": "10 synthetic years",
          "image": "/content-placeholder.svg",
          "bio": "A fictional performance coach used only in the staging seed.",
          "certifications": ["Synthetic Performance Level 2"]
        }
      ],
      "classes": [
        {
          "id": "harbour-power",
          "name": "Power Development",
          "instructor": "Coach Tide",
          "day": "Wednesday",
          "time": "06:30",
          "duration": "75 minutes",
          "level": "Intermediate",
          "spots": 8
        }
      ],
      "testimonials": [
        {
          "id": "harbour-review",
          "name": "Synthetic Member B",
          "role": "Test fixture",
          "content": "Harbour data stays isolated from the Northstar tenant in every recovery check.",
          "rating": 4
        }
      ],
      "galleryImages": [
        {
          "id": "harbour-rig",
          "src": "/content-placeholder.svg",
          "alt": "Synthetic Harbour performance rig",
          "category": "Performance"
        }
      ],
      "amenities": ["Performance rig", "Synthetic testing zone"]
    }
    $harbour$::jsonb,
    'editorial',
    '{
      "membership": true,
      "trainers": true,
      "classSchedule": true,
      "testimonials": true,
      "gallery": false,
      "whatsapp": false
    }'::jsonb
  )
ON CONFLICT (site_id) DO UPDATE SET
  schema_version = EXCLUDED.schema_version,
  content = EXCLUDED.content,
  visual_variant = EXCLUDED.visual_variant,
  feature_flags = EXCLUDED.feature_flags,
  updated_at = now();

INSERT INTO public.site_revisions (
  id,
  site_id,
  template_key,
  schema_version,
  content,
  visual_variant,
  feature_flags,
  state,
  published_at
)
SELECT
  CASE site_id
    WHEN '21000000-0000-4000-8000-000000000001'::uuid
      THEN '23000000-0000-4000-8000-000000000001'::uuid
    ELSE '23000000-0000-4000-8000-000000000002'::uuid
  END,
  site_id,
  'gym',
  schema_version,
  content,
  visual_variant,
  feature_flags,
  'published',
  now()
FROM public.site_content
WHERE site_id IN (
  '21000000-0000-4000-8000-000000000001',
  '21000000-0000-4000-8000-000000000002'
)
ON CONFLICT (id) DO UPDATE SET
  content = EXCLUDED.content,
  visual_variant = EXCLUDED.visual_variant,
  feature_flags = EXCLUDED.feature_flags,
  state = EXCLUDED.state,
  published_at = EXCLUDED.published_at;

UPDATE public.sites
SET published_revision_id = CASE id
  WHEN '21000000-0000-4000-8000-000000000001'::uuid
    THEN '23000000-0000-4000-8000-000000000001'::uuid
  ELSE '23000000-0000-4000-8000-000000000002'::uuid
END
WHERE id IN (
  '21000000-0000-4000-8000-000000000001',
  '21000000-0000-4000-8000-000000000002'
);

INSERT INTO public.leads (
  id,
  site_id,
  name,
  email,
  phone,
  subject,
  message,
  status,
  delivery_status,
  source_route
)
VALUES
  (
    '24000000-0000-4000-8000-000000000001',
    '21000000-0000-4000-8000-000000000001',
    'Synthetic Northstar Lead One',
    'northstar-lead-1@example.test',
    '+94 00 000 0101',
    'Synthetic membership enquiry',
    'Synthetic Northstar staging lead number one.',
    'new',
    'not_configured',
    '/templates/gym'
  ),
  (
    '24000000-0000-4000-8000-000000000002',
    '21000000-0000-4000-8000-000000000001',
    'Synthetic Northstar Lead Two',
    'northstar-lead-2@example.test',
    '+94 00 000 0102',
    'Synthetic coaching enquiry',
    'Synthetic Northstar staging lead number two.',
    'contacted',
    'not_configured',
    '/templates/gym'
  ),
  (
    '24000000-0000-4000-8000-000000000003',
    '21000000-0000-4000-8000-000000000002',
    'Synthetic Harbour Lead One',
    'harbour-lead-1@example.test',
    '+94 00 000 0201',
    'Synthetic performance enquiry',
    'Synthetic Harbour staging lead number one.',
    'new',
    'not_configured',
    '/templates/gym'
  ),
  (
    '24000000-0000-4000-8000-000000000004',
    '21000000-0000-4000-8000-000000000002',
    'Synthetic Harbour Lead Two',
    'harbour-lead-2@example.test',
    '+94 00 000 0202',
    'Synthetic schedule enquiry',
    'Synthetic Harbour staging lead number two.',
    'new',
    'not_configured',
    '/templates/gym'
  ),
  (
    '24000000-0000-4000-8000-000000000005',
    '21000000-0000-4000-8000-000000000002',
    'Synthetic Harbour Lead Three',
    'harbour-lead-3@example.test',
    NULL,
    'Synthetic trial enquiry',
    'Synthetic Harbour staging lead number three.',
    'closed',
    'not_configured',
    '/templates/gym'
  )
ON CONFLICT (id) DO UPDATE SET
  site_id = EXCLUDED.site_id,
  name = EXCLUDED.name,
  email = EXCLUDED.email,
  phone = EXCLUDED.phone,
  subject = EXCLUDED.subject,
  message = EXCLUDED.message,
  status = EXCLUDED.status,
  delivery_status = EXCLUDED.delivery_status,
  source_route = EXCLUDED.source_route,
  updated_at = now();

COMMIT;
