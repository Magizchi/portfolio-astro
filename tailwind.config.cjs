/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro, ts}"],
  theme: {
    fontFamily:{
      hind:['hind'],
      jetBrians:['jetBrians']
    }
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
  darkMode:["class"],
};
