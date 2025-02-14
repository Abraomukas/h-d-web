import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//* PAGES
import Hero from './Hero';

export default function Main() {
	return (
		<div>
			<Navbar />

			<div style={{ position: 'relative', minHeight: '100vh' }}>
				<Hero />
			</div>

			<Footer />
		</div>
	);
}
