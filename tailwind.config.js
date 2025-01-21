/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Add this line for app directory
  ],
  theme: {
    extend: {
      colors: {
        "Gblack": "#2b5876",
        "Gpurple": "#4e4376",
      },
    },
  },
  plugins: [],
};
