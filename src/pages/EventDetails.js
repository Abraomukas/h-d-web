import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function EventDetails() {
	useTranslation();

	const currentLngCode = Cookies.get('i18next') || 'es';
	const { event } = useParams();

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* CAROUSEL */}

			<div className='container-fluid w-75 mt-5'>
				<div id='carouselExampleIndicators' className='carousel slide'>
					<div className='carousel-indicators'>
						<button
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide-to='0'
							className='active'
							aria-current='true'
							aria-label='Slide 1'></button>
						<button
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide-to='1'
							aria-label='Slide 2'></button>
						<button
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide-to='2'
							aria-label='Slide 3'></button>
					</div>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<img
								src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
								className='d-block w-100'
								alt='...'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
								className='d-block w-100'
								alt='...'
							/>
						</div>
						<div className='carousel-item'>
							<img
								src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
								className='d-block w-100'
								alt='...'
							/>
						</div>
					</div>
					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide='prev'>
						<span
							className='carousel-control-prev-icon'
							aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide='next'>
						<span
							className='carousel-control-next-icon'
							aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			</div>

			{/* HEADER */}

			<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
				<div className='col-md-6 p-lg-5 mx-auto mt-3'>
					<h1 className='display-3 fw-bold'>
						<Trans i18nKey={`events.${event}.header`} />
					</h1>

					<br />

					<p>
						Quisque sollicitudin condimentum diam, quis egestas neque congue
						vitae. Vestibulum lacinia tincidunt magna, in rhoncus urna dictum
						quis. Donec sit amet elit id erat pharetra molestie et a ante.
						Integer nec vestibulum nunc. Maecenas commodo erat ut felis
						eleifend, vitae iaculis dolor luctus. Mauris tempor tortor at odio
						congue, ac commodo velit ultrices. Mauris justo erat, viverra eu
						sodales placerat, laoreet sit amet sapien.
					</p>
					<p>
						Quisque sollicitudin condimentum diam, quis egestas neque congue
						vitae. Vestibulum lacinia tincidunt magna, in rhoncus urna dictum
						quis. Donec sit amet elit id erat pharetra molestie et a ante.
						Integer nec vestibulum nunc. Maecenas commodo erat ut felis
						eleifend, vitae iaculis dolor luctus. Mauris tempor tortor at odio
						congue, ac commodo velit ultrices. Mauris justo erat, viverra eu
						sodales placerat, laoreet sit amet sapien.
					</p>
					<p>
						Quisque sollicitudin condimentum diam, quis egestas neque congue
						vitae. Vestibulum lacinia tincidunt magna, in rhoncus urna dictum
						quis. Donec sit amet elit id erat pharetra molestie et a ante.
						Integer nec vestibulum nunc. Maecenas commodo erat ut felis
						eleifend, vitae iaculis dolor luctus. Mauris tempor tortor at odio
						congue, ac commodo velit ultrices. Mauris justo erat, viverra eu
						sodales placerat, laoreet sit amet sapien.
					</p>
					<p>
						Quisque sollicitudin condimentum diam, quis egestas neque congue
						vitae. Vestibulum lacinia tincidunt magna, in rhoncus urna dictum
						quis. Donec sit amet elit id erat pharetra molestie et a ante.
						Integer nec vestibulum nunc. Maecenas commodo erat ut felis
						eleifend, vitae iaculis dolor luctus. Mauris tempor tortor at odio
						congue, ac commodo velit ultrices. Mauris justo erat, viverra eu
						sodales placerat, laoreet sit amet sapien.
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default EventDetails;
