import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

function Hero() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<div className='container col-xxl-8 px-4 py-5'>
				<div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
					<div className='col-10 col-sm-8 col-lg-6'>
						<img
							src='./images/yvonne.jpeg'
							className='d-block mx-lg-auto img-fluid'
							alt='Bootstrap Themes'
							width='700'
							height='500'
							loading='lazy'
						/>
					</div>
					<div className='col-lg-6'>
						<h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
							<Trans i18nKey={'hero.header'} />
						</h1>
						<p className='lead'>
							<Trans i18nKey={'hero.subheader'} />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
