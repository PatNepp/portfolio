/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat, sans-serif'
      },
      fontSize: {
        '4xl': '38px',
        '5xl': '40px',
        '6xl': '64px',
        '7xl': '66px',
      },
      colors: {
        primary: '#0252CD',
        'light-blue': '#99E0FF',
        highlight: '#FFBE62',
        black: '#151E2C',
        white: '#FFF',
        border: '#E7E7E7',
        text: {
          primary: '#6F74A7',
          light: '#9191BC',
          dark: '#515580',
        },
        header: '#312E81',
        background: '#F6F6F6',
        green: '#47A34B',
        red: '#E15A46'
      },
      borderRadius: {
        'sm': '5px',
        DEFAULT: '10px',
        'md': '16px',
        'lg': '20px',
        'xl': '9000px',
      },
      letterSpacing: {
        widest: '.51em'
      }
    },
  },
  plugins: [],
}
