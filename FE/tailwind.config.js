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
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: 'LineRg',
        noto: 'LineBd',
      },
      backgroundImage: {
        main: 'linear-gradient(180deg, #00C6FB 0%, #1B6BB7 100%, #005BEA 100%)',
        myPageGradient: 'linear-gradient(180deg, #00C6FB 0%, #1B6BB7 100%, #005BEA 100%)',
        main2: 'linear-gradient(180deg, #EDF6FF 0%, #EDF6FF 100%)',
        main3: 'linear-gradient(193.32deg, #F5F7FF 0%, #87C0F7 51.08%, #10C538 100%)',
        main4: 'linear-gradient(193.32deg, #F5F7FF 0%, #87C0F7 51.08%, #F5F7FF 100%)',
        recentBg:
          'linear-gradient(104.04deg, rgba(237, 246, 255, 0.6) 0%, rgba(160, 196, 232, 0.6) 50.71%, rgba(194, 233, 251, 0.6) 100%, rgba(237, 246, 255, 0.6) 100%)',
      },
      colors: {
        clearMain: '#B0C1ED',
        blue: '#2467A8',
        headerFooter: '#F8FDFF',
        darkBlue: '#145EA5',
        ssafveyGreen: '#18D47A',
      },
      spacing: {
        ...px0To1400,
      },
      fontSize: px0To200,
      lineHeight: px0To100,
      borderRadius: px0To100,
      maxWidth: px0To1400,
      minWidth: px0To1400,
      maxHeight: px0To1400,
      minHeight: px0To1400,
    },
  },
  plugins: [],
};
