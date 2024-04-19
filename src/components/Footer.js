import React from 'react';

function Footer() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light h-100 d-flex justify-content-between align-items-center'>
			{/* GRID CONTAINER */}
			<div className='container p-4'>
				{/* SOCIAL MEDIA */}
				<section className='mb-4'>
					<div className='btn-group' role='group'>
						{/* LINKEDIN */}
						<Link to='https://www.linkedin.com/company/hh-asd' target='_blank'>
							<button
								type='button'
								className='btn btn-outline-primary'
								style={{ backgroundColor: '#3b5998' }}>
								<i className='fab fa-linkedin text-white'></i>
							</button>
						</Link>

						{/* WEB */}
						<Link to='https://akdb.de/' target='_blank'>
							<button
								type='button'
								className='btn btn-outline-primary'
								style={{ backgroundColor: '#3b5998' }}
								onClick={() => {}}>
								<i className='fas fa-globe text-white'></i>
							</button>
						</Link>
					</div>
				</section>
				{/* TEXT */}
				<section>
					<div>
						{/* GRID ROW */}
						<div className='row d-flex justify-content-center'>
							{/* GRID COLUMN */}
							<div className='col-auto'>
								<p>
									<strong>
										H&D Aplicaciones, Software y Desarrollo S.L.U.
									</strong>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</nav>
	);
}
import { Link } from 'react-router-dom';

export default Footer;
