/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#2f3542',
      'gray': '#a4b0be',
      'orange': '#ffa502',
      "deep-pink":"#ff4757",
      'green': '#13ce66',
      'yellow': '#eccc68',
      'blue': '#3742fa',
      'gray-dark': '#273444',
      'light-black': '#57606f',
      'gray-light': '#747d8c',
      'shamrock-green': '#2ed573',
      'dodger-blue': '#1e90ff',
      'light-steal-blue': '#ced6e0',
    },
  },
  plugins: [],
}