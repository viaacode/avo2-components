import React, { SVGProps } from 'react';
const AlignRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21 11H7a1 1 0 010-2h14a1 1 0 110 2zM21 7H3a1 1 0 010-2h18a1 1 0 110 2zM21 15H3a1 1 0 110-2h18a1 1 0 110 2zM21 19H7a1 1 0 110-2h14a1 1 0 110 2z"
			fill="#000"
		/>
	</svg>
);
export default AlignRight;
