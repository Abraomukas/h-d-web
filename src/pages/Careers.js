import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Careers() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	const jobs = [
		'Lead Full Stack para Java ERP con alemán',
		'Senior/Junior Java Developer para ERP con alemán',
		'Senior/Junior .NET Developer para RRHH con alemán',
		'Senior/Junior Frontend Developer para RRHH con alemán',
		'Proxy Product Owner con alemán',
		'Software QA Manager',
		'DevOps/sysadmin con alemán',
		'Senior/Junior Java Developer para plataforma Synergo',
		'Desarrollador Rust con alemán',
	];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}>
				<h1 className='display-7 fw-bold text-body-emphasis lh-1 mb-3'>
					<Trans i18nKey={'careers.heading'} />
				</h1>
			</div>

			<Footer />
		</div>
	);
}

export default Careers;
