/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'Poppins',
      },
      colors:{
        Primary:{
          Cyan: 'hsl(180, 66%, 49%)',
          DarkViolet: 'hsl(257, 27%, 26%)',
          hoverp: '#9BE3E2'
        },
        Secondary:{
          sRed: 'hsl(0, 87%, 67%)'
        },
        Neutral:{
          Gray: 'hsl(0, 0%, 75%)',
          GrayishViolet: 'hsl(257, 7%, 63%)',
          VeryDarkBlue: 'hsl(255, 11%, 22%)',
          VeryDarkViolet: 'hsl(260, 8%, 14%)',
        }
      }
    },
  },
  plugins: [],
}
