/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      'Headline1' : ['64px','76px'],
      'Headline2' : ['44px','58px'],
      'Headline3' : ['28px','36px'],
      'Headline4' : ['20px','28px'],
    },
    colors:{
      primary:'#4CAF4F',
      secondary: '#263238',
      white : '#FFFFFF',
      shade1 :'#66BB69',
      silver : '#F5F7FA',
      input : '#89939E',
    },
    extend: {},
  },
  plugins: [],
}

