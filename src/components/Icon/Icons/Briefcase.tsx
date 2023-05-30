import React, { SVGProps } from 'react';
const Briefcase = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M20 22H4c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h16c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3zM4 8c-.551 0-1 .449-1 1v10c0 .552.449 1 1 1h16a1 1 0 001-1V9c0-.551-.448-1-1-1H4z"
			fill="#000"
		/>
		<path
			d="M16 22a1 1 0 01-1-1V5c0-.551-.448-1-1-1h-4c-.551 0-1 .449-1 1v16a1 1 0 11-2 0V5c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v16a1 1 0 01-1 1z"
			fill="#000"
		/>
	</svg>
);
export default Briefcase;
