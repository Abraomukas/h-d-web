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
				<div className='container'>
					<div className='row'>
						<div className='col'>
							{/* MADRID */}
							<div>
								<OfficeGraph title='Madrid' />
							</div>
						</div>
						<div className='col'>
							{/* VALENCIA */}
							<div>
								<OfficeGraph title='Valencia' />
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col'>
							{/* BARCELONA */}
							<div>
								<OfficeGraph title='Barcelona' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Offices;
