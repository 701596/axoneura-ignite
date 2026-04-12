

## Axoneura — Dark-Themed Multi-Page Website

### Design System
- **Background:** #0a0a0f (deep black)
- **Primary accent:** #378ADD (electric blue)
- **Glassmorphism cards:** semi-transparent backgrounds with backdrop-blur and subtle borders
- **Typography:** Clean sans-serif (Inter), no gradient text
- **Animations:** Framer Motion for scroll reveals, page transitions, and hover effects
- **Mobile-first:** Optimized for Indian mobile users (touch targets, fast loading)

### Database
- Create a `leads` table in Supabase with fields: `id`, `name`, `phone`, `email`, `message`, `source`, `created_at`
- RLS policy: allow anonymous inserts (public lead capture), restrict reads to authenticated users

### Pages & Sections

**Navigation** — Sticky glassmorphism navbar with logo, page links, active state indicators, mobile hamburger menu, and "Book a free call" CTA button.

**Home (`/`)**
1. **Hero** — "Stop running your school on WhatsApp groups" headline, subheading, "Book a free call" CTA with subtle glow effect
2. **Trust bar** — Logos/stats strip
3. **Services overview** — 4 cards (SaaS, Web Design, Marketing, Automation) with icons
4. **Who we serve** — Schools & local businesses with brief descriptions
5. **Why us** — Key differentiators in glassmorphism cards
6. **Lead capture form** — Name, phone, email, message → submits to Supabase `leads` table

**Services (`/services`)**
- Full breakdown: SaaS Development, Web Design, Digital Marketing, Automation
- Each service gets a detailed card with features list

**Schools (`/schools`)**
- Pain points section (WhatsApp chaos, manual admissions, no online presence)
- Solutions Axoneura provides
- Case study placeholder
- "Book a call" CTA

**Business (`/business`)**
- Pain points for local businesses (no website, manual processes, zero online visibility)
- Solutions offered
- Case study placeholder
- "Book a call" CTA

**About (`/about`)**
- Mission statement
- Team section with placeholders
- Company values

**Contact (`/contact`)**
- Lead form → Supabase (`source: "contact"`)
- WhatsApp CTA button
- Location/map placeholder

**Footer** — Links, copyright, social icons

### Codebase Structure
```
src/
  components/    — Navbar, Footer, LeadForm, ServiceCard, SectionWrapper, etc.
  pages/         — Home, Services, Schools, Business, About, Contact
  lib/           — Supabase client (already configured)
```

### Tech
- Framer Motion for page transitions and scroll-triggered animations
- React Router (already set up, will add routes)
- Supabase client already connected — will create the leads table via migration

