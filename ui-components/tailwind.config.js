const { default: daisyui } = require('daisyui');

console.log('*** tailwind.config.js loaded ***');

/** @type {import('tailwindcss').Config} */
const dasyUiPluginOptions = {
  // darkTheme: 'all',
  themes: 'all',
  logs: false,
  prefix: 'ag-',
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')(dasyUiPluginOptions)],
  daisyui: dasyUiPluginOptions
};
