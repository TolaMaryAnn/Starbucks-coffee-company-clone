/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        starbucksRed: '#d50032',
        starbucksGreen: '#06ce8d',
        starbucksMaroon: '#8e0031',
        starbucksGray:'#f2f0eb'
      },
    },
  },
  plugins: [],
};
