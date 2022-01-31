import React, { SVGProps } from 'react';

const BarChart = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M18 21a1 1 0 01-1-1V10a1 1 0 112 0v10a1 1 0 01-1 1zM12 21a1 1 0 01-1-1V4a1 1 0 012 0v16a1 1 0 01-1 1zM6 21a1 1 0 01-1-1v-6a1 1 0 112 0v6a1 1 0 01-1 1z"
			fill="#000"
		/>
	</svg>
);

export default BarChart;
