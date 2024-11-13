import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Events() {
	useTranslation();

	const currentLngCode = Cookies.get('i18next') || 'es';

	const news = [
		{ label: 'dec-23', picture: '' },
		{ label: 'jan-24', picture: '' },
		{ label: 'feb-24', picture: '' },
		{ label: 'mar-24', picture: '' },
		{ label: 'apr-24', picture: '' },
		{ label: 'may-24', picture: '' },
		{ label: 'jun-24', picture: '' },
		{ label: 'jul-24', picture: '' },
		{ label: 'oct-1-24', picture: '' },
		{ label: 'oct-2-24', picture: '' },
	];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* HEADER */}

			<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
				<div className='col-md-6 p-lg-5 mx-auto mt-3'>
					<h1 className='display-3 fw-bold'>
						<Trans i18nKey={'events.header'} />
					</h1>
				</div>
			</div>

			{/* EVENTS GRID */}

			<div className='container mb-7'>
				<div className='row gx-3 d-flex justify-content-center'>
					{news.map((post, index) => {
						return (
							<div
								key={index++}
								className='col-lg-4 col-md-12 mb-3 text-center'>
								<div key={index++}>
									<div key={index++} className='card'>
										<div
											key={index++}
											className='bg-image hover-overlay'
											data-mdb-ripple-init
											data-mdb-ripple-color='light'>
											<img
												index={index++}
												src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
												className='img-fluid'
											/>
											<Link index={index++} to={`${post.label}`}>
												<div
													key={index++}
													className='mask'
													style={{
														backgroundColor: 'rgba(251, 251, 251, 0.15)',
													}}></div>
											</Link>
										</div>
										<div key={index++} className='card-body'>
											<h5 key={index++} className='card-title'>
												<strong>
													<Trans
														key={index++}
														i18nKey={`events.posts.${post.label}`}
													/>
												</strong>
											</h5>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Events;
