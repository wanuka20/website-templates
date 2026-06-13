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
