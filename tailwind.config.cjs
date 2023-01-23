/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: { 
        "Mulberry": "#C54B8C",
        "Medium-ruby":"#AA325A",
        "Blue-lagoon":"#005F87",
        "Dark-blue":"#024D6C",
        "Elm":"#2E8375",
        "Dark-Elm":"#156B5D",
        "not-white":"rgb(249,232,237)"
      },
    },
  },
  plugins: [],
}
