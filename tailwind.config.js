/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'mine-primary': '#A6CE37',
        "mine-secondary": "#F3F2F2",
        "mine-bg": "#000000",
        "mine-text": "#FFFFFF"
        

      },
      
    },
    fontFamily: {
      p_font: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

