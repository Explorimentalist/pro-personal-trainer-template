/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: 'clamp(1rem, 5vw, 3rem)',
        sm: 'clamp(1.5rem, 6vw, 3rem)',
        md: 'clamp(2rem, 6vw, 3rem)',
        lg: 'clamp(2rem, 6vw, 3rem)',
        xl: 'clamp(2rem, 6vw, 3rem)',
        '2xl': 'clamp(2rem, 6vw, 3rem)',
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%', // Full fluid - no max-width constraints
      },
    },
    extend: {
      gridTemplateColumns: {
        // Mobile: 4 columns
        '4': 'repeat(4, minmax(0, 1fr))',
        // Tablet: 12 columns
        '12': 'repeat(12, minmax(0, 1fr))',
        // Desktop: 16 columns
        '16': 'repeat(16, minmax(0, 1fr))',
        // Advanced Fluid Layouts
        'auto-fit-sm': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-md': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-lg': 'repeat(auto-fit, minmax(350px, 1fr))',
        'auto-fill-sm': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-md': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fill-lg': 'repeat(auto-fill, minmax(300px, 1fr))',
        // Bento Grid Layouts
        'bento-hero': '3fr 2fr',
        'bento-featured': '2fr 1fr 1fr',
        'bento-services': 'repeat(auto-fit, minmax(clamp(250px, 30vw, 400px), 1fr))',
        'bento-testimonials': 'repeat(auto-fit, minmax(clamp(200px, 25vw, 350px), 1fr))',
        // Responsive Column Systems
        'fluid-2': 'repeat(2, minmax(clamp(200px, 40vw, 500px), 1fr))',
        'fluid-3': 'repeat(3, minmax(clamp(150px, 25vw, 300px), 1fr))',
        'fluid-4': 'repeat(4, minmax(clamp(120px, 20vw, 250px), 1fr))',
      },
      gridTemplateRows: {
        // Fluid row heights
        'auto-fluid': 'repeat(auto-fit, minmax(clamp(100px, 20vh, 200px), auto))',
        'hero-fluid': 'clamp(50vh, 80vw, 100vh)',
        'section-fluid': 'repeat(auto-fit, minmax(clamp(200px, 30vh, 400px), auto))',
      },
      gap: {
        'fluid-xs': 'clamp(0.25rem, 1vw, 0.5rem)',    /* 4px → 8px */
        'fluid-sm': 'clamp(0.5rem, 2vw, 1rem)',       /* 8px → 16px */
        'fluid-md': 'clamp(1rem, 3vw, 2rem)',         /* 16px → 32px */
        'fluid-lg': 'clamp(1.5rem, 4vw, 3rem)',       /* 24px → 48px */
        'fluid-xl': 'clamp(2rem, 6vw, 4rem)',         /* 32px → 64px */
        'fluid-2xl': 'clamp(3rem, 8vw, 6rem)',        /* 48px → 96px */
        'fluid-3xl': 'clamp(4rem, 10vw, 8rem)',       /* 64px → 128px */
      },
      spacing: {
        'fluid-xs': 'clamp(0.25rem, 1vw, 0.5rem)',    /* 4px → 8px */
        'fluid-sm': 'clamp(0.5rem, 2vw, 1rem)',       /* 8px → 16px */
        'fluid-md': 'clamp(1rem, 3vw, 2rem)',         /* 16px → 32px */
        'fluid-lg': 'clamp(1.5rem, 4vw, 3rem)',       /* 24px → 48px */
        'fluid-xl': 'clamp(2rem, 6vw, 4rem)',         /* 32px → 64px */
        'fluid-2xl': 'clamp(3rem, 8vw, 6rem)',        /* 48px → 96px */
        'fluid-3xl': 'clamp(4rem, 10vw, 8rem)',       /* 64px → 128px */
      },
      height: {
        'input-sm': '40px',    /* Small input height */
        'input-md': '48px',    /* Medium input height (baseline) */
        'input-lg': '56px',    /* Large input height */
      },
      fontSize: {
        'fluid-hero': ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '1.1' }],
        'fluid-display': ['clamp(2rem, 6vw, 3.75rem)', { lineHeight: '1.1' }],
        'fluid-headline': ['clamp(1.75rem, 5vw, 3rem)', { lineHeight: '1.2' }],
        'fluid-title': ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.3' }],
        'fluid-subtitle': ['clamp(1.25rem, 3.5vw, 1.875rem)', { lineHeight: '1.4' }],
        'fluid-subheading': ['clamp(1.125rem, 3vw, 1.5rem)', { lineHeight: '1.4' }],
        'fluid-large': ['clamp(1rem, 2.5vw, 1.25rem)', { lineHeight: '1.5' }],
        'fluid-body': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.6' }],
        'fluid-small': ['clamp(0.875rem, 1.5vw, 1rem)', { lineHeight: '1.6' }],
        'fluid-caption': ['clamp(0.75rem, 1.2vw, 0.875rem)', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'readable': 'clamp(45ch, 65vw, 75ch)',
        'prose': '65ch',
        'measure': '75ch',
        'narrow': '45ch',
        'wide': '85ch',
        'fluid-sm': 'clamp(20ch, 50vw, 45ch)',
        'fluid-md': 'clamp(45ch, 65vw, 75ch)',
        'fluid-lg': 'clamp(65ch, 75vw, 85ch)',
        'fluid-xl': 'clamp(75ch, 85vw, 100ch)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '300', // Geist regular weight
        medium: '400', // Geist medium weight
        semibold: '500',
        bold: '600', // Geist bold weight
        extrabold: '700',
        black: '800',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Fitness/Wellness specific colors
        fitness: {
          primary: '#ea580c', // Orange (orange-600)
          secondary: '#c2410c', // Darker orange (orange-700) for hover
          accent: '#22c55e', // Green
          dark: '#1f2937', // Dark gray
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}