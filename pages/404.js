import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
	return (
		<div className='not-found'>
			<Head>
				<title>Not Found | Benimaru List</title>
				<meta name='keywords' content='Not Found' />
			</Head>
			<h1>Oops...</h1>
			<h1>This page cannot be found...</h1>
			<h1>
				Go back to the{' '}
				<Link href='/'>
					<a>Homepage</a>
				</Link>
			</h1>
		</div>
	);
};

export default NotFound;
