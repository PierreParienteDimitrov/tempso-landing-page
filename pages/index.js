import Head from 'next/head';
import Homescreen from '../components/Homepage/Homescreen';

export default function Home() {
	return (
		<>
			<Head>
				<title>Tempso - (re)discover classical music!</title>
			</Head>

			<main>
				<Homescreen />
			</main>
		</>
	);
}
