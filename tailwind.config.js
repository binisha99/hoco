/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        '2xl': '1400px',
        mxs: '480px',
        xs: '320px',
      },
      spacing: {
        4.5: '18px',
      },

      colors: {
        primary: {
          header_cyan: '#A7FDEB',
          item_right_dark: '#087782',
          item_right_middle: '31abb3',
          item_right_light: '#50d2d8',
          item_mid_dark: '097882',
          item_mid_middle: '2fa8b0',
          item_mid_light: '53d6dc',
        },
      },
    },
  },
  plugins: [],
};
