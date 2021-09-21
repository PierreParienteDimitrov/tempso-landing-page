import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Aligned Agency</title>
				<link rel='icon' href='/favicon.png' />
				<link
					rel='preload'
					href='/font/PFAgoraSansPro-Black.ttf'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/font/PFAgoraSansPro-Bold.ttf'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/font/PFAgoraSansPro-Light.ttf'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/font/PFAgoraSansPro-Medium.ttf'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/font/PFAgoraSansPro-Regular.ttf'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/font/PFAgoraSansPro-Thin.ttf'
					as='font'
					crossOrigin=''
				/>
			</Head>
			<body>
				<h1 className='font-thin'>Navbar</h1>
				{children}
				<h1>footer</h1>
			</body>
		</div>
	);
};

export default Layout;
