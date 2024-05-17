import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function JobDetails() {
	const currentLngCode = Cookies.get('i18next') || 'es';
	const { job } = useParams();

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			<div className='container'>
				{/* HEADER */}

				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-3 fw-bold'>
							<Trans i18nKey={`careers.jobs.${job}`} />
						</h1>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default JobDetails;
