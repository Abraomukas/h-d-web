import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

import Placeholder from '../components/Placeholder';
import FeatureEntry from '../components/FeatureEntry';

function Hero() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	const values = [
		{ icon: 'fas fa-microchip', tag: 'diversity', to: '' },
		{ icon: 'fa-solid fa-graduation-cap', tag: 'trust', to: '' },
		{ icon: 'fa-solid fa-robot', tag: 'productivity', to: '' },
	];

	return (
		<div
			style={{
				position: 'relative',
				minHeight: '100vh',
			}}>
			<section
				style={{
					backgroundColor: 'cyan',
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

			<section>
				<div className='container col-xxl-8 px-4 py-5'>
					<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
						<div className='col-lg-6'>
							<h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
								<Trans i18nKey={'hero.header'} />
							</h1>
							<p className='lead'>
								<Trans i18nKey={'hero.subheader'} />
							</p>
						</div>
						<div className='col-10 col-sm-8 col-lg-6'>
							<Placeholder width={500} height={400} />
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className='container col-xxl-8 px-4 py-5'>
					<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
						<div className='col-10 col-sm-8 col-lg-6'>
							<Placeholder width={500} height={400} />
						</div>

						{/* VALUES */}

						<div className='col-10 col-sm-8 col-lg-6'>
							<div className='row row-cols-1 g-4'>
								{values.map((value, index) => {
									return (
										<div>
											<i className='fa-solid fa-robot' />
											<h3>
												<Trans i18nKey={`hero.values.${value.tag}`} />
											</h3>
											<p className='fst-italic'>
												<Trans i18nKey={`hero.values-text.${value.tag}`} />
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
