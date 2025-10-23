# Award-Winning Style Guide - Hey Oko Fitness Template

## Color System Based on S-Tier Design Principles

### Primary Color Palette Options

**High-Energy Fitness Brand**
```css
--fitness-electric-blue: #007AFF     /* Primary - Trust, Energy */
--fitness-vibrant-orange: #FF6B35    /* Secondary - Motivation */
--fitness-energetic-green: #2ED573   /* Success - Achievement */
--fitness-charcoal: #2C2C2C          /* Dark - Sophistication */
```

**Wellness/Holistic Brand**
```css
--wellness-forest-green: #228B22     /* Primary - Nature, Growth */
--wellness-warm-beige: #F5F5DC       /* Secondary - Calm, Trust */
--wellness-sage: #9CAF88             /* Accent - Balance */
--wellness-deep-brown: #3C2415       /* Dark - Grounding */
```

**Premium Positioning Brand**
```css
--premium-charcoal: #2C2C2C          /* Primary - Luxury */
--premium-gold: #FFD700              /* Secondary - Excellence */
--premium-platinum: #E5E4E2          /* Accent - Sophistication */
--premium-black: #000000             /* Dark - Authority */
```

### Modern Neutral Palette
```css
--gray-50: #fafafa
--gray-100: #f5f5f5
--gray-200: #e5e5e5
--gray-300: #d4d4d4
--gray-400: #a3a3a3
--gray-500: #737373
--gray-600: #525252
--gray-700: #404040
--gray-800: #262626
--gray-900: #171717
```

### Color Usage Guidelines

**Primary Actions & CTAs**
- Use vibrant primary colors for immediate action buttons
- Maintain 4.5:1 contrast ratio for accessibility
- Apply subtle gradients for depth and premium feel

**Trust & Credibility Elements**
- Secondary blues for informational content
- Green for success states and achievements
- Gold/Premium accents for certifications and awards

**Energy & Motivation**
- Orange/vibrant accents for energy elements
- Red for urgency and immediate action
- Bright colors for progress indicators

## Advanced Typography System

### Font Hierarchy (Award-Winning Scale)

**Desktop Typography Scale**
```css
/* Hero & Impact Headlines */
--text-hero: 4.5rem         /* 72px - Maximum impact */
--text-display: 3.75rem     /* 60px - Section headers */
--text-headline: 3rem       /* 48px - Major headings */

/* Content Hierarchy */
--text-title: 2.25rem       /* 36px - Page titles */
--text-subtitle: 1.875rem   /* 30px - Section subtitles */
--text-subheading: 1.5rem   /* 24px - Content headers */

/* Body Content */
--text-large: 1.25rem       /* 20px - Featured content */
--text-body: 1.125rem       /* 18px - Main body text */
--text-base: 1rem           /* 16px - Standard text */
--text-small: 0.875rem      /* 14px - Supporting text */
--text-caption: 0.75rem     /* 12px - Captions, labels */
```

**Mobile Typography Scale**
```css
/* Mobile-Optimized Sizes */
--text-hero-mobile: 2.5rem      /* 40px */
--text-display-mobile: 2rem     /* 32px */
--text-headline-mobile: 1.75rem /* 28px */
--text-title-mobile: 1.5rem     /* 24px */
--text-body-mobile: 1rem        /* 16px - Never smaller */
```

### Font Weight System
```css
--font-weight-light: 300        /* Subtle text */
--font-weight-regular: 400      /* Body text */
--font-weight-medium: 500       /* Emphasis */
--font-weight-semibold: 600     /* Subheadings */
--font-weight-bold: 700         /* Headlines */
--font-weight-extrabold: 800    /* Hero text */
--font-weight-black: 900        /* Maximum impact */
```

### Font Family Strategy
```css
/* Primary Typeface - Geometric Sans */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Display Typeface - Bold Headlines */
--font-display: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;

/* Accent Typeface - Special Elements */
--font-accent: 'Space Grotesk', 'Inter', sans-serif;
```

### Line Height & Letter Spacing
```css
/* Line Heights */
--leading-none: 1           /* Tight headlines */
--leading-tight: 1.1        /* Display text */
--leading-normal: 1.4       /* Body text */
--leading-relaxed: 1.6      /* Comfortable reading */

/* Letter Spacing */
--tracking-tight: -0.025em  /* Headlines */
--tracking-normal: 0        /* Body text */
--tracking-wide: 0.025em    /* All caps text */
```

## Advanced Component Specifications

### Button System (S-Tier Implementation)

**Primary CTA Button**
```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  min-height: 56px;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
}
```

**Secondary Button**
```css
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 14px 30px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  min-height: 56px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
```

**Ghost Button**
```css
.btn-ghost {
  background: transparent;
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: var(--gray-50);
  border-color: var(--gray-400);
}
```

