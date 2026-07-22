# WebsiteTemplates

A production-ready website template marketplace with 5 fully functional business website templates.

## Templates Included

| Template | Route | Theme |
|---|---|---|
| Gym | `/templates/gym` | Orange / Dark |
| Salon | `/templates/salon` | Rose / Luxury |
| Restaurant | `/templates/restaurant` | Amber / Premium |
| Tuition Class | `/templates/tuition` | Blue / Trustworthy |
| Real Estate | `/templates/realestate` | Emerald / Modern |

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theme**: next-themes (dark/light mode)
- **Deployment**: Vercel

---

## Installation

### 1. Clone and install dependencies

```bash
# Navigate to project folder
cd website-templates

# Install dependencies
npm install

# Or with pnpm (recommended)
pnpm install
```

### 2. Install additional required package

```bash
npm install tailwindcss-animate
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and set your site URL:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 4. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the marketplace.

---

## Customising a Template

All template content is stored in the `config/` folder. **You only need to edit one file per template.**

### Example: Customising the Gym template

Open `config/gym.ts` and update:

```typescript
export const gymConfig: GymConfig = {
  name: "Your Gym Name",          // ← Business name
  phone: "+94 77 000 0000",       // ← Your phone
  email: "info@yourgym.com",      // ← Your email
  address: "123 Main Street",     // ← Your address
  city: "Your City",

  whatsapp: {
    phone: "94770000000",          // ← WhatsApp number (no +, no spaces)
    defaultMessage: "Hi! ...",     // ← Pre-filled WhatsApp message
  },

  heroTitle: "Your Hero Headline",
  heroSubtitle: "Your subtitle text...",

  // Update membership plans, trainers, testimonials, etc.
  membership: [...],
  trainers: [...],
};
```

A non-technical person can edit this file without touching any UI code.

---

## WhatsApp Configuration

The floating WhatsApp button uses the `whatsapp` field inside each template's config. Update the phone number (without `+`) and the pre-filled message.

```typescript
// config/gym.ts
whatsapp: {
  phone: "94771234567",  // Country code + number, no spaces
  defaultMessage: "Hi! I'd like to join the gym.",
},
```

## Gym Template Google Sheet Test

The gym template can now read editable content from the Google Apps Script web app, using `config/gym.ts` as the fallback when the sheet is unavailable.

1. Paste `GoogleAppsScript/gym-google-apps-script.js` into the Apps Script project attached to your Google Sheet.
2. Deploy it as a web app, or update the existing deployment.
3. Visit:
   ```text
   YOUR_WEB_APP_URL?action=setupGymContent
   ```
   This creates the editable `Gym Content` tab.
4. Set the URL locally:
   ```bash
   GOOGLE_SHEET_WEB_APP_URL=YOUR_WEB_APP_URL
   ```
   If omitted, the app uses `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL` as a legacy fallback.
   Google Sheets content is cached for five minutes by default. Configure the
   duration in seconds with `GOOGLE_SHEETS_REVALIDATE_SECONDS` in `.env.local`
   (and in your hosting provider's environment variables for production).
   Google Apps Script requests time out after ten seconds by default. Configure
   this in milliseconds with `GOOGLE_SHEETS_REQUEST_TIMEOUT_MS`. If the service
   is unavailable during revalidation, the previously cached page remains
   available.
5. Check the normalized content at:
   ```text
   http://localhost:3000/api/gym-content
   ```

Template contact forms submit to the same-origin `/api/leads` route. That route
validates the form, sends it to the configured Apps Script from the server, and
reports success only when Apps Script returns both a successful HTTP response
and `{ "ok": true }`.

---

## Replacing Images and Understanding Caching

Use the **Value** column in the relevant template's Google Sheets Settings tab
to replace an image. Image fields have keys such as `heroImage`, `logo`,
`menu.1.image`, `trainers.1.image`, `galleryImages.1.src`, and
`testimonials.1.avatar`. The Help column identifies image rows.

### Safe replacement workflow

1. Upload the new image somewhere publicly accessible. A direct HTTPS image URL
   or a Google Drive sharing URL is supported. The image must be viewable
   without signing in.
2. Prefer a **new file URL** for each replacement. For Google Drive, upload a
   new file rather than replacing the contents of the old one, so it receives a
   new file ID.
3. Paste the URL into the row's **Value** cell. A rich-text hyperlink in that
   cell also works; the Apps Script reads the link destination.
4. Wait for the Sheets content cache to revalidate, then reload the affected
   page. The default is five minutes (`GOOGLE_SHEETS_REVALIDATE_SECONDS=300`).
   Revalidation is request-triggered: the first visit after that period can
   briefly receive the previous page while Next.js refreshes it; reload once
   more after a few seconds.

### What each value means

- A normal URL displays that image.
- `#FALLBACK` deliberately shows the matching local demo image from `config/`.
- A blank, invalid, or missing image value displays the visible **Missing image**
  tile. This is intentional, so incomplete Sheet content is not mistaken for
  demo data.
