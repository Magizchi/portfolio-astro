const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro, ts}'],
	theme: {
		fontFamily: {
			sans: ['Hind', ...defaultTheme.fontFamily.sans],
			display: ['Satoshi', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: ['class']
};
