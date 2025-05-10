/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shootingBackground: 'shootingBackground 6s linear infinite', // Faster animation for dynamic effect
      },
      keyframes: {
        shootingBackground: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      colors: {
        'dark-bg': '#0a0a0a', // A darker background shade
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
