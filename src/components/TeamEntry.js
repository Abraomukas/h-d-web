import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function TeamEntry(props) {
	useTranslation();

	return (
		<div className='container-fluid d-flex justify-content-center'>
			<div className='card text-center' style={{ width: '18rem' }}>
				<div className='card-body'>
					<h5 className='card-title'>
						<Trans i18nKey={`services.teams-names.${props.team}`} />
					</h5>
					<p className='card-text'>
						<Trans i18nKey={`services.teams-descriptions.${props.team}`} />
					</p>
				</div>
			</div>
		</div>
	);
}
