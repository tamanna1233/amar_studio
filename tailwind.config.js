/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'imprint': ['Imprint MT Shadow', 'serif'],
        'poppin': ['poppin', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'pour-up': 'pourUp 2s ease-in-out infinite',
        'pour-down': 'pourDown 2s ease-in-out infinite',
      },
      keyframes: {
        pourUp: {
          '0%, 100%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
        },
        pourDown: {
          '0%, 100%': { opacity: '0', transform: 'translateY(-20px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

