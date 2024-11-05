/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro, ts}"],
  theme: {
    fontFamily:{
      hind:['hind'],
      sora:['sora'],
      satoshi:['satoshi']
    }
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
  darkMode:["class"],
};
