import React, { useState } from 'react';
import Cookies from 'js-cookie';
import i18next from 'i18next';

const languages = [
	{ name: 'Español', country_code: 'es' },
	{ name: 'Deutsch', country_code: 'de' },
];

function Navbar(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoginStatus = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light h-100 d-flex justify-content-between align-items-center'>
			<div className='navbar-left'>
				{/* LINKS */}
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
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Oficinas
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Vacaciones
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-middle'>
				{/* BRAND */}
				<div className='navbar-middle d-flex align-items-center mx-auto'>
					<a href='/'>
						<img
							src='./images/logo.png'
							height='80'
							alt='H&D Logo'
							loading='lazy'
						/>
					</a>
				</div>
			</div>
			<div className='navbar-right'>
				<div className='container'>
					<div class='row d-flex align-items-center'>
						<div class='col'>
							{/* LANGUAGES */}
							<div className='dropdown'>
								<a
									className='text-reset me-3 dropdown-toggle hidden-arrow'
									href='#'
									id='navbarDropdownMenuLink'
									role='button'
									data-mdb-toggle='dropdown'
									aria-expanded='false'>
									<i className='fas fa-globe' style={{ color: '#000000' }}></i>
								</a>
								<ul
									className='dropdown-menu dropdown-menu-end'
									aria-labelledby='navbarDropdownMenuLink'>
									{languages.map(({ name, country_code, index }) => {
										return (
											<li key={index}>
												<button
													className='dropdown-item'
													onClick={() => {
														i18next.changeLanguage(country_code);
														window.location.reload();
													}}
													disabled={country_code === currentLngCode}>
													<span
														className={`fi fi-${country_code} fis mx-3`}
														style={{
															opacity:
																country_code === currentLngCode ? 0.5 : 1,
														}}></span>

													{name}
												</button>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div class='col'>
							<div class='d-grid gap-2'>
								<button class='btn btn-primary' type='button'>
									acceso
								</button>
							</div>
						</div>
					</div>
					{/* BUTTONS */}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
