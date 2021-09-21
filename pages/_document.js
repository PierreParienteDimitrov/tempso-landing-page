import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					{/* <script
						dangerouslySetInnerHTML={{
							__html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="gbeUQCXnA0QAwr05DnoioZ8LJw6LaKsf";analytics.SNIPPET_VERSION="4.13.2";analytics.load("gbeUQCXnA0QAwr05DnoioZ8LJw6LaKsf");}}();`,
						}}
					/> */}
					<link
						rel='preload'
						href='/public/font/PFAgoraSansPro-Black.ttf'
						as='font'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/public/font/PFAgoraSansPro-Bold.ttf'
						as='font'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/public/font/PFAgoraSansPro-Light.ttf'
						as='font'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/public/font/PFAgoraSansPro-Medium.ttf'
						as='font'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/public/font/PFAgoraSansPro-Regular.ttf'
						as='font'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/public/font/PFAgoraSansPro-Thin.ttf'
						as='font'
						crossOrigin=''
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
