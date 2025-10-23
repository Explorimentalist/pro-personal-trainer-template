# Product Requirements Document (PRD)
## Hey-Oko Website Template for Wellness Professionals

### Document Version
**Version**: 1.0  
**Date**: September 30, 2025  
**Status**: Initial Requirements

---

## Executive Summary

### Product Vision
A specialized website template designed exclusively for solo-preneur wellness professionals (personal trainers, therapists, fitness coaches) to create professional landing pages with integrated booking capabilities.

### Target Market
- **Primary**: Solo-preneur wellness professionals
- **Specific Segments**: Personal trainers, therapists (physical, massage, counseling), fitness coaches
- **Business Model**: Individual practitioners (not clinics or studios)

---

## Core User Journey & Flow

### Primary User Flow
1. **Landing Page** - Professional introduction, value proposition, testimonials, FAQ
2. **Services Page** - Detailed service offerings, pricing, and program descriptions
3. **About Page** - Personal story, credentials, professional background
4. **Contact Page** - Contact form with optional booking integration

### Content Architecture
- **Landing Page Sections**:
  - Hero/Introduction
  - Services overview (teaser with link to full Services page)
  - Testimonials
  - FAQ section
  - Call-to-action leading to Services or About page
- **Services Page**: Detailed service offerings, pricing structures, program descriptions
- **About Page**: Professional story and credentials
- **Contact Page**: Contact form with optional Calendly integration

---

## Technical Requirements

### Core Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript throughout
- **Styling**: Tailwind CSS with custom wellness theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Content Management**: Sanity CMS (required for non-technical users)

### Integration Requirements

#### Critical Integrations
1. **Sanity CMS** - Content management for non-technical users
2. **Resend** - Contact form email functionality
3. **Cloudinary** - Image management and optimization

#### Booking Integration Options
- **Basic**: Simple contact form (default)
- **Advanced**: Calendly embed OR custom booking UI with full API integration
- **Upgrade Path**: Enhanced booking features available at extra cost

#### Email Functionality
- **Core**: Contact form submissions
- **Future**: Appointment confirmations and reminders (upgrade feature)

---

## Customization Requirements

### User Customization Level
- **Content**: Text and images (fully customizable via Sanity)
- **Visual**: Colors and fonts
- **Layout**: Limited layout variants
- **Management**: Self-managed by end users

### Design System
- **Approach**: Single adaptable design variant
- **Themes**: Multiple theme options stored in `/templates/` folder
- **Customization Scope**: Colors, typography, layout variations

### Not Included (Upgrade Features)
- Payment processing
- Advanced booking systems
- Custom layout design
- Additional pages beyond core 4-page structure

---

## Content Strategy

### Landing Page Content Structure
- **Services Presentation**: 
  - Option A: Simple list format
  - Option B: Categorized with pricing display
- **Social Proof**: Testimonials section
- **Trust Building**: FAQ section
- **Navigation**: Clear path to About page

### Content Management Approach
- **Platform**: Sanity CMS
- **User Type**: Non-technical wellness professionals
- **Control Level**: Full content control (text, images, basic layout)

---

## Business Model & Pricing Strategy

### Core Offering
- **Base Template**: 4-page website (Landing, Services, About, Contact)
- **Included**: Basic contact form, content management, responsive design
- **Target**: Solo wellness professionals

### Upgrade Revenue Streams
- **Enhanced Booking**: Calendly integration or custom booking system
- **Payment Processing**: Stripe/PayPal integration
- **Email Marketing**: Appointment reminders, follow-up sequences
- **Custom Design**: Additional layouts or bespoke modifications

---

## Success Metrics

### Primary KPIs
- **Customization Ease**: Time from template to personalized site
- **User Adoption**: Non-technical user completion rate
- **Performance**: Site speed and Core Web Vitals compliance

### Business Metrics
- **Setup Time**: Target under 4 hours from template to live site
- **User Satisfaction**: Ease of content management
- **Conversion Optimization**: Lead generation effectiveness

---

## Technical Constraints & Decisions

### Architecture Decisions
- **Deployment**: Netlify (OpenNext adapter)
- **Image Optimization**: Netlify Image CDN
- **Font Strategy**: Geist font via next/font
- **State Management**: React Context for shared state

### Development Constraints
- **Browser Support**: Modern browsers only
- **Mobile First**: Responsive design required
- **Performance**: Optimized for Core Web Vitals
- **SEO**: Built-in optimization for local businesses

### Integration Limitations
- **Calendly**: Embed integration preferred for MVP
- **Email**: Server-side only (Resend API key security)
- **Images**: Cloudinary with proper remote pattern configuration

---

## Implementation Phases

### Phase 1: Foundation (Current Priority)
- Project initialization and architecture setup
- Core 4-page template structure
- Basic Sanity CMS integration

### Phase 2: Core Features
- Landing page with services overview and testimonials
- Detailed Services page (most important after landing)
- About and Contact page templates
- Contact form with Resend integration

### Phase 3: Customization System
- Theme variant system
- Color/font customization interface
- Template folder structure

### Phase 4: Enhancement & Polish
- Calendly integration options
- Performance optimization
- Design verification system

---

## Open Questions & Future Considerations

### Clarification Needed
- Specific theme variants and visual styles
- Sanity schema structure for content types
- Calendly integration depth (embed vs. API)

### Future Enhancements
- Multi-language support
- Blog functionality
- Advanced analytics integration
- White-label options for agencies