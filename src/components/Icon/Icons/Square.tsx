import React, { SVGProps } from 'react';
const Square = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19 22H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3zM5 4c-.551 0-1 .449-1 1v14c0 .552.449 1 1 1h14a1 1 0 001-1V5c0-.551-.448-1-1-1H5z"
			fill="#000"
		/>
	</svg>
);
export default Square;
