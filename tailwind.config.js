/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'golden-yellow': '#fff6d5',
			},
			backgroundImage: {
				'main-image': "url('/images/bg.jpg')",
			},
		},
	},
	plugins: [],
};
