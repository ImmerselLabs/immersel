/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
		colors: {
			currentColor: "currentColor",
			transparent: "transparent",
			black: "#1e1e1e",
			white: "#ede9fe",
			primary: "#0f0618",
			accent: "#8b5cf6"
		},
		animation: {
			'shake-x': "ShakeX 0.3s ease-in-out forwards"

		},
		keyframes: {
			"ShakeX": {
				"0%": {
					"transform": "translateX(-10px)"
				},
				"25%": {
					"transform": "translateX(17px)"
				},
				"50%": {
					"transform": "translateX(-13px)"
				},
				"75%": {
					"transform": "translateX(6px)"
				},
				"100%": {
					"transform": "translateX(0px)"
				}
			}
		}
	},
  },
  plugins: [],
}
