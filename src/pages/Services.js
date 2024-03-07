import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}>
				CONTENT - SERVICES
			</div>

			<Footer />
		</div>
	);
}

export default Services;
