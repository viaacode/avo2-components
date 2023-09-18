import React, { SVGProps } from 'react';
const RotateCw = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M23 11h-6a1 1 0 110-2h5V4a1 1 0 112 0v6a1 1 0 01-1 1z" fill="#000" />
		<path
			d="M11.994 22.003a9.967 9.967 0 01-3.321-.571C3.474 19.594.738 13.87 2.575 8.67c1.836-5.2 7.562-7.934 12.76-6.098a10.053 10.053 0 013.742 2.36l4.608 4.339a1 1 0 01-1.371 1.456l-4.63-4.36a8.078 8.078 0 00-3.016-1.91c-4.156-1.467-8.738.72-10.207 4.879-1.469 4.159.719 8.738 4.878 10.209 4.162 1.469 8.739-.72 10.209-4.88a.995.995 0 011.275-.608.998.998 0 01.609 1.275c-1.449 4.102-5.317 6.67-9.438 6.67z"
			fill="#000"
		/>
	</svg>
);
export default RotateCw;
