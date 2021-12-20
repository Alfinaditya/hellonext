import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image src='/profile.png' alt='Benimaru' width={128} height={128} />
			</div>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Link href='/ninja'>
				<a>Ninja Listing</a>
			</Link>
			<Link href='/user'>
				<a>User Listing</a>
			</Link>
		</nav>
	);
};

export default Navbar;
