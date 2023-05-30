import React, { SVGProps } from 'react';
const Bell = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M11.995 22.995a2.99 2.99 0 01-2.59-1.494.999.999 0 111.731-1.002 1 1 0 001.73-.001 1 1 0 011.729 1.004 3.002 3.002 0 01-2.6 1.493zM22 18H2a1 1 0 110-2c1.103 0 2-.897 2-2V9c0-4.411 3.589-8 8-8s8 3.589 8 8v5c0 1.103.897 2 2 2a1 1 0 110 2zM5.463 16h13.074A3.97 3.97 0 0118 14V9c0-3.309-2.691-6-6-6S6 5.691 6 9v5a3.97 3.97 0 01-.537 2z"
			fill="#000"
		/>
	</svg>
);
export default Bell;
