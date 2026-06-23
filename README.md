<<<<<<< HEAD
# Muhammad Waleed Ahmad — AI Engineer Portfolio

A unique, fully responsive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Showcases Computer Vision, Generative AI, and Agentic AI work — including the live products **Fortix AI** and **Sprixle**.

![Built with Next.js + Tailwind](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

---

## ✨ Features

- **Custom animated background** — live canvas particle constellation network, drifting aurora blobs, and a masked grid overlay for an "AI / neural" aesthetic.
- **Hero** with a typewriter role cycler, a faux-terminal "stack" card, floating stat badges, and an animated stats bar.
- **About** — narrative + highlight cards + an infinite tech marquee.
- **Projects** — responsive card grid using your real demo screenshots, with **click-to-open case-study modal** featuring an image gallery (prev/next + dots).
- **Skills** — categorized capability cards (AI/ML, Frameworks, DevOps, Languages).
- **Experience** — alternating vertical timeline with pulsing nodes + education card.
- **Contact** — working form with client + server-side validation, loading/success/error states, and direct links (email, phone, GitHub, LinkedIn).
- **Contact API** — `POST /api/contact` validates input and persists submissions to `messages/submissions.json`.
- **Polish** — glassmorphism, scroll-reveal animations, active-section nav tracking, sticky navbar, mobile slide-in menu, custom scrollbar, reduced-motion support, SEO + OpenGraph metadata, and a downloadable résumé PDF.
- **Responsive** — designed mobile-first; looks great from 360px phones to ultrawide monitors.

---

## 🚀 Quick start

> Requirements: **Node.js 18.17+** (Node 20+ recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open **http://localhost:3000**.

### Production build

```bash
npm run build
npm run start      # serves the optimized build on http://localhost:3000
```

---

## 📁 Project structure

```
portfolio/
├─ public/
│  ├─ projects/                 # your demo screenshots (fortix, sprixle, boaak, faceswap)
│  └─ Muhammad_Waleed_Ahmad_Resume.pdf
├─ src/
│  ├─ app/
│  │  ├─ api/contact/route.ts   # contact form API (validation + persistence)
│  │  ├─ icon.svg               # favicon
│  │  ├─ globals.css            # tailwind layers + custom styles/animations
│  │  ├─ layout.tsx             # fonts, metadata, root layout
│  │  └─ page.tsx               # composes all sections
│  ├─ components/
│  │  ├─ Background.tsx         # canvas particles + aurora + grid
│  │  ├─ Navbar.tsx             # sticky nav, active tracking, mobile menu
│  │  ├─ Hero.tsx               # typewriter + terminal card + stats
│  │  ├─ About.tsx              # narrative, pillars, marquee
│  │  ├─ Projects.tsx           # project grid
│  │  ├─ ProjectModal.tsx       # case-study modal w/ image gallery
│  │  ├─ Skills.tsx             # capability cards
│  │  ├─ Experience.tsx         # timeline + education
│  │  ├─ Contact.tsx            # contact form (client)
│  │  ├─ Footer.tsx
│  │  └─ RevealOnScroll.tsx
│  ├─ data/content.ts           # ← ALL editable content lives here
│  └─ hooks/useReveal.ts        # IntersectionObserver scroll reveal
├─ tailwind.config.ts
├─ next.config.mjs
└─ tsconfig.json
```

---

## ✏️ Customizing content

**Everything editable lives in one file:** [`src/data/content.ts`](src/data/content.ts).

- `profile` — name, roles, tagline, contact info, social links, summary.
- `stats` — the four numbers in the hero stats bar.
- `projects` — each project's name, category, description, highlights, tech stack, images, and live link.
- `skillGroups` — skill categories and items.
- `experiences` — work history timeline entries.
- `otherProjects` — the "more experiments" cards.

### Adding / swapping project images

Drop images into `public/projects/` and reference them in the `projects[].images` array (use paths like `/projects/my-image.png`). The first image is the card thumbnail; all images appear in the modal gallery.

### Colors & theme

Brand colors are defined as CSS-friendly tokens in [`tailwind.config.ts`](tailwind.config.ts) under `colors` (`brand`, `accent`, `lime`, `ink`). Edit the HSL/hex values there to re-theme the whole site.

---

## 📬 Contact form behavior

By default the form works out of the box:

1. The client validates and `POST`s to `/api/contact`.
2. The route re-validates server-side, then appends the message to `messages/submissions.json` and logs it to the server console.

To **deliver submissions to your inbox**, wire up an email provider in [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts). Copy `.env.example` → `.env.local` and add your keys.

The route now supports:
- `SENDGRID_API_KEY` + `EMAIL_TO` — preferred SendGrid delivery path.
- `EMAIL_USER` + `EMAIL_PASS` + `EMAIL_TO` — Gmail SMTP fallback.

For Gmail SMTP, you must enable 2-Step Verification and use an App Password. Plain Gmail password is usually rejected by Google.

If you want a different provider later, keep the current validation and message formatting; just update `route.ts` to use that email API.

---

## ☁️ Deploying

This is a standard Next.js app — deploy anywhere that supports Node.

### Vercel (recommended)

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects **Next.js** — no config needed. Deploy.

> Note: the contact API uses the Node.js runtime (it writes files). On serverless platforms like Vercel the filesystem is read-only, so either swap `messages/submissions.json` for a database/KV store, or add an email provider as described above before deploying.

### Self-host / Docker

```bash
npm run build
npm run start    # runs on PORT 3000; reverse-proxy with nginx/Caddy as needed
```

---

## 🧱 Tech stack

| Layer       | Choice                                   |
| ----------- | ---------------------------------------- |
| Framework   | Next.js 14 (App Router, RSC)             |
| Language    | TypeScript 5                             |
| Styling     | Tailwind CSS 3 + custom CSS              |
| Fonts       | Space Grotesk + JetBrains Mono (Google)  |
| Animations  | CSS keyframes + Canvas + IntersectionObserver |
| Icons       | Inline SVG (no icon dependency)          |

No heavy UI library — every visual is hand-built for a unique look and a tiny bundle (~101 kB First Load JS).


## 📄 License

Personal portfolio content © Muhammad Waleed Ahmad. Code structure is yours to adapt and reuse.
