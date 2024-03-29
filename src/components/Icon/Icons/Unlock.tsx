import React, { SVGProps } from 'react';
const Unlock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19 23H5c-1.654 0-3-1.346-3-3v-7c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v7c0 1.654-1.346 3-3 3zM5 12c-.551 0-1 .449-1 1v7c0 .552.449 1 1 1h14a1 1 0 001-1v-7c0-.551-.448-1-1-1H5z"
			fill="#000"
		/>
		<path
			d="M7 12a1 1 0 01-1-1V7a5.96 5.96 0 011.753-4.243A5.961 5.961 0 0111.994.995H12a6.018 6.018 0 015.88 4.806 1 1 0 11-1.96.398A4.012 4.012 0 0012 2.995h-.004A3.977 3.977 0 009.168 4.17 3.98 3.98 0 008 7V11a1 1 0 01-1 1z"
			fill="#000"
		/>
	</svg>
);
export default Unlock;
