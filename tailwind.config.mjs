/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'md-lg': { min: '821px' } // Between md and lg
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
