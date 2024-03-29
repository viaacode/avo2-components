import React, { SVGProps } from 'react';
const Rss = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M13 21a1 1 0 01-1-1c0-4.411-3.589-8-8-8a1 1 0 010-2c5.514 0 10 4.486 10 10a1 1 0 01-1 1z"
			fill="#000"
		/>
		<path
			d="M20 21a1 1 0 01-1-1c0-8.271-6.729-15-15-15a1 1 0 010-2c9.374 0 17 7.626 17 17a1 1 0 01-1 1zM5 21a2 2 0 100-4 2 2 0 000 4z"
			fill="#000"
		/>
	</svg>
);
export default Rss;
