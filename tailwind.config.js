/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito Sans'],
      'montserrat': ['Montserrat']
    },
    extend: {},
  },
  plugins: [],
}