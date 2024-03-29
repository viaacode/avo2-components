import React, { SVGProps } from 'react';
const Sliders = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M4 22a1 1 0 01-1-1v-7a1 1 0 112 0v7a1 1 0 01-1 1zM4 11a1 1 0 01-1-1V3a1 1 0 012 0v7a1 1 0 01-1 1zM12 22a1 1 0 01-1-1v-9a1 1 0 012 0v9a1 1 0 01-1 1zM12 9a1 1 0 01-1-1V3a1 1 0 012 0v5a1 1 0 01-1 1zM20 22a1 1 0 01-1-1v-5a1 1 0 112 0v5a1 1 0 01-1 1zM20 13a1 1 0 01-1-1V3a1 1 0 112 0v9a1 1 0 01-1 1z"
			fill="#000"
		/>
		<path
			d="M7 15H1a1 1 0 110-2h6a1 1 0 110 2zM15 9H9a1 1 0 010-2h6a1 1 0 110 2zM23 17h-6a1 1 0 110-2h6a1 1 0 110 2z"
			fill="#000"
		/>
	</svg>
);
export default Sliders;
