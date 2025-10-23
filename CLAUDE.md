# Project Overview & Goals

## What We're Building
A specialized website template designed exclusively for **personal trainers and therapists** to create professional landing pages with integrated booking capabilities.

## Target Audience
- Personal trainers and fitness coaches
- Therapists (physical therapy, massage therapy, counseling)
- Wellness professionals seeking online presence

## Core Features
Landing pages with 4 essential pages:
- **Home**: Professional introduction and value proposition
- **About**: Personal story and credentials  
- **Services**: Detailed service offerings and pricing
- **Contact**: Easy booking and contact functionality

## Business Problems We Solve
- **Expensive Custom Development**: Affordable alternative to $5k+ custom websites
- **Poor SEO & Visibility**: Built-in optimization for better search ranking
- **Complex Booking Experience**: Streamlined appointment scheduling = more clients
- **Lack of Aesthetic Control**: High customization for professional branding
- **Unprofessional Online Presence**: Professional templates that build trust

## Success Metrics
- **Customization Ease**: Simple configuration for non-technical users
- **Delivery Time**: Fast setup and deployment (hours, not weeks)

## Unique Value Proposition
Unlike generic website builders, this template is purpose-built for fitness and wellness professionals with industry-specific features, layouts, and integrations that convert visitors into clients.

# Bash Commands
- npm install: Install dependencies
- npm run dev: Start development server at http://localhost:3000
- npm run build: Build production bundle
- npm run start: Start production server
- npm run lint: Run ESLint checks

# Current Priorities & Roadmap

## 🚀 Phase 1: Project Initialization (Current Priority)
**Status**: Not yet started - project setup required
- Initialize Next.js project structure
- Configure TypeScript and ESLint
- Set up basic file architecture
- Create context documentation files

## 🔧 Phase 2: Core Integrations (In Priority Order)
1. **Cloudinary** (Critical) - Image management and optimization
2. **Resend** (Critical) - Email functionality for contact forms
3. **Sanity** (Important) - Content management system  
4. **Calendly** (Nice-to-have) - Booking system integration

## 📋 Upcoming Features
- Responsive design system for fitness/wellness branding
- SEO optimization templates
- Contact form with email notifications
- Service showcase components
- About page testimonial sections

## ⏰ Timeline
- No specific deadlines set
- Focus on quality over speed
- Customization ease is primary success metric

# Core Files & Architecture

## Project Status
**Current State**: Pre-initialization phase - project structure not yet created

