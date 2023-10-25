/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      light: '#F2F2F2',
      lighter: '#fffdfd',
      dark: '#0D1515',
      darkBlue: '#03658C',
      royalBlue: '#368ABF',
      skyBlue: '#66CAF2',
      pink: '#D955AA',
      palePink: '#f6a3d9',
      green: '#0F8C3B',
      orange: '#FA7F08'
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
