/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust paths based on your project structure
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"], // Replace 'Roboto' with your font
      },
    },
  },
  plugins: [],
};
