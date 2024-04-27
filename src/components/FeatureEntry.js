import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

function FeatureEntry(props) {
	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<div className='col d-flex align-items-start'>
			<svg
				className='bi text-body-secondary flex-shrink-0 me-3'
				width='1.75em'
				height='1.75em'
			/>
			<div>
				<h3 className='fw-bold mb-0 fs-4 text-body-emphasis'>
					<i className={`fas ${props.icon}`} />
				</h3>
				<h3 className='fw-bold mb-0 fs-4 text-body-emphasis'>
					<Trans i18nKey={`${props.text}`} />
				</h3>
			</div>
		</div>
	);
}

export default FeatureEntry;