- A local path such as `/placeholder_images/...` only works when that file is
  committed under `public/` and included in the deployed build. It is useful for
  project-owned placeholders, not for ad-hoc customer uploads.

### Why an old image can remain visible

There are two separate caches:

1. **Content cache:** Next.js caches the Apps Script response, so the site may
   continue using the previous image URL until the revalidation period passes.
2. **Image cache:** browsers and Vercel's image optimizer cache the file behind
   an image URL. Replacing the file at the same URL may therefore continue to
   show the old pixels even after the Sheet value has refreshed.

Using a new image URL avoids both ambiguity and cache-busting tricks. Do not add
random query strings to Google Drive links; use a new Drive file ID instead.

### If the change still does not appear

1. Confirm the Sheet cell contains the exact public image URL, with no extra
   spaces.
2. Open the URL in an incognito/private browser window. If it asks for sign-in,
   the website cannot use it.
3. Wait at least the configured `GOOGLE_SHEETS_REVALIDATE_SECONDS`, visit the
   page once, wait a few seconds, then reload.
4. Test in a private window to bypass your normal browser cache.
5. For local testing only, run `npm.cmd run dev:fresh`. This clears the local
   Next.js cache and starts development again; it does not clear Vercel's cache.

The default image-host allowlist supports `images.unsplash.com`,
`plus.unsplash.com`, and `drive.google.com`. A new external image host requires
a code/deployment change to `next.config.ts` (or the intentionally broad
`ALLOW_ANY_IMAGE_HOSTS=true` setting), so prefer the existing supported sources
while the project is in this pilot stage.

---

## Adding Email Integration

The contact form currently logs submissions to the console. To add email:

1. Install an email SDK (e.g. Resend):
   ```bash
   npm install resend
   ```

2. Create an API route `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(req: Request) {
     const data = await req.json();
     await resend.emails.send({
       from: 'noreply@yourdomain.com',
       to: process.env.CONTACT_EMAIL!,
       subject: `New contact: ${data.subject}`,
       text: JSON.stringify(data, null, 2),
     });
     return Response.json({ ok: true });
   }
   ```

3. Update `ContactForm.tsx` to POST to `/api/contact` instead of console.log.

---

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts — select the project root
```

### Option 2: GitHub Integration (Recommended)

1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/website-templates.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and click **Import Project**

3. Connect your GitHub repo

4. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL` → your Vercel URL

5. Click **Deploy** — your site will be live in ~2 minutes!

---

## Project Structure

```
website-templates/
├── app/
│   ├── layout.tsx              # Root layout with ThemeProvider
│   ├── page.tsx                # Marketplace homepage
│   ├── templates/
│   │   ├── page.tsx            # Template gallery
│   │   ├── gym/page.tsx
│   │   ├── salon/page.tsx
│   │   ├── restaurant/page.tsx
│   │   ├── tuition/page.tsx
│   │   └── realestate/page.tsx
│   ├── pricing/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/                 # Navbar, Footer, ThemeToggle
│   ├── home/                   # Homepage sections
│   ├── shared/                 # WhatsApp, animations, forms
│   ├── templates/              # All 5 template component sets
│   └── ui/                     # Shadcn UI base components
├── config/
│   ├── whatsapp.ts             # Global WhatsApp config
│   ├── gym.ts                  # ← Edit this to customise gym
│   ├── salon.ts                # ← Edit this to customise salon
│   ├── restaurant.ts           # ← Edit this to customise restaurant
│   ├── tuition.ts              # ← Edit this to customise tuition
│   └── realestate.ts           # ← Edit this to customise real estate
├── hooks/
│   └── useTheme.ts
├── lib/
│   ├── utils.ts                # cn(), formatPrice(), etc.
│   └── seo.ts                  # SEO metadata helpers
└── types/
    └── index.ts                # All TypeScript types
```

---

## Features

- ✅ **5 complete templates** — Gym, Salon, Restaurant, Tuition, Real Estate
- ✅ **Dark / Light mode** — persisted in localStorage, respects system theme
- ✅ **WhatsApp floating button** — configurable per template
- ✅ **SEO optimised** — meta tags, OG, Twitter cards, schema markup
- ✅ **Mobile-first responsive** — tested on all screen sizes
- ✅ **Framer Motion animations** — scroll-triggered, hover effects, page transitions
- ✅ **Contact forms** — React Hook Form + Zod validation
- ✅ **CMS config files** — non-technical owners can edit content
- ✅ **TypeScript throughout** — fully typed
- ✅ **Vercel-ready** — deploy in minutes

---

## License

This project is provided for commercial use. Once purchased, you may use and modify the templates for client projects. Resale rights included with the Bundle plan.
