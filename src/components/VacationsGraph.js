import React from 'react';
import Plot from 'react-plotly.js';

const VacationsGraph = (props) => {
	return (
		<Plot
			data={[
				{
					values: [30, 50, 1],
					labels: ['Holiday', 'Sick leave', 'Moving'],
					domain: { column: 0 },
					name: 'Vacations',
					hoverinfo: 'label+percent+name',
					hole: '.4',
					type: 'pie',
				},
			]}
			layout={{
				title: 'My holidays',
				annotations: [
					{
						font: { size: 30 },
						showarrow: false,
						text: '',
						x: 0.82,
						y: 0.5,
					},
				],
				height: 500,
				width: 600,
				showlegend: false,
				grid: { rows: 1, columns: 2 },
			}}
		/>
	);
};

export default VacationsGraph;
