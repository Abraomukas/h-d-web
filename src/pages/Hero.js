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
			<div class='container col-xxl-8 px-4 py-5'>
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
						<Trans i18nKey={'hero.heading'}>
							<h1 class='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
								{t()}
							</h1>
						</Trans>
						<p class='lead'>
							Quickly design and customize responsive mobile-first sites with
							Bootstrap, the world’s most popular front-end open source toolkit,
							featuring Sass variables and mixins, responsive grid system,
							extensive prebuilt components, and powerful JavaScript plugins.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
