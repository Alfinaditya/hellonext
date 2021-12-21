import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ greeting }) {
	return (
		<>
			<Head>
				<title>Home | Benimaru List</title>
				<meta name='keywords' content='Benimaru' />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<h1>{greeting.hello}</h1>
				<p className={styles.text}>
					Alfin Ipsum, ipsum dolor sit amet consectetur adipisicing elit. Sit
					autem ad neque sapiente explicabo adipisci nemo, facere veritatis
					perferendis deserunt?
				</p>
				<Link href='/ninja'>
					<a className={styles.btn}>See ninja listing</a>
				</Link>
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hello`);
	const data = await res.json();
	return {
		props: { greeting: data },
	};
}
