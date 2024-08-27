/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily : {
				'IBM-Plex-Serif' : ['"IBM Plex Serif"', 'serif'],
				'Playfair-Display' : ['"Playfair Display", serif']
			}
		},
	},
	plugins: [],
};
