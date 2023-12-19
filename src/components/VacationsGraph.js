import React from 'react';
import Plot from 'react-plotly.js';

const VacationsGraph = (props) => {
	return (
		<Plot
			data={[
				{
					values: [16, 15, 12, 6, 5, 4, 42],
					labels: ['US', 'China', 'EU', 'Russia', 'Brazil', 'India', 'TEST'],
					domain: { column: 0 },
					name: 'Vacations',
					hoverinfo: 'label+percent+name',
					hole: '.4',
					type: 'pie',
				},
			]}
			layout={{
				title: 'Vacation TEST',
				annotations: [
					{
						font: { size: 20 },
						showarrow: false,
						text: '???',
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
