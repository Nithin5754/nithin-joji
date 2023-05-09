/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow :{
        thickBoxShadow: '0 1px 3px 0 rgba(189,195,199), 0 1px 2px 0 rgba(189, 195, 199)',
       }, 
       keyframes:{
        'openmenu':{
         ' 0%':{transform:'scaleY(0)'},
         ' 80%':{transform:'scaleY(1.2)'},
         ' 100%':{transform:'scaleY(1)'},
        },
      },
      animation:{
        'openmenu':'openmenu 0.5s ease-in-out forwards'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

