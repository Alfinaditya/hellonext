import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	console.log(process.env.NODE_ENV);
	switch (process.env.NODE_ENV) {
		case 'production':
			console.log('In production');
			break;
		case 'development':
			console.log('In development');
			break;
		case 'staging':
			console.log('In Staging');
			break;

		default:
			console.log('in your heart');
			break;
	}
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
