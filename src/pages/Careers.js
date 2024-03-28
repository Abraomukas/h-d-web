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
		<div style={{ position: 'relative' }}>
			<Navbar />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}>
				<div className='container text-center'>
					{/* GRID */}
					<div
						style={{ position: 'relative', minHeight: '100vh' }}
						className='d-flex justify-content-between align-items-center my-5'>
						<div className='container text-center'>
							<div className='row row-cols-3 row-cols-md-3 g-3'>
								{jobLabels.map(({ label }, index) => {
									return (
										<div key={index} className='col'>
											<div class='d-grid gap-2 mx-auto'>
												<button
													type='button'
													className='btn btn-primary btn-lg'>
													<Trans i18nKey={`careers.jobs.${label}`} />
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Careers;
