import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutUs() {
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
								<img
									src='./images/hero.jpg'
									className='img-fluid'
									alt='H&D España'
								/>
							</div>
						</div>
						<div className='col-lg-4 col-md-5'>
							<div className='container'>
								<h1 className='display-1 fw-bold'>
									<strong>¿Quiénes somos?</strong>
								</h1>

								<br />

								<h3>
									<strong>H&D España</strong>
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
