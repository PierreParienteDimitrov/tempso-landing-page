import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h3 className='font-thin'>Thin</h3>
				<h3 className='font-light'>Light</h3>
				<h3 className='font-regular'>Regular</h3>
				<h3 className='font-medium'>Medium</h3>
				<h3 className='font-bold'>Bold</h3>
				<h3 className='font-black'>Black</h3>

				<h3></h3>
			</main>
		</>
	);
}
