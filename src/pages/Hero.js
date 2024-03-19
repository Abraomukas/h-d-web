import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

function Hero() {
	const currentLngCode = Cookies.get('i18next') || 'es';

	const { t } = useTranslation();

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<div className='container col-xxl-8 px-4 py-5'>
				<div class='row flex-lg-row-reverse align-items-center g-5 py-5'>
					<div class='col-10 col-sm-8 col-lg-6'>
						<img
							src='./images/yvonne.jpeg'
							class='d-block mx-lg-auto img-fluid'
							alt='Bootstrap Themes'
							width='700'
							height='500'
							loading='lazy'
						/>
					</div>
					<div class='col-lg-6'>
						<h1 class='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
							<Trans i18nKey={'hero.heading'} />
						</h1>
						<p class='lead'>
							<Trans i18nKey={'hero.subheading'} />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
