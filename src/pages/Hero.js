import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

import Placeholder from '../components/Placeholder';

function Hero() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	useTranslation();

	const values = [
		{ icon: 'fa-solid fa-person', tag: 'diversity', to: '' },
		{ icon: 'fa-solid fa-users', tag: 'trust', to: '' },
		{ icon: 'fa-solid fa-stopwatch', tag: 'productivity', to: '' },
	];

	return (
		<div style={{ minHeight: '100vh' }}>
			{/* COVER IMAGE WITH MESSAGE */}
			<section
				style={{
					minHeight: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<div className='container col-xxl-8 px-4 py-5'>
					<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
						<div className='col-10 col-sm-8 col-lg-6'>
							<Placeholder width={700} height={400} />
						</div>
						<div className='col-lg-6'>
							<h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
								<Trans i18nKey={'hero.header'} />
							</h1>
							<p className='lead'>
								<Trans i18nKey={'hero.subheader'} />
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* TIMELINE */}
			<section>
				<div className='container-fluid px-5 pb-5'>
					<div className='row'>
						<div className='container-fluid text-center'>
							<h1 className='display-7 fw-bold lh-1 mb-3'>
								{/* <Trans i18nKey={'hero.header'} /> */}THIS IS A TEST
							</h1>
						</div>
						<div className='row '>
							<div
								className='col-lg-4 col-md-12'
								style={{ backgroundColor: 'red' }}></div>

							<div
								className='col-lg-4 col-md-6'
								style={{ backgroundColor: 'green' }}></div>

							<div
								className='col-lg-4 col-md-6'
								style={{ backgroundColor: 'blue', minHeight: '100vh' }}></div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA for Services */}
			<section></section>
		</div>
	);
}

export default Hero;
