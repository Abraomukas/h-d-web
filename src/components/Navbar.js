import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import { Trans, useTranslation } from 'react-i18next';

const languages = [
	{ name: 'Español', country_code: 'es' },
	{ name: 'Deutsch', country_code: 'de' },
	{ name: 'English', country_code: 'gb' },
];

const sections = [
	{ label: 'services' },
	{ label: 'events' },
	{ label: 'careers' },
	{ label: 'about' },
];

export default function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const currentLngCode = Cookies.get('i18next') || 'es';

	useTranslation();

	return (
		<nav
			className={`navbar sticky-top navbar-expand-lg d-flex navbar-${
				isDarkMode ? 'dark' : 'light'
			} bg-${isDarkMode ? 'dark' : 'light'}`}>
			{/* BRAND */}
			<div className='d-flex align-items-center'>
				<a href='/'>
					<img
						src='/images/HyD-Spain.png'
						height='80'
						alt='H&D Logo'
						loading='lazy'
					/>
				</a>
			</div>
			{/* LINKS */}
			<div className='mx-auto'>
				<button
					className='navbar-brand navbar-toggler'
					type='button'
					data-mdb-toggle='collapse'
					data-mdb-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i className='fas fa-bars'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						{sections.map((section, index) => {
							return (
								<li key={index} className='nav-item m-2'>
									<Link
										key={index}
										className='nav-link fw-bolder'
										to={`/${section.label}`}>
										<Trans key={index} i18nKey={`navbar.${section.label}`} />
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{/* DARK MODE && LANGUAGES */}
			<div>
				<div className='container'>
					<div className='row d-flex align-items-center'>
						<div className='col'>
							{/* DARK MODE */}
							<div className='dropdown'>
								<a
									className='text-reset me-3'
									href='#'
									role='button'
									aria-expanded='false'
									onClick={() => {
										setIsDarkMode(!isDarkMode);
									}}>
									{isDarkMode ? (
										<i className='fas fa-sun' style={{ color: '#ffffff' }} />
									) : (
										<i className='fas fa-moon' style={{ color: '#000000' }} />
									)}
								</a>
							</div>
						</div>
						<div className='col'>
							{/* LINKEDIN */}
							<div className='dropdown'>
								<Link
									to='https://www.linkedin.com/company/hh-asd'
									target='_blank'>
									<button
										type='button'
										className='btn'
										aria-expanded='false'
										style={{ backgroundColor: '#3b5998' }}>
										<i className='fab fa-linkedin text-white'></i>
									</button>
								</Link>
							</div>
						</div>
						<div className='col'>
							{/* LANGUAGES */}
							<div className='dropdown'>
								<button
									className='btn dropdown-toggle'
									type='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									<i
										className='fas fa-globe'
										style={{
											color: isDarkMode ? '#ffffff' : '#000000',
										}}></i>{' '}
								</button>
								<ul className='dropdown-menu dropdown-menu-end'>
									{languages.map(({ name, country_code }, index) => {
										return (
											<li key={index}>
												<button
													key={index}
													className='dropdown-item'
													onClick={() => {
														i18next.changeLanguage(country_code);
														window.location.reload();
													}}
													disabled={country_code === currentLngCode}>
													<span
														key={index}
														className={`fi fi-${country_code} fis mx-3`}
														style={{
															opacity:
																country_code === currentLngCode ? 0.5 : 1,
														}}
													/>

													{name}
												</button>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
