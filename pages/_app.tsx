import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
				<title>Onyekwere Precious | Portfolio</title>
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>

			<ToastContainer hideProgressBar />
		</Fragment>
	);
}

export default MyApp;
