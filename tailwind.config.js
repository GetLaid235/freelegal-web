/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					blue: "#1A3D6D",
					gold: "#FFC845",
					red: "#F55555",
				},
			},
		},
	},
	plugins: [],
};
