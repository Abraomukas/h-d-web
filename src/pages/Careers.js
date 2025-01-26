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

	const jobs = [{ label: 'generic' }];

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
				{/* GRID */}
				<div className='container mb-3'>
					<div className='row gx-3 d-flex justify-content-center'>
						{jobs.map((job, index) => {
							return (
								<div
									key={index}
									className='col-lg-4 col-md-12 mb-3 text-center'>
									<div key={index}>
										<Link key={index} to={`${job.label}`}>
											<div key={index} className='text-bg-primary p-3'>
												<h2
													key={index}
													className='display-5 d-flex align-items-center justify-content-center'>
													<Trans key={index} i18nKey={`careers.${job.label}`} />
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
						<button
							type='button'
							className='btn btn-outline-primary btn-lg mt-2'>
							<Trans i18nKey={'careers.submit_cv'} />
						</button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

