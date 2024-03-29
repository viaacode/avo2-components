import React, { SVGProps } from 'react';
const Bookmark = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19 22a.988.988 0 01-.581-.187L12 17.229l-6.419 4.585A1.001 1.001 0 014 21V5c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v16a1.001 1.001 0 01-1 1zm-7-7c.204 0 .407.062.581.187L18 19.057V5c0-.551-.448-1-1-1H7c-.551 0-1 .449-1 1v14.057l5.419-3.87A.993.993 0 0112 15z"
			fill="#000"
		/>
	</svg>
);
export default Bookmark;
