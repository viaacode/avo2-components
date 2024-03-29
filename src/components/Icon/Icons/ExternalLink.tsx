import React, { SVGProps } from 'react';
const ExternalLink = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M16 22H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h6a1 1 0 010 2H5c-.551 0-1 .449-1 1v11c0 .552.449 1 1 1h11a1 1 0 001-1v-6a1 1 0 112 0v6c0 1.654-1.346 3-3 3zM21 10a1 1 0 01-1-1V4h-5a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 01-1 1z"
			fill="#000"
		/>
		<path
			d="M10 15a.999.999 0 01-.707-1.707l11-11a.999.999 0 111.414 1.414l-11 11A.997.997 0 0110 15z"
			fill="#000"
		/>
	</svg>
);
export default ExternalLink;
