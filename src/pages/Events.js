import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

//* COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Events() {
	useTranslation();
	const cld = new Cloudinary({ cloud: { cloudName: 'abraomukas' } });

	const currentLngCode = Cookies.get('i18next') || 'es';

	let imageUrl = cld
		.image('h-d-web/jan-24')
		.format('auto')
		.quality('auto')
		.resize(auto().gravity(autoGravity()))
		.toURL();

	const news = [
		{ label: 'dec-23', picture: 'landscape-panorama' },
		{ label: 'dec-24', picture: 'nature-mountains' },
	];

	const teamDays = [
		{ label: 'jan-24', picture: 'nature-mountains' },
		{ label: 'feb-24', picture: 'beach-boat' },
		{ label: 'mar-24', picture: 'architecture-signs' },
		{ label: 'may-24', picture: 'landscape-panorama' },
		{ label: 'jun-24', picture: 'nature-mountains' },
		{ label: 'jul-24', picture: 'beach-boat' },
		{ label: 'oct-1-24', picture: 'architecture-signs' },
		{ label: 'oct-2-24', picture: 'girl-urban-view' },
		{ label: 'nov-24', picture: 'landscape-panorama' },
	];

	const teamBuildings = [{ label: 'apr-24', picture: 'girl-urban-view' }];

	return (
		<div>
			<Navbar />

			<div style={{ position: 'relative', minHeight: '100vh' }}>
				{/* HEADER */}

				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-3 fw-bold'>
							<Trans i18nKey={'events.header'} />
						</h1>
					</div>
				</div>

				{/* NEWS */}

				<div className='position-relative p-5 p-md-1 m-md-1'>
					<div className='col-md-6 p-lg-5 mt-3'>
						<h1 className='display-5 fw-bold'>
							<Trans i18nKey={'events.news-header'} />
						</h1>
					</div>
				</div>

				<div className='container'>
					<div className='d-flex overflow-auto'>
						{news.map((item, index) => {
							return (
								<div
									className='card me-3 text-center'
									style={{ minWidth: '18rem' }}>
									<div
										key={index++}
										style={{ maxWidth: '25rem' }}
										className='bg-image hover-overlay'>
										<img index={index++} src={imageUrl} className='img-fluid' />
										<Link index={index++} to={`${item.label}`}>
											<div
												key={index++}
												className='mask'
												style={{
													backgroundColor: 'rgba(251, 251, 251, 0.15)',
												}}></div>
										</Link>
									</div>
									<div className='card-body'>
										<h5 className='card-title'>
											<strong>
												<Trans
													key={index++}
													i18nKey={`events.posts.${item.label}`}
												/>
											</strong>
										</h5>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* TEAM DAYS */}

				<div className='position-relative p-5 p-md-1 m-md-1'>
					<div className='col-md-6 p-lg-5 mt-3'>
						<h1 className='display-5 fw-bold'>
							<Trans i18nKey={'events.team-tags-header'} />
						</h1>
					</div>
				</div>

				<div className='container'>
					<div className='d-flex overflow-auto'>
						{teamDays.map((item, index) => {
							return (
								<div
									className='card me-3 text-center'
									style={{ minWidth: '18rem' }}>
									<div
										key={index++}
										style={{ maxWidth: '25rem' }}
										className='bg-image hover-overlay'>
										<img index={index++} src={imageUrl} className='img-fluid' />
										<Link index={index++} to={`${item.label}`}>
											<div
												key={index++}
												className='mask'
												style={{
													backgroundColor: 'rgba(251, 251, 251, 0.15)',
												}}></div>
										</Link>
									</div>
									<div className='card-body'>
										<h5 className='card-title'>
											<strong>
												<Trans
													key={index++}
													i18nKey={`events.posts.${item.label}`}
												/>
											</strong>
										</h5>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* TEAM BUILDINGS */}

				<div className='position-relative p-5 p-md-1 m-md-1'>
					<div className='col-md-6 p-lg-5 mt-3'>
						<h1 className='display-5 fw-bold'>
							<Trans i18nKey={'events.team-buildings-header'} />
						</h1>
					</div>
				</div>

				<div className='container mb-7'>
					<div className='d-flex overflow-auto'>
						{teamBuildings.map((item, index) => {
							return (
								<div
									className='card me-3 text-center'
									style={{ minWidth: '18rem' }}>
									<div
										key={index++}
										style={{ maxWidth: '25rem' }}
										className='bg-image hover-overlay'>
										<img index={index++} src={imageUrl} className='img-fluid' />
										<Link index={index++} to={`${item.label}`}>
											<div
												key={index++}
												className='mask'
												style={{
													backgroundColor: 'rgba(251, 251, 251, 0.15)',
												}}></div>
										</Link>
									</div>
									<div className='card-body'>
										<h5 className='card-title'>
											<strong>
												<Trans
													key={index++}
													i18nKey={`events.posts.${item.label}`}
												/>
											</strong>
										</h5>
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

export default Events;
