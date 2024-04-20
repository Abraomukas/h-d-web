import React from 'react';

function Placeholder(props) {
	let width = props.width;
	let height = props.height;

	return (
		<div
			style={{
				backgroundColor: 'blue',
				width: width,
				height: height,
			}}></div>
	);
}

export default Placeholder;
