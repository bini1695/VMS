/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1b4332',
          50: '#f2f8f5',
          100: '#e1f0e8',
          800: '#143326',
          900: '#0d221a',
        },
        coral: {
          DEFAULT: '#ff6b6b',
          50: '#fff0f0',
          600: '#fa5252',
          700: '#e03131',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f7f4eb',
        }
      }
    },
  },
  plugins: [],
}