import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function FeatureEntry(props) {
	useTranslation();

	return (
		<div className='col d-flex align-items-start'>
			<svg
				className='bi text-body-secondary flex-shrink-0 me-3'
				width='1.75em'
				height='1.75em'
			/>
			<div>
				<h3 className='fw-bold mb-0 fs-4 text-body-emphasis'>
					<i className={`${props.icon}`} />
				</h3>
				<h3 className='fw-bold mb-0 fs-4 text-body-emphasis'>
					<Trans i18nKey={`${props.text}`} />
				</h3>
			</div>
		</div>
	);
}
