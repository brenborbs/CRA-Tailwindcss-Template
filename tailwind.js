const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const aspectRatio = require('tailwindcss-aspect-ratio');
const filters = require('tailwindcss-filters');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ['./src/**/*.js', './public/index.html'],
  theme: {
    aspectRatio: {
      square: [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9], // or 16 / 9
      '4/3': [4, 3], // or 4 / 3
      '21/9': [21, 9], // or 21 / 9
      '3/4': [3, 4],
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          blue: '#1c75bb',
          yellow: '#f9b818',
          black: '#060000',
          'sky-blue': '#e9f0f6',
        },
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-focus'],
    aspectRatio: ['responsive'],
  },
  plugins: [
    // See https://github.com/webdna/tailwindcss-aspect-ratio for details
    aspectRatio,
    // See https://tailwindui.com/documentation for details
    tailwindUI,
    // See https://github.com/benface/tailwindcss-filters for details
    filters,
  ],
};
