import React, { SVGProps } from 'react';
const Image = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			d="M8.5 11A2.503 2.503 0 016 8.5C6 7.122 7.122 6 8.5 6S11 7.122 11 8.5 9.878 11 8.5 11zm0-3a.5.5 0 100 1 .5.5 0 000-1zM5 22a.999.999 0 01-.707-1.707l11-11a.999.999 0 011.414 0l5 5a.999.999 0 11-1.414 1.414L16 11.414 5.707 21.707A.997.997 0 015 22z"
			fill="#000"
		/>
	</svg>
);
export default Image;
