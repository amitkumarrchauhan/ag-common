const { default: daisyui } = require('daisyui');

console.log('*** tailwind.config.js loaded ***');

/** @type {import('tailwindcss').Config} */
const dasyUiPluginOptions = {
  // darkTheme: 'all',
  themes: 'all',
  logs: false,
  prefix: 'ag-',
};

const tailwindPostCssPlugin = require('@tailwindcss/postcss');
const daisyUiPlugin = require('daisyui')(dasyUiPluginOptions);

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindPostCssPlugin, daisyUiPlugin],
  daisyui: dasyUiPluginOptions,
};
