import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#F9F9FB',
          100: '#F3F3F7',
          200: '#E7E7EF',
          300: '#D8D8E3',
          400: '#B8B8CC',
          500: '#8E8EA3',
          600: '#656578',
          700: '#47475A',
          800: '#2D2D3D',
          900: '#0F0F1E',
          950: '#0A0A14',
        },
        neon: {
          blue: '#00D9FF',
          cyan: '#00F0FF',
          purple: '#7C3AED',
          pink: '#EC4899',
          green: '#10B981',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropFilter: {
        'glass': 'backdrop-blur(10px)',
        'glass-md': 'backdrop-blur(15px)',
        'glass-lg': 'backdrop-blur(20px)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(0, 217, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  darkMode: 'class',
}
export default config
