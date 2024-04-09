import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function News() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* HEADER */}

			<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
				<div className='col-md-6 p-lg-5 mx-auto mt-3'>
					<h1 className='display-3 fw-bold'>
						<Trans i18nKey={'news.heading'} />
					</h1>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default News;
