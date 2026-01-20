/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)', 
        surface: 'rgb(var(--surface) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#8B5CF6', 
        },
        muted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgb(var(--secondary)) 0%, rgb(var(--primary)) 100%)', // Dynamic based on theme
        'gradient-glow': 'radial-gradient(circle, rgb(var(--primary) / 0.15) 0%, rgb(var(--background) / 0) 70%)',
      }
    },
  },
  plugins: [],
}
