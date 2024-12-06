import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

export default function Hero() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	useTranslation();

	const values = [
		{ icon: 'fa-solid fa-person', tag: 'diversity', to: '' },
		{ icon: 'fa-solid fa-users', tag: 'trust', to: '' },
		{ icon: 'fa-solid fa-stopwatch', tag: 'productivity', to: '' },
	];

	return (
		<div>
			{/* COVER IMAGE WITH MESSAGE */}
			<section>
				<div
					style={{ minHeight: '100vh' }}
					className='container-fluid px-5 pb-5'>
					<div className='row'>
						<div className='col-12' style={{ backgroundColor: 'black' }}></div>
					</div>
				</div>
			</section>

			{/* TIMELINE */}
			<section>
				<div
					style={{ minHeight: '100vh' }}
					className='container-fluid px-5 pb-5'>
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
			<section>
				<div style={{ minHeight: '100vh' }}></div>
			</section>
		</div>
	);
}
