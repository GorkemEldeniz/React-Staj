/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					100: "#FAFAFA",
					200: "#BFBFD4",
					300: "#ABABC4",
					400: "#7F7F98",
					500: "#3B3B54",
					600: "#22222F",
					700: "#1C1C27",
					800: "#16161F",
					900: "#13131A",
				},
				"blue-light": "#8FB2F5",
			},
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
			},
			fontSize: {
				xs: [
					"12px",
					{
						lineHeight: 1.4,
						fontWeight: "400",
					},
				],
				sm: [
					"14px",
					{
						lineHeight: 1.4,
						fontWeight: "400",
					},
				],
				md: [
					"16px",
					{
						lineHeight: 1.4,
						fontWeight: "400",
					},
				],
				lg: [
					"20px",
					{
						lineHeight: 1.4,
						fontWeight: "400",
					},
				],
				"heading-xs": [
					"14px",
					{
						lineHeight: 1.4,
						fontWeight: "700",
					},
				],
				"heading-sm": [
					"16px",
					{
						lineHeight: 1.4,
						fontWeight: "700",
					},
				],
				"heading-md": [
					"20px",
					{
						lineHeight: 1.4,
						fontWeight: "700",
					},
				],
				"heading-lg": [
					"32px",
					{
						lineHeight: 1.4,
						fontWeight: "700",
					},
				],
				"heading-xl": [
					"48px",
					{
						lineHeight: 1.2,
						fontWeight: "900",
					},
				],
				"heading-hg": [
					"96px",
					{
						lineHeight: 1,
						fontWeight: "900",
					},
				],
			},
		},
	},
	plugins: [],
};
