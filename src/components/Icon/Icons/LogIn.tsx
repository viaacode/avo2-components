import React, { SVGProps } from 'react';
const LogIn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19 22h-4a1 1 0 110-2h4a1 1 0 001-1V5c0-.551-.448-1-1-1h-4a1 1 0 110-2h4c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3z"
			fill="#000"
		/>
		<path
			d="M10 18a.999.999 0 01-.707-1.707L13.586 12 9.293 7.707a.999.999 0 111.414-1.414l5 5a.999.999 0 010 1.414l-5 5A.997.997 0 0110 18z"
			fill="#000"
		/>
		<path d="M15 13H3a1 1 0 010-2h12a1 1 0 110 2z" fill="#000" />
	</svg>
);
export default LogIn;
