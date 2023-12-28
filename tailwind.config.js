/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1fb6ff',
        secondary: '#7e5bef',
        customcolor: {
          100:'#ff49db',
          500:'#ff49db',
          300:'#ff49db'
        },
      },
      fontFamily:{
        custom:['lws','Arial','sans']
      },
      spacing:{
        '1':'8px',
        '2':'16px',
        '3':'24px',
      },
      screens:{
        'tablet':'640px',
        'desktop':'1024px',
        'large-desktop':'1080px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

