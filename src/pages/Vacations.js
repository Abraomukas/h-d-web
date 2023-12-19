import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VacationsGraph from '../components/VacationsGraph';

function Vacations() {
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
				{/* VACATIONS*/}
				<div>
					<VacationsGraph />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Vacations;
