import React from 'react';
import Cookies from 'js-cookie';
import { Trans } from 'react-i18next';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Placeholder from '../components/Placeholder';
import FeatureEntry from '../components/FeatureEntry';

function Services() {
	const cld = new Cloudinary({ cloud: { cloudName: 'abraomukas' } });

	const currentLngCode = Cookies.get('i18next') || 'es';
	const width = window.innerWidth;
	const height = window.innerHeight;
	const imageUrl = cld
		.image('h-d-web/jan-24')
		.format('auto')
		.quality('auto')
		.resize(auto().gravity(autoGravity()).width(width).height(height))
		.toURL();

	const services = [
		{ icon: 'fas fa-microchip', text: 'tech', to: '' },
		{ icon: 'fa-solid fa-graduation-cap', text: 'agile', to: '' },
		{ icon: 'fa-solid fa-robot', text: 'ai-ml', to: '' },
		{ icon: 'fa-solid fa-mobile-screen-button', text: 'mobile', to: '' },
		{ icon: 'fa-solid fa-arrows-rotate', text: 'ci-cd', to: '' },
		{ icon: 'fa-solid fa-lock', text: 'audit', to: '' },
		{ icon: 'fa-solid fa-user-secret', text: 'monitor', to: '' },
	];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* COVER IMAGE */}
			<section>
				<div className='container-fluid px-5 py-5'>
					<img
						style={{ objectFit: 'cover' }}
						src={imageUrl}
						className='img-fluid'
						alt='Background'
					/>
				</div>

				<div className='container px-5	'>
					<div className='row'>
						<div className='container-fluid text-center'>
							<h1 className='display-7 fw-bold lh-1 mb-5'>
								<Trans i18nKey={'services.header'} />
							</h1>
							<p className='fs-4'>
								<Trans i18nKey={'services.subheader'} />
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* TEAMS */}
			<section>
				<div className='position-relative p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-5 fw-bold'>
							<Trans i18nKey={'services.our-teams'} />
						</h1>
					</div>
				</div>

				<div className='container mb-7'>
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5'>
						{services.map((service, index) => {
							return (
								<FeatureEntry
									index={index}
									icon={service.icon}
									text={`services.features.${service.text}`}
								/>
							);
						})}
					</div>
				</div>
			</section>

			<section>
				<div className='position-relative p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-5 fw-bold'>
							<Trans i18nKey={'services.our-teams'} />
						</h1>
					</div>
				</div>

				{/* SERVICES */}

				<div className='container mb-7'>
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5'>
						{services.map((service, index) => {
							return (
								<FeatureEntry
									index={index}
									icon={service.icon}
									text={`services.features.${service.text}`}
								/>
							);
						})}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default Services;
