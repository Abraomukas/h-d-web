import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Careers() {
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
				CONTENT - CAREERS
			</div>

			<Footer />
		</div>
	);
}

export default Careers;
