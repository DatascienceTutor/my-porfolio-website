# Implementation Plan

## Phase 1: Project Scaffolding
1. Initialize Next.js 14 App Router project with TypeScript and Tailwind CSS in the root directory.
2. Install dependencies: `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`.
3. Configure `tailwind.config.ts` to include the custom colors, fonts, and border radii documented in `DESIGN.md`.
4. Update `app/layout.tsx` to include `Inter` and `JetBrains Mono` from `next/font/google`.
5. Update `app/globals.css` with base styles, removing default Next.js boilerplate and adding smooth scrolling.

## Phase 2: Component Construction
Create modular components under `components/`:

1. **Header (`Header.tsx`)**
   - Sticky navbar with backdrop blur.
   - Logo/Initials, Desktop Navigation Links (Overview, Selected Projects, Career Experience, Expertise, Contact).
   - Action buttons (GitHub, LinkedIn, Get in Touch).
2. **Hero (`Hero.tsx`)**
   - Eyebrow status bar.
   - Headline ("Sreejith Vasudevan") and value proposition.
   - Call-to-action buttons ("Explore my work", "LinkedIn").
3. **Selected Work / Projects (`Projects.tsx`)**
   - Grid layout of case studies and project highlights.
4. **Career Experience (`Experience.tsx`)**
   - Timeline or card-based layout of roles (e.g., Senior Manager AI/ML at Cognizant).
5. **Expertise & Tech Stack (`Expertise.tsx`)**
   - Sections for AI/ML domains, languages, tools, etc.
6. **Footer / Contact (`Footer.tsx`)**
   - Contact links, location info, footer text.

## Phase 3: Assembly & Refinement
1. Assemble all sections in `app/page.tsx`.
2. Add Framer Motion transitions (e.g., fade up on scroll for sections).
3. Ensure pixel-perfect adherence to the provided Tailwind classes and structures.
4. Verify responsive design (mobile, tablet, desktop breakpoints).

## Phase 4: Validation
1. Run `npm run dev` and perform visual checking against the original design.
2. Check for hydration errors, linting issues, and TypeScript errors.
