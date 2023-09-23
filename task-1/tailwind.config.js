/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/**/**/*.{js,ts,jsx,tsx}",
  "./src/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
       'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: { screens:{
      xs:{min:'348px',max:'639px'}
    },},
  },
  plugins: [],
}


