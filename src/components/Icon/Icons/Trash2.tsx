import React, { SVGProps } from 'react';
const Trash2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M21 7H3a1 1 0 010-2h18a1 1 0 110 2z" fill="#000" />
		<path
			d="M17 23H7c-1.654 0-3-1.346-3-3V6a1 1 0 012 0v14c0 .552.449 1 1 1h10a1 1 0 001-1V6a1 1 0 112 0v14c0 1.654-1.346 3-3 3zM16 7a1 1 0 01-1-1V4c0-.551-.448-1-1-1h-4c-.551 0-1 .449-1 1v2a1 1 0 01-2 0V4c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v2a1 1 0 01-1 1z"
			fill="#000"
		/>
	</svg>
);
export default Trash2;
