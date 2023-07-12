/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agility-brand-color-blue-100': '#2382A0',
        'agility-brand-color-blue-80': '#4F9BB3',
        'agility-brand-color-blue-60': '#7BB4C6',
        'agility-brand-color-blue-40': '#A7CDD9',
        'agility-brand-color-blue-20': '#D3E6EC',

        'agility-background': '#F9F9F9',

        'agility-gray-color-100': '#333333',
        'agility-gray-color-80': '#4F4F4F',
        'agility-gray-color-60': '#828282',
        'agility-gray-color-40': '#D9D9D9',
        'agility-gray-color-20': '#EDEDED',

        'agility-brand-color-green': '#00A843',
        'agility-brand-color-yellow': '#F3D11B',
        'agility-brand-color-red': '#E54B4B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

