import React, { SVGProps } from 'react';
const Crosshair = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M12 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11zm0-20c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9z"
			fill="#000"
		/>
		<path
			d="M22 13h-4a1 1 0 110-2h4a1 1 0 110 2zM6 13H2a1 1 0 010-2h4a1 1 0 010 2zM12 7a1 1 0 01-1-1V2a1 1 0 012 0v4a1 1 0 01-1 1zM12 23a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z"
			fill="#000"
		/>
	</svg>
);
export default Crosshair;
