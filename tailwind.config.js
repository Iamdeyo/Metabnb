/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '680px',
      lg: '768px',
      xl: '976px',
      xxl: '1024px',
      xxxl: '1280px',
    },
    extend: {
      colors: {
        tblack: '#434343',
      },
    },
  },
  plugins: [],
};
