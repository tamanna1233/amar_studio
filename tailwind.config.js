/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFD700',
          DEFAULT: '#C5A059',
          dark: '#B8860B',
          50: '#FDFCF5',
          100: '#F9F6EA',
          200: '#F1E8CD',
          300: '#E8D9B0',
          400: '#DEC993',
          500: '#C5A059',
          600: '#9E8047',
          700: '#766035',
          800: '#4F4024',
          900: '#272012',
          950: '#141009',
        },
        black: {
          DEFAULT: '#000000',
          rich: '#0a0a0a',
          soft: '#1a1a1a',
          glass: 'rgba(0,0,0,0.8)',
        },
        gray: {
          light: '#d1d5db',
          dark: '#4b5563',
        }
      },
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
