# Space Exploration Information Website

## Overview

This is a space-themed informative website built as a single-page application featuring "A Hippocratic Oath for Medical AI Agents in Deep-Space Missions". The application presents information about space exploration, AI technology in medicine, and medical ethics through visually engaging sections with animations and interactive components. The site uses a cyan/teal/green color scheme matching the AI poster logo, with a "horizon green" hero background, particle effects, and smooth scroll animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, chosen for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- Single-page application architecture with route-based code splitting

**UI Component System**
- Shadcn UI component library (New York style variant) providing accessible, customizable components built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom theme extensions for space-themed colors (cyan accents, dark backgrounds)
- Custom CSS variables for consistent theming across light/dark modes
- Framer Motion for declarative animations (scroll-triggered reveals, parallax effects, transitions)

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod resolvers for form validation
- Local component state via React hooks for UI interactions

**Design System**
- Space Grotesk font for headings (bold, futuristic aesthetic)
- Inter font for body text (clean readability)
- Cosmic color palette: cyan/teal/green theme (hsl 180-based) matching AI poster logo, replacing previous purple theme
- Primary color: cyan (hsl 180 75% 45-50%)
- Dark teal backgrounds (#0a1f1f, #0f2d2d) for space-themed atmosphere
- Consistent spacing primitives using Tailwind's 4/8/12/16 unit system
- Hover/active state elevations with backdrop blur effects
- Custom animations: floating particles, parallax scrolling, fade-in on scroll

**Interactive Features**
- Clickable team member names in hero section that open dialogs with detailed information:
  - Contribution (team member's role in the project)
  - Profession (their professional title)
  - Contact (email address)
  - Dialog labels use darker teal color (#286F65)
- Expandable comparative cards for AI Assistant and AI Agent with detailed information
- Clickable Hippocratic Oath button opening modal with neon border effect

**Page Sections**
- Hero: Vertically centered title with team member buttons at bottom
- Abstract: Two-column layout with AI poster logo on left, title and content on right
- Introduction: Project background and context
- Comparative Analysis: Expandable cards comparing AI Assistant and AI Agent
- Medical AI Ethics: Discussion of ethical considerations
- Hippocratic Oath: Interactive button to view the proposed oath
- Conclusions: Final thoughts and vision for the future

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- TypeScript for type safety across the full stack
- ESM module system for modern JavaScript features
- Session-based architecture prepared (connect-pg-simple middleware)

**Development & Production Setup**
- Vite middleware mode in development for seamless SSR-ready architecture
- Separate build outputs: client assets to `dist/public`, server bundle to `dist`
- esbuild for server-side bundling (faster than webpack)
- Request logging middleware for API routes with response capture

**Storage Layer**
- In-memory storage implementation (MemStorage class) as the current data layer
- Interface-based design (IStorage) allowing easy swapping to database implementations
- Prepared for Drizzle ORM integration with PostgreSQL schema defined

### Data Storage Solutions

**Database Schema (Prepared)**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver
- Schema defined in `shared/schema.ts` for code sharing between client/server
- User table with UUID primary keys, username/password fields
- Zod schemas generated from Drizzle for runtime validation

**Current Implementation**
- Temporary in-memory Map-based storage for users
- CRUD interface pattern (getUser, getUserByUsername, createUser)
- Ready to swap to database-backed implementation without changing route logic

**Migration Strategy**
- Drizzle Kit configured for schema migrations
- Migration files output to `./migrations` directory
- `db:push` script for syncing schema to database

### External Dependencies

**UI & Interaction Libraries**
- Radix UI primitives: 20+ component packages for accessible UI patterns (dialogs, dropdowns, tooltips, etc.)
- Framer Motion: Animation library for scroll-triggered and gesture-based animations
- Embla Carousel: Touch-friendly carousel component
- cmdk: Command palette component
- Lucide React: Icon system
- date-fns: Date manipulation and formatting

**Development Tools**
- TypeScript compiler for type checking
- PostCSS with Tailwind CSS and Autoprefixer
- TSX for running TypeScript in development
- Replit-specific plugins: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner

**Database & Backend**
- @neondatabase/serverless: PostgreSQL client for serverless environments
- drizzle-orm & drizzle-zod: ORM with Zod schema generation
- connect-pg-simple: PostgreSQL session store for Express

**Fonts & Assets**
- Google Fonts API: Space Grotesk and Inter font families
- Generated space-themed images stored in `attached_assets/generated_images/`
- Hero background: "horizon green" image (`attached_assets/horizon green_1762478563215.png`)
- AI poster logo (`attached_assets/AI Poster Logo (1)_1762478460895.png`) displayed in Abstract section on the left side
- Custom logo and background assets

**Path Aliases**
- `@/`: Maps to `client/src/` for component imports
- `@shared/`: Maps to `shared/` for shared types/schemas
- `@assets/`: Maps to `attached_assets/` for images