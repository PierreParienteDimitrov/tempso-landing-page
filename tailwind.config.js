// tailwind.config.js
module.exports = {
	// mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontWeight: {
			thin: 100,
			light: 300,
			regular: 400,
			medium: 500,
			bold: 600,
			black: 900,
		},

		colors: {
			white: '#FFFFFF',
			background: '#131313',
			gray: {
				DEFAULT: '#232323',
				100: '#747474',
				200: '#AFAFAF',
			},
			medieval: '#FCA188',
			renaissance: '#FCC488',
			baroque: '#FCEA88',
			classical: '#86D3F6',
			earlyRomantic: '#EF83B7',
			romantic: '#EF8383',
			lateRomantic: '#E25D7D',
			modern: '#83EFDC',
			contemporary: '#8583EF',
		},
		boxShadow: {
			sm: '1px 2px 4px rgba(0, 0, 0, 0.11)',
			md: '4px 8px 16px rgba(0, 0, 0, 0.1);',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
