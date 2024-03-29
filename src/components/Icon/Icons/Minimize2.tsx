import React, { SVGProps } from 'react';
const Minimize2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M16 22a1 1 0 01-1-1v-3c0-1.654 1.346-3 3-3h3a1 1 0 110 2h-3a1 1 0 00-1 1v3a1 1 0 01-1 1zm-8 0a1 1 0 01-1-1v-3c0-.552-.449-1-1-1H3a1 1 0 110-2h3c1.654 0 3 1.346 3 3v3a1 1 0 01-1 1zM21 9h-3c-1.654 0-3-1.346-3-3V3a1 1 0 112 0v3c0 .551.448 1 1 1h3a1 1 0 110 2zM6 9H3a1 1 0 010-2h3c.551 0 1-.449 1-1V3a1 1 0 012 0v3c0 1.654-1.346 3-3 3z"
			fill="#000"
		/>
	</svg>
);
export default Minimize2;
