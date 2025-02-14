import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function TimelineEntry(props) {
	useTranslation();

	return (
		<div className='col'>
			<div>
				<h3 className='fw-bold fs-2 text-body-emphasis'>
					<i className={`${props.icon}`} />
				</h3>
				<h3 className='fw-bold mb-0 fs-3 text-body-emphasis'>
					<Trans i18nKey={`hero.timeline-${props.tag}`} />
				</h3>

				<br />

				<p className='fs-4'>
					<Trans
						i18nKey={`hero.timeline-${props.tag}-text`}
						components={{
							a: (
								<a
									style={{ textDecoration: 'none' }}
									href='https://www.h-d-gmbh.de/'
									target='_blank'
									rel='noopener noreferrer'></a>
							),
						}}
					/>
				</p>
				<img
					className='img-fluid mt-3'
					src={props.img}
					alt='Logo'
					loading='lazy'
				/>
			</div>
		</div>
	);
}
