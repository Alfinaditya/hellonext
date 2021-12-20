import Head from 'next/head';
import React from 'react';

const User = ({ users }) => {
	return (
		<div>
			<Head>
				<title>User | Benimaru List</title>
				<meta name='keywords' content='User' />
			</Head>
			<h1>All Users</h1>
			{users.map(user => (
				<div key={user.id}>
					<h3>
						{user.first_name} {user.last_name}
					</h3>
					<p>Email : {user.email}</p>
					<p>Ip Address: {user.ip_address}</p>
				</div>
			))}
		</div>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`);
	const data = await res.json();
	return {
		props: { users: data },
	};
}

export default User;
