import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Careers() {
	useTranslation();
	const currentLngCode = Cookies.get('i18next') || 'es';

	const benefits = [
		{ label: 'holidays' },
		{ label: 'flex-location' },
		{ label: 'flex-hours' },
		{ label: 'restaurant' },
		{ label: 'health' },
		{ label: 'transport' },
		{ label: 'flex-retribution' },
	];

	//TODO image URLs
	const imgPlaceholder = 'https://picsum.photos/200';

	return (
		<div>
			<Navbar />

			<div style={{ position: 'relative', minHeight: '100vh' }}>
				{/* HEADER */}
				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-3 fw-bold'>
							<Trans i18nKey={'careers.header'} />
						</h1>
					</div>
				</div>
				{/* MUST-HAVE && NICE-TO-HAVE */}
				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6'>
								<div className='flex flex-col items-center justify-center'>
									<h5 className='text-lg text-uppercase'>
										<strong>
											<Trans i18nKey={'careers.must-have'} />
										</strong>
									</h5>
									<div className='mt-4 border border-primary pt-3 flex flex-col items-center'>
										<p>MUST-HAVE</p>
										<p>MUST-HAVE</p>
									</div>
								</div>
							</div>

							<div className='col-md-6'>
								<div className='flex flex-col items-center justify-center'>
									<h5 className='text-lg text-uppercase'>
										<strong>
											<Trans i18nKey={'careers.nice-to-have'} />
										</strong>
									</h5>
									<div className='mt-4 border border-primary pt-3 flex flex-col items-center'>
										<p>NICE-TO-HAVE</p>
										<p>NICE-TO-HAVE</p>
										<p>NICE-TO-HAVE</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* MIN REQUIREMENTS */}
				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-5 fw-bold'>
							<Trans i18nKey={'careers.requirements.header'} />
						</h1>
					</div>
				</div>
				{/* MUST-HAVE && NICE-TO-HAVE */}
				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-md-4'>
								<img src={imgPlaceholder} className='rounded-7' alt='Code' />

								<br />
								<br />

								<p>
									<Trans i18nKey={'careers.requirements.requirements-code'} />
								</p>
							</div>

							<div className='col-md-4'>
								<img src={imgPlaceholder} className='rounded-7' alt='...' />

								<br />
								<br />

								<p>
									<Trans i18nKey={'careers.requirements.requirements-exp'} />
								</p>
							</div>

							<div className='col-md-4'>
								<img src={imgPlaceholder} className='rounded-7' alt='...' />

								<br />
								<br />

								<p>
									<Trans i18nKey={'careers.requirements.requirements-german'} />
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* BENEFITS */}
				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-5 fw-bold'>
							<Trans i18nKey={'careers.benefits.header'} />
						</h1>
					</div>
				</div>
				{/* GRID */}
				<div className='container mb-3'>
					<div className='row gx-3 d-flex justify-content-center'>
						{benefits.map((job, index) => {
							return (
								<div
									key={index}
									className='col-lg-4 col-md-12 mb-3 text-center'>
									<div key={index}>
										<Link key={index} to={`${job.label}`}>
											<div key={index} className='text-bg-primary p-3'>
												<h2
													key={index}
													className='display-6 d-flex align-items-center justify-content-center'>
													<Trans
														key={index}
														i18nKey={`careers.benefits.${job.label}`}
													/>
												</h2>
											</div>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				{/* CTA */}
				<div className='position-relative p-3 p-md-1 m-md-1 text-center'>
					<div className='col-md-8 p-lg-5 mx-auto mt-3'>
						<h1 className='display-5 fw-bold'>
							<Trans i18nKey={'careers.submit_cv_header'} />
						</h1>
						<Link
							to='#'
							onClick={(e) => {
								e.preventDefault();
								window.location.href = 'mailto:abraomukas@gmail.com';
							}}
							className='btn btn-outline-primary btn-lg mt-2'>
							<Trans i18nKey={'careers.submit_cv'} />
						</Link>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

