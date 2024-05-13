import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function News() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	const news = [
		{ label: 'dec-23', picture: '', to: '' },
		{ label: 'jan-24', picture: '', to: '' },
		{ label: 'feb-24', picture: '', to: '' },
		{ label: 'mar-24', picture: '', to: '' },
		{ label: 'apr-24', picture: '', to: '' },
		{ label: 'may-24', picture: '', to: '' },
		{ label: 'jun-24', picture: '', to: '' },
	];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* HEADER */}

			<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
				<div className='col-md-6 p-lg-5 mx-auto mt-3'>
					<h1 className='display-3 fw-bold'>
						<Trans i18nKey={'news.header'} />
					</h1>
				</div>
			</div>

			{/* NEWS GRID */}

			<div className='container mb-7'>
				<div className='row gx-3 d-flex justify-content-center'>
					{news.map((post, index) => {
						return (
							<div
								index={index}
								className='col-lg-4 col-md-12 mb-3 text-center'>
								<div index={index}>
									<div className='card'>
										<div
											className='bg-image hover-overlay'
											data-mdb-ripple-init
											data-mdb-ripple-color='light'>
											<img
												src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
												className='img-fluid'
											/>
											<a href='#!'>
												<div
													className='mask'
													style={{
														backgroundColor: 'rgba(251, 251, 251, 0.15)',
													}}></div>
											</a>
										</div>
										<div className='card-body'>
											<h5 className='card-title'>
												<strong>
													<Trans i18nKey={`news.posts.${post.label}`} />
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

export default News;
