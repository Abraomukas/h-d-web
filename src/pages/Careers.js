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
		'lead-full-stack',
		'java',
		'dot-net',
		'frontend',
		'product-owner',
		'qa',
		'devops',
		'java-synergo',
		'rust',
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
					<h1 className='display-7 fw-bold text-body-emphasis lh-1 mb-3'>
						<Trans i18nKey={'careers.heading'} />
					</h1>

					<br />

					<br />

					<br />

					<br />

					<br />

					<div className='container text-center'>
						<div className='container text-center'>
							<div className='row row-cols-3'>
								<div className='col'>
									<button type='button' className='btn btn-primary btn-lg'>
										<Trans i18nKey={'careers.jobs.lead-full-stack'} />
									</button>
								</div>
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
