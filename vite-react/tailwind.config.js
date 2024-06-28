/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: { sm: '480px', md: '768px', lg: '1024px', xl: '1440px' },
    extend: { colors: { header: '#D9D9D9', card: '#F3F1F1', active: '#4E7FFF', item: '#E2E2E2' } }
  },
  plugins: [],
}