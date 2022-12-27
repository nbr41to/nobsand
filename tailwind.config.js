/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        baloo: 'Baloo',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // ResetCSSの無効化
  },
};