## Planned Architecture (Post-Setup)
- **package.json**: Project dependencies and scripts
- **next.config.js**: Next.js configuration file  
- **.env files**: Environment variables (API keys, URLs)
- **tsconfig.json**: TypeScript compiler configuration
- **src/**: Main source code folder
  - **pages/**: Next.js page files (Home, About, Services, Contact)
  - **api/**: API routes (contact forms, booking endpoints)
  - **components/**: Reusable UI components (fitness/wellness focused)
  - **lib/**: Helper functions and utilities
  - **hooks/**: Custom React hooks
  - **context/**: React context providers for shared state
  - **styles/**: CSS files and styling configurations
- **public/**: Static assets (images, icons, fonts)
- **templates/**: Predefined page/component templates for trainers/therapists
- **context/**: Design documentation and style guides (see Context Documentation section)
- **tests/**: Unit and integration tests
- **docs/**: Additional project documentation
- **README.md**: Project introduction and setup guide

## Key Architecture Decisions (Planned)
- **Next.js 14+**: App Router for modern React patterns
- **TypeScript**: Type safety throughout
- **Tailwind CSS**: Utility-first styling with custom fitness/wellness theme
- **shadcn/ui**: Component library on Radix UI primitives
- **Integration-First**: Built-in support for Cloudinary, Resend, Sanity, Calendly

# Code Style Guidelines
- Use TypeScript and ES Modules (import/export) everywhere
- Pages & Layouts: default export only (Next.js requirement)
- Utilities & Hooks: named exports for clarity
- Reusable UI Components: default export is fine
- Use absolute imports with @/* aliases via tsconfig.json
- Components: PascalCase (UserCard.tsx)
- Hooks: start with "use" prefix (useAuth.ts)
- Utilities: camelCase (formatDate.ts)
- Assets: kebab-case (profile-photo.png)
- Formatting: 2 spaces, semicolons on, double quotes, printWidth 80
- Auto-sort imports with eslint-plugin-simple-import-sort (order: third-party → @/* → relative)
- Auto-sort Tailwind classes with prettier-plugin-tailwindcss
- ESLint extends: next/core-web-vitals, @typescript-eslint recommended, prettier
- Prettier and ESLint configs are in .prettierrc and .eslintrc.json

# Testing Instructions
- Unit/Integration: Jest
  - npm run test: Run all Jest tests
  - npm run test:watch: Run Jest in watch mode
  - npm run test:coverage: Generate coverage report
- E2E: Playwright (Multi-browser support)
  - npm run test:e2e: Run all E2E tests
  - npm run test:e2e:ui: Interactive UI mode
  - npm run test:e2e:headed: Run with visible browser
  - npm run test:design: Run design verification tests only
  - npm run test:design:headed: Design verification with visible browser
- npm run test:ci: Run all tests with coverage (CI-friendly)
- Playwright auto-starts Next.js dev server via webServer config
- Test files located in tests/ directory
- Design verification tests based on context/design-principles_checklist.md

# Playwright Design Verification Subagent
IMPORTANT: Use the 'design-reviewer' subagent IMMEDIATELY after any frontend changes to verify implementation:

## Subagent Workflow (Required for all frontend changes):
1. **Change Analysis**: Review modified components/pages to identify affected views
2. **Navigation**: Use 'mcp_playwright_browser_navigate' to visit each changed page/view
3. **Design Compliance**: Compare implementation against /context/design-principles.md and /context/style-guide.md
4. **Feature Validation**: Ensure changes fulfill the specific user request
5. **Acceptance Criteria**: Verify against any provided requirements or context files
6. **Evidence Capture**: Take full page screenshots at 1440px desktop viewport of each changed view
7. **Error Detection**: Check console messages with 'mcp_playwright_browser_console_messages'
8. **Report Generation**: Provide summary of compliance issues, errors, and recommendations

## Required MCP Tools:
- mcp_playwright_browser_navigate: Navigate to pages/views
- mcp_playwright_browser_console_messages: Check for JavaScript errors
- mcp_playwright_browser_screenshot: Capture evidence at 1440px viewport
- mcp_playwright_browser_viewport: Set viewport to 1440px desktop

## Design Files Reference:
- /context/design-principles.md: Core design principles and guidelines
- /context/style-guide.md: Visual style specifications and component standards
- /context/: Additional design documentation and assets

## Trigger Conditions:
- After editing React components (.tsx, .jsx files)
- After modifying page files (src/pages/, src/app/)
- After updating CSS/styling (Tailwind classes, CSS modules)
- After changing layout or UI-related code
- When user explicitly requests design verification

## Usage Instructions:
After making any frontend changes, ALWAYS use:
```
Use the Task tool with subagent_type: "design-reviewer" to verify the frontend changes I just made
```

The subagent should:
1. Start the dev server (npm run dev) if not running
2. Navigate to affected pages using mcp_playwright_browser_navigate
3. Set viewport to 1440px using mcp_playwright_browser_viewport
4. Take screenshots using mcp_playwright_browser_screenshot
5. Check console for errors using mcp_playwright_browser_console_messages
6. Compare against design files in /context/ directory
7. Report any issues, non-compliance, or recommendations

# Development Environment Setup
- Node.js: Use Node 20 LTS (minimum ≥18.18). Use nvm: nvm install 20 && nvm use 20
- Package manager: npm (default)
- Global tools: Git and nvm
- Installation: npm install (Playwright browsers auto-install via postinstall hook)
- Environment variables required:
  - Public: NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_APP_NAME
  - Cloudinary: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET (or CLOUDINARY_URL)
  - Calendly: CALENDLY_API_TOKEN (PAT), CALENDLY_WEBHOOK_SIGNING_KEY
  - Sanity: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_VERSION, SANITY_TOKEN (optional)
  - Resend: RESEND_API_KEY
- Optional: Sanity Studio embedded at /studio
- Fonts: Use next/font (no extra keys needed)
- Playwright auto-starts Next.js dev server for E2E tests

# Context Documentation Requirements

## Required Documentation Files (To be created)
These files must be created to support the Playwright design verification subagent:

### Design Documentation
- `/context/design-principles.md` - Core design principles and guidelines for fitness/wellness branding
- `/context/style-guide.md` - Visual style specifications, colors, typography, component standards
- `/context/component-library.md` - Reusable UI component documentation
- `/context/brand-guidelines.md` - Brand voice, tone, and messaging for fitness professionals

### Content Templates
- `/context/content-templates.md` - Sample content for trainers and therapists
- `/context/seo-guidelines.md` - SEO best practices for local fitness businesses
- `/context/accessibility-requirements.md` - WCAG compliance standards

### Technical Context
- `/context/performance-standards.md` - Page speed and Core Web Vitals targets
- `/context/mobile-first-requirements.md` - Mobile responsiveness specifications

## Documentation Status
**Current**: No context files exist yet
**Priority**: Create design-principles.md and style-guide.md first for subagent functionality

# Claude Code Hooks Configuration
Configure these hooks in Claude Code settings for automated design verification:

## Post-Edit Hook (Recommended):
```json
{
  "hooks": {
    "post-edit": {
      "trigger": "file_extension_match",
      "patterns": ["*.tsx", "*.jsx", "*.css", "*.module.css"],
      "command": "echo 'Frontend file modified. Run design verification subagent.'",
      "auto_trigger": true
    }
  }
}
```

## Manual Trigger Command:
Add this alias to quickly trigger design verification:
```bash
# Add to ~/.bashrc or ~/.zshrc
alias verify-design="echo 'Use Task tool with subagent_type: design-reviewer to verify frontend changes'"
```

# Repository Etiquette
- Workflow: GitHub Flow (branch from main → PR → review → squash-merge → delete branch)
- Branch naming: {type}/{optional-ticket}-{short-kebab-description}
  - Types: feature/, fix/, chore/, docs/, refactor/, test/, ci/, hotfix/
  - Examples: feature/123-add-auth-flow, fix/navbar-overlap-mobile
- Commit messages: Use Conventional Commits (type(scope): description)
  - Examples: feat(auth): add passwordless login, fix(nav): correct focus trap
- Merge strategy: Squash & merge PRs into main (linear history)
- PRs required for main (no direct pushes ever)
- Minimum 1 approval required before merge
- Required status checks: lint, type-check, tests must pass
- Prefer small, focused PRs with clear descriptions
- Branch protection enabled on main with linear history requirement

# Important Warnings & Behaviors
- Static files: Only public/ is web-served. Files in assets/ are not public unless imported in code
- next/image + Cloudinary: Must whitelist external URLs in images.remotePatterns in next.config.js
- Netlify uses Netlify Image CDN for next/image (optimizes & caches at edge)
- App Router caching: Next.js caches aggressively. Control with fetch options or revalidation (revalidatePath, revalidateTag)
- Environment variables: Only prefix with NEXT_PUBLIC_ if browser must see them. Keep secrets server-only
- Netlify limits: Functions ~30s sync/15m background/1GB memory/6MB payloads; Edge Functions 20MB bundle/512MB memory/~50ms CPU
- Sanity Studio: Use catch-all route at /studio. Pin SANITY_API_VERSION to fixed date
- Calendly webhooks: Reschedules trigger both invitee.canceled and invitee.created (handle idempotency)
- Cloudinary security: Never expose API_SECRET client-side. Use signed uploads or restricted unsigned presets

# Additional Context
- Design system: Use Geist font everywhere (loaded via next/font)
- UI kit: shadcn/ui components on Radix UI primitives
- Design docs: DesignSystem.md and DesignPrinciples.md at repo root
- Design reviews: Use sub-agents for design QA (naming, spacing, states, a11y)
- Key integrations: Cloudinary (whitelist in images.remotePatterns), Sanity (embedded at /studio), Calendly (PAT + webhooks), Resend (server-only API key)
- Performance: Prefer Server Components, lazy-load with next/dynamic, track bundle size with @next/bundle-analyzer, use next/font and next/image
- SEO: Use Metadata API for titles/descriptions, add robots.txt and sitemap.ts, create local landing pages (service + city/area with unique content), maintain Google Business Profile with accurate NAP, add LocalBusiness JSON-LD structured data
- Deployment: Netlify uses OpenNext adapter, next/image uses Netlify Image CDN
- Workflow: GitHub Flow with Conventional Commits, squash-merge, 1 approval + required checks
- Use PageSpeed Insights reports with Claude to identify and fix performance issues