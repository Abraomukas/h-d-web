import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Placeholder from '../components/Placeholder';
import FeatureEntry from '../components/FeatureEntry';

function Services() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			<section>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
					}}>
					<div
						className='container-fluid'
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh',
						}}>
						<div className='row gx-1'>
							<div className='col-lg-2 col-md-1' />
							<div className='col-lg-4 col-md-5'>
								<div className='container'>
									<h1 className='display-2 fw-bold'>
										<Trans i18nKey={'services.header'} />
									</h1>

									<br />

									<br />

									<br />

									<h3>
										<Trans i18nKey={'services.subheader'} />
									</h3>
								</div>
							</div>
							<div className='col-lg-4 col-md-5'>
								<div
									className='bg-image hover-overlay ripple shadow-2-strong rounded-3'
									data-mdb-ripple-color='light'>
									<Placeholder width={600} height={700} />
								</div>
							</div>
							<div className='col-lg-2 col-md-1' />
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-3 fw-bold'>
							<Trans i18nKey={'services.features-header'} />
						</h1>
					</div>
				</div>

				{/* SERVICES */}

				<div className='container mb-7'>
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5'>
						<FeatureEntry
							icon={'fas fa-microchip'}
							text={'services.features.tech'}
						/>
						<FeatureEntry
							icon={'fa-solid fa-graduation-cap'}
							text={'services.features.agile'}
						/>
						<FeatureEntry
							icon={'fa-solid fa-robot'}
							text={'services.features.ai-ml'}
						/>
						<FeatureEntry
							icon={'fa-solid fa-mobile-screen-button'}
							text={'services.features.mobile'}
						/>
						<FeatureEntry
							icon={'	fa-solid fa-arrows-rotate'}
							text={'services.features.ci-cd'}
						/>
						<FeatureEntry
							icon={'fa-solid fa-lock'}
							text={'services.features.audit'}
						/>
						<FeatureEntry
							icon={'fa-solid fa-user-secret'}
							text={'services.features.monitor'}
						/>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default Services;
