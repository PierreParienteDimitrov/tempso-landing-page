// tailwind.config.js
module.exports = {
	// mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		minWidth: {
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},
		maxWidth: {
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
		},
		height: {
			sm: '8px',
			md: '16px',
			lg: '24px',
			'40vh': '40vh',
		},
		flexGrow: {
			0: 0,
			0.5: 0.5,
			DEFAULT: 1,
		},
		fontWeight: {
			light: 300,
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
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
