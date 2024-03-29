import React, { SVGProps } from 'react';
const Play = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M5 22a1.001 1.001 0 01-1-1V3a1 1 0 011.541-.841l14 9a1 1 0 010 1.682l-14 9A1.008 1.008 0 015 22zM6 4.832v14.336L17.15 12 6 4.832z"
			fill="#000"
		/>
	</svg>
);
export default Play;
