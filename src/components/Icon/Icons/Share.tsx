import React, { SVGProps } from 'react';
const Share = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 23H6c-1.654 0-3-1.346-3-3v-8a1 1 0 012 0v8c0 .552.449 1 1 1h12a1 1 0 001-1v-8a1 1 0 112 0v8c0 1.654-1.346 3-3 3zM16 7a.997.997 0 01-.707-.293L12 3.414 8.707 6.707a.999.999 0 11-1.414-1.414l4-4a.999.999 0 011.414 0l4 4A.999.999 0 0116 7z"
			fill="#000"
		/>
		<path d="M12 16a1 1 0 01-1-1V2a1 1 0 012 0v13a1 1 0 01-1 1z" fill="#000" />
	</svg>
);
export default Share;
