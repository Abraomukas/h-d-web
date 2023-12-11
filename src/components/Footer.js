import React from 'react';

function Footer() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light h-100 d-flex justify-content-between align-items-center'>
			{/* GRID CONTAINER */}
			<div className='container p-4'>
				{/* SOCIAL MEDIA */}
				<section className='mb-4'>
					{/* LINKEDIN */}
					<a
						className='btn btn-primary btn-floating m-1'
						style={{ backgroundColor: '#3b5998' }}
						href='https://www.linkedin.com/company/hh-asd'
						role='button'>
						<i className='fab fa-linkedin'></i>
					</a>

					{/*WEB */}
					<a
						className='btn btn-primary btn-floating m-1'
						style={{ backgroundColor: 'lightblue' }}
						href='https://hyd.com.es/'
						role='button'>
						<i className='fas fa-globe'></i>
					</a>
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

export default Footer;
