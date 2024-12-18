import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import Cookies from "js-cookie";
import { Trans, useTranslation } from "react-i18next";
import TimelineEntry from '../components/TimelineEntry';
import { Link } from 'react-router-dom';

export default function Hero() {
	const cld = new Cloudinary({ cloud: { cloudName: 'abraomukas' } });

	const currentLngCode = Cookies.get('i18next') || 'es';
	const width = window.innerWidth;
	const height = window.innerHeight;
	const imageUrl = cld
		.image('h-d-web/jan-24')
		.format('auto')
		.quality('auto')
		.resize(auto().gravity(autoGravity()).width(width).height(height))
		.toURL();

	useTranslation();

	const timeline = [
		{ icon: 'fas fa-globe', tag: 'since', img: './images/AKDB.png' },
		{
			icon: 'fa-solid fa-recycle',
			tag: 'innovate',
			img: './images/HyD-Munich.png',
		},
		{
			icon: 'fa-solid fa-user-group',
			tag: 'together',
			img: './images/HyD-Spain.png',
		},
	];

	return (
		<div>
			{/* COVER IMAGE WITH MESSAGE */}
			<section>
				<div className='container-fluid px-5 py-5'>
					<img src={imageUrl} className='img-fluid' alt='Background' />
				</div>
			</section>

			{/* TIMELINE */}
			<section>
				<div className='container px-5 pb-5'>
					<div className='row'>
						<div className='container-fluid text-center'>
							<h1 className='display-7 fw-bold lh-1 mb-5'>
								<Trans i18nKey={'hero.timeline-header'} />
							</h1>
						</div>
						<div className='row grid gap-1'>
							{timeline.map((entry, index) => {
								return (
									<div
										index={index}
										className='col-4 border'
										style={{
											backgroundColor: 'gray',
											minWidth: '300px',
											maxWidth: '33%',
										}}>
										<div index={index} className='container my-5'>
											<TimelineEntry
												index={index}
												icon={entry.icon}
												tag={entry.tag}
												img={entry.img}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* CTA for Services */}
			<section>
				<div
					className='container-fluid px-5 py-5'
					style={{ position: 'relative', overflow: 'hidden' }}>
					<img
						src={imageUrl}
						alt='CTA background'
						style={{ objectFit: 'cover' }}
						className='img-fluid'
					/>
					<button
						type='button'
						className='btn btn-outline-secondary'
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							right: '5%',
							transform: 'translate(-50%, -50%)',
							zIndex: 1,
							cursor: 'pointer',
						}}>
						TO SERVICES
					</button>
				</div>
			</section>
		</div>
	);
}
