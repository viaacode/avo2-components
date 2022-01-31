import React, { SVGProps } from 'react';

const FastForward = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M13 20a1 1 0 01-1-1V5a1 1 0 011.615-.789l9 7a1.002 1.002 0 01-.001 1.58l-9 7A1 1 0 0113 20zm1-12.956v9.911L20.371 12 14 7.044z"
			fill="#000"
		/>
		<path
			d="M2 20a1 1 0 01-1-1V5a1 1 0 011.614-.79l9 7a1.003 1.003 0 010 1.58l-9 7A1 1 0 012 20zM3 7.044v9.911L9.371 12 3 7.044z"
			fill="#000"
		/>
	</svg>
);

export default FastForward;
