/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ext-white': '#ffffffde',
        'ext-dark': '#1e1e1e',
        'ext-soft-dark': '#2a2a2a',
      },
    },
  },
}
