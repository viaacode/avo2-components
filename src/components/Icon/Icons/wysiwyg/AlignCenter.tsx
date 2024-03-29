import React, { SVGProps } from 'react';
const AlignCenter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 11H6a1 1 0 010-2h12a1 1 0 110 2zM21 7H3a1 1 0 010-2h18a1 1 0 110 2zM21 15H3a1 1 0 110-2h18a1 1 0 110 2zM18 19H6a1 1 0 110-2h12a1 1 0 110 2z"
			fill="#000"
		/>
	</svg>
);
export default AlignCenter;
