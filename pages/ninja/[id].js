import Head from 'next/head';
import React from 'react';

const Details = ({ ninja }) => {
	return (
		<div>
			<Head>
				<title>{ninja.name} | Benimaru List</title>
				<meta name='keywords' content='Ninja' />
			</Head>
			<h1>{ninja.name}</h1>
			<p>{ninja.email}</p>
			<p>{ninja.website}</p>
			<p>{ninja.address.city}</p>
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	const paths = data.map(ninja => {
		return {
			params: { id: ninja.id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps(context) {
	const id = context.params.id;
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
	const data = await res.json();
	return {
		props: { ninja: data },
	};
}

export default Details;
