import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';

function News() {
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
				CONTENT - NEWS
			</div>
		</div>
	);
}

export default News;
