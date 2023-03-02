/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      red: '#E63946',
      orange: '#FCA311',
      gray: '#E5E5E5',
      white: '#FFFFFF',
      green: '#689c97',
    },
    fontFamily: {
      display: ['Barlow Condensed', 'sans-serif']
    }
  },
  plugins: [],
}
