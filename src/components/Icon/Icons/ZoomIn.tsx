import React, { SVGProps } from 'react';
const ZoomIn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M11 20c-4.962 0-9-4.037-9-9 0-4.962 4.038-9 9-9 4.963 0 9 4.038 9 9 0 4.963-4.037 9-9 9zm0-16c-3.86 0-7 3.14-7 7 0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7 0-3.86-3.141-7-7-7z"
			fill="#000"
		/>
		<path
			d="M21 22a.997.997 0 01-.707-.293l-4.35-4.35a.999.999 0 111.414-1.414l4.35 4.35A.999.999 0 0121 22zM11 15a1 1 0 01-1-1V8a1 1 0 012 0v6a1 1 0 01-1 1z"
			fill="#000"
		/>
		<path d="M14 12H8a1 1 0 010-2h6a1 1 0 110 2z" fill="#000" />
	</svg>
);
export default ZoomIn;
