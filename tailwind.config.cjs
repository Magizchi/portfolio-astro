/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro, ts}"],
  theme: {
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
  darkMode:["class"],
};
