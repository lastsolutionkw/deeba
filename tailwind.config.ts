import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-navy': '#0B1426',
        'electric-blue': '#00D4FF',
        
        // Secondary Colors
        'emerald-green': '#10B981',
        'warm-gold': '#F59E0B',
        'crimson-red': '#EF4444',
        
        // Neutral Palette
        'pure-white': '#FFFFFF',
        'light-gray': '#F8FAFC',
        'medium-gray': '#64748B',
        'dark-gray': '#1E293B',
        'charcoal': '#0F172A',
        
        // Background Hierarchy
        'bg-level-0': '#0B1426',
        'bg-level-1': '#1E293B',
        'bg-level-2': '#334155',
        'bg-level-3': '#475569',
        
        // Text Hierarchy
        'text-primary': '#FFFFFF',
        'text-secondary': '#CBD5E1',
        'text-tertiary': '#94A3B8',
        'text-disabled': '#64748B',

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subsection': ['1.75rem', { lineHeight: '1.3' }],
        'card-title': ['1.25rem', { lineHeight: '1.4' }],
        'body-large': ['1.125rem', { lineHeight: '1.6' }],
        'body-small': ['0.875rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '3rem',      // 48px
        '3xl': '4rem',      // 64px
        '4xl': '6rem',      // 96px
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.8)'
          },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
