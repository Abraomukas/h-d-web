import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OfficeGraph from '../components/OfficeGraph';

function Offices() {
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
				{/* MADRID */}
				<div>
					<OfficeGraph title='Madrid' />
				</div>

				{/* VALENCIA */}

				<div>
					<OfficeGraph title='Valencia' />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Offices;
