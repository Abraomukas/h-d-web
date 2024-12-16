import React from 'react';
import Cookies from 'js-cookie';
import { Trans } from 'react-i18next';

function TimelineEntry(props) {
	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<div className='col'>
			<div>
				<h3 className='fw-bold fs-1 text-body-emphasis'>
					<i className={`${props.icon}`} />
				</h3>
				<h3 className='fw-bold mb-0 fs-4 text-body-emphasis'>
					<Trans i18nKey={`hero.timeline-${props.tag}`} />
				</h3>
				<p>{`${props.tag}`}</p>
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

export default TimelineEntry;
