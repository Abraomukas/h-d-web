import React from 'react';
import Plot from 'react-plotly.js';

const OfficeGraph = (props) => {
	return (
		<Plot
			data={[
				{
					x: [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Sep',
						'Oct',
						'Nov',
						'Dec',
					],
					y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
					type: 'bar',
					name: 'WFH',
					marker: {
						color: 'rgb(49,130,189)',
						opacity: 0.7,
					},
				},
				{
					x: [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Sep',
						'Oct',
						'Nov',
						'Dec',
					],
					y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
					type: 'bar',
					name: 'WFO',
					marker: {
						color: 'rgb(204,204,204)',
						opacity: 0.5,
					},
				},
			]}
			layout={{ width: '800', height: '700', title: `${props.title}` }}
		/>
	);
};

export default OfficeGraph;
