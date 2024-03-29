import React, { SVGProps } from 'react';
const File = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 23H6c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h7c.266 0 .52.105.707.293l7 7A.997.997 0 0121 9v11c0 1.654-1.346 3-3 3zM6 3c-.551 0-1 .449-1 1v16c0 .552.449 1 1 1h12a1 1 0 001-1V9.414L12.586 3H6z"
			fill="#000"
		/>
		<path d="M20 10h-7a1 1 0 01-1-1V2a1 1 0 012 0v6h6a1 1 0 110 2z" fill="#000" />
	</svg>
);
export default File;