### Card System (Premium Design)

**Wellness Card (Enhanced)**
```css
.wellness-card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.wellness-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.wellness-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.wellness-card:hover::before {
  transform: scaleX(1);
}
```

**Feature Card (3D Effect)**
```css
.feature-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: rotateX(5deg) rotateY(5deg) translateZ(20px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}
```

### Form Elements (Modern Design)

**Input Fields**
```css
.form-input {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid var(--gray-200);
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  background: white;
  transition: all 0.3s ease;
  min-height: 56px;
}

.form-input:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1);
  transform: translateY(-1px);
}

.form-input:invalid {
  border-color: #ef4444;
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
}
```

**Floating Labels**
```css
.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-label {
  position: absolute;
  left: 20px;
  top: 18px;
  color: var(--gray-500);
  font-size: 16px;
  transition: all 0.3s ease;
  pointer-events: none;
  background: white;
  padding: 0 8px;
}

.form-input:focus + .form-label,
.form-input:not(:placeholder-shown) + .form-label {
  top: -8px;
  font-size: 14px;
  color: var(--primary);
  font-weight: 500;
}
```

## Layout System (Bento Grid Approach)

### Container System
```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}

/* Responsive Container Widths */
@media (min-width: 640px) {
  .container { max-width: 640px; padding: 0 32px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

@media (min-width: 1536px) {
  .container { max-width: 1536px; padding: 0 40px; }
}
```

### Grid System (CSS Grid)
```css
.grid-bento {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(12, 1fr);
}

/* Hero Section Layout */
.hero-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: center;
  min-height: 80vh;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

### Spacing Scale (8px Base)
```css
:root {
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
}
```

## Animation & Motion Design System

### Easing Functions
```css
:root {
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Micro-Interactions
```css
/* Button Hover Effect */
@keyframes button-hover {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-2px) scale(1.02); }
  100% { transform: translateY(-2px) scale(1.02); }
}

/* Loading Animation */
@keyframes loading-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Slide In Animation */
@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In Animation */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Performance-Optimized Animations
```css
/* Use transform and opacity for performance */
.animate-fade-in {
  animation: slide-in-up 0.6s var(--ease-out) forwards;
}

.animate-scale {
  animation: scale-in 0.4s var(--ease-out) forwards;
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Icon System (Lucide React)

### Icon Sizing Scale
```css
.icon-xs { width: 16px; height: 16px; }
.icon-sm { width: 20px; height: 20px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 40px; height: 40px; }
.icon-2xl { width: 48px; height: 48px; }
```

### Icon Usage Guidelines
- **Navigation**: 20px icons with 2px stroke width
- **Buttons**: 16px icons with 8px margin from text
- **Feature cards**: 24px icons with primary color
- **Hero sections**: 32px+ icons with custom animations

## Image System

### Aspect Ratios
```css
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }
.aspect-portrait { aspect-ratio: 3 / 4; }
.aspect-landscape { aspect-ratio: 4 / 3; }
.aspect-ultrawide { aspect-ratio: 21 / 9; }
```

### Image Optimization Classes
```css
.img-optimized {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.img-optimized:hover {
  transform: scale(1.05);
}

.img-hero {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
}
```

## Responsive Breakpoints

### Media Query System
```css
/* Mobile First Approach */
@media (min-width: 640px) {
  /* sm: tablets and small laptops */
}

@media (min-width: 768px) {
  /* md: tablets and medium laptops */
}

@media (min-width: 1024px) {
  /* lg: large laptops and desktops */
}

@media (min-width: 1280px) {
  /* xl: large desktops */
}

@media (min-width: 1536px) {
  /* 2xl: extra large desktops */
}
```

### Touch Target Optimization
```css
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 12px;
  margin: 4px;
}

/* Enhanced touch targets for mobile */
@media (max-width: 768px) {
  .touch-target {
    min-height: 48px;
    min-width: 48px;
  }
}
```

## Accessibility Standards

### Focus Management
```css
.focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Custom focus styles */
button:focus-visible,
input:focus-visible,
a:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### Color Contrast Compliance
```css
/* Ensure 4.5:1 contrast ratio minimum */
.text-contrast-high {
  color: var(--gray-900);
  background: white;
}

.text-contrast-medium {
  color: var(--gray-700);
  background: var(--gray-50);
}
```

## Performance Optimization

### Critical CSS
```css
/* Above-the-fold critical styles */
.critical {
  font-display: swap;
  contain: layout style paint;
  will-change: transform;
}
```

### Hardware Acceleration
```css
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
```

This style guide implements award-winning design principles while maintaining practical fitness industry applications. Every element is designed for performance, accessibility, and conversion optimization.