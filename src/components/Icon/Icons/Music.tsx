import React, { SVGProps } from 'react';
const Music = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7 22H5c-1.654 0-3-1.346-3-3s1.346-3 3-3h4a1 1 0 011 1v2c0 1.654-1.346 3-3 3zm-2-4a1.001 1.001 0 000 2h2c.551 0 1-.448 1-1v-1H5zm14 2h-2c-1.654 0-3-1.346-3-3s1.346-3 3-3h4a1 1 0 011 1v2c0 1.654-1.346 3-3 3zm-2-4a1 1 0 000 2h2a1 1 0 001-1v-1h-3z"
			fill="#000"
		/>
		<path
			d="M9 18a1 1 0 01-1-1V5a1 1 0 01.835-.986l12-2A.998.998 0 0122 3v12a1 1 0 11-2 0V4.181L10 5.847V17a1 1 0 01-1 1z"
			fill="#000"
		/>
	</svg>
);
export default Music;
