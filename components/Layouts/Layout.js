import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<h1>footer</h1>
		</div>
	);
};

export default Layout;
