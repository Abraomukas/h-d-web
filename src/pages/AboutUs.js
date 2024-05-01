import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Placeholder from '../components/Placeholder';

function AboutUs() {
	const currentLngCode = Cookies.get('i18next') || 'es';

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
				<div
					className='container-fluid'
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
					}}>
					<div className='row gx-1'>
						<div className='col-lg-2 col-md-1'></div>
						<div className='col-lg-4 col-md-5'>
							<div
								className='bg-image hover-overlay ripple shadow-2-strong rounded-3'
								data-mdb-ripple-color='light'>
								<Placeholder width={600} height={700} />
							</div>
						</div>
						<div className='col-lg-4 col-md-5'>
							<div className='container'>
								<h1 className='display-1 fw-bold'>
									<Trans i18nKey={'about-us.header'}>
										<strong></strong>
									</Trans>
								</h1>

								<br />

								<h3>
									<Trans i18nKey={'about-us.subheader'}>
										<strong></strong>
									</Trans>
								</h3>

								<br />

								<p>
									Quisque sollicitudin condimentum diam, quis egestas neque
									congue vitae. Vestibulum lacinia tincidunt magna, in rhoncus
									urna dictum quis. Donec sit amet elit id erat pharetra
									molestie et a ante. Integer nec vestibulum nunc. Maecenas
									commodo erat ut felis eleifend, vitae iaculis dolor luctus.
									Mauris tempor tortor at odio congue, ac commodo velit
									ultrices. Mauris justo erat, viverra eu sodales placerat,
									laoreet sit amet sapien.
								</p>

								<br />

								<p>
									Quisque sollicitudin condimentum diam, quis egestas neque
									congue vitae. Vestibulum lacinia tincidunt magna, in rhoncus
									urna dictum quis. Donec sit amet elit id erat pharetra
									molestie et a ante. Integer nec vestibulum nunc. Maecenas
									commodo erat ut felis eleifend, vitae iaculis dolor luctus.
									Mauris tempor tortor at odio congue, ac commodo velit
									ultrices. Mauris justo erat, viverra eu sodales placerat,
									laoreet sit amet sapien.
								</p>
							</div>
						</div>
						<div className='col-lg-2 col-md-1'></div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default AboutUs;
