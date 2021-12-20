import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Ninjas.module.css';

const Ninjas = ({ ninjas }) => {
	return (
		<div>
			<Head>
				<title>Ninja | Benimaru List</title>
				<meta name='keywords' content='Ninja' />
			</Head>
			<h1>All Members</h1>
			{ninjas.map(ninja => (
				<div key={ninja.id}>
					<Link href={`/ninja/${ninja.id}`}>
						<a className={styles.single}>
							<h3>{ninja.name}</h3>
						</a>
					</Link>
				</div>
			))}
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	return {
		props: { ninjas: data },
	};
}

export default Ninjas;
