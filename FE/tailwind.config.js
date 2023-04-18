/** @type {import('tailwindcss').Config} */

const px0To100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0To200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
// const px0To300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };
// const px0To400 = { ...Array.from(Array(401)).map((_, i) => `${i}px`) };
// const px0To500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
// const px0To600 = { ...Array.from(Array(601)).map((_, i) => `${i}px`) };
// const px0To700 = { ...Array.from(Array(701)).map((_, i) => `${i}px`) };
// const px0To800 = { ...Array.from(Array(801)).map((_, i) => `${i}px`) };
// const px0To900 = { ...Array.from(Array(901)).map((_, i) => `${i}px`) };
// const px0To1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
// const px0To1100 = { ...Array.from(Array(1101)).map((_, i) => `${i}px`) };
// const px0To1200 = { ...Array.from(Array(1201)).map((_, i) => `${i}px`) };
// const px0To1300 = { ...Array.from(Array(1301)).map((_, i) => `${i}px`) };
const px0To1400 = { ...Array.from(Array(1401)).map((_, i) => `${i}px`) };

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'LineRg',
        noto: 'LineBd',
      },
      backgroundImage: {
        main: 'linear-gradient(180deg, #00C6FB 0%, #1B6BB7 100%, #005BEA 100%)',
      },
      colors: {
        clearMain: '#B0C1ED',
        blue : '#2467A8',
        backwhite : '#F8FDFF'
      },
      spacing: {
        ...px0To1400,
      },
      fontSize: px0To200,
      lineHeight: px0To100,
      borderRadius: px0To100,
    },
  },
  plugins: [],
};
