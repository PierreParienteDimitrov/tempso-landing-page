import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Aligned Agency</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<body>
				<h1>Navbar</h1>
				{children}
				<h1>footer</h1>
			</body>
		</div>
	);
};

export default Layout;
