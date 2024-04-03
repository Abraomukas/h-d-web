import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Careers() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	console.log('careers.jobs');

	const jobLabels = [
		{ label: 'lead-full-stack', to: '' },
		{ label: 'java', to: '' },
		{ label: 'dot-net', to: '' },
		{ label: 'frontend', to: '' },
		{ label: 'product-owner', to: '' },
		{ label: 'qa', to: '' },
		{ label: 'devops', to: '' },
		{ label: 'rust', to: '' },
	];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			<div className='container'>
				{/* HEADER */}

				<div className='position-relative p-3 p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto my-3'>
						<h1 className='display-3 fw-bold'>
							<Trans i18nKey={'careers.heading'} />
						</h1>
					</div>
				</div>

				{/* GRID */}

				<div className='container my-3'>
					<div className='row gx-3'>
						{jobLabels.map((job, index) => {
							return (
								<div className='text-bg-dark col-lg-4 col-md-12 mb-3 text-center mx-auto'>
									<div className='my-3 py-3'>
										<h2 className='display-5'>Another headline</h2>
										<p className='lead'>And an even wittier subheading.</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Careers;
