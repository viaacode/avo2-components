import React, { SVGProps } from 'react';
const Italic = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19 5h-9a1 1 0 010-2h9a1 1 0 110 2zM14 21H5a1 1 0 110-2h9a1 1 0 110 2z"
			fill="#000"
		/>
		<path
			d="M9 21a1 1 0 01-.936-1.351l6-16a1 1 0 011.873.703l-6 16A1.001 1.001 0 019 21z"
			fill="#000"
		/>
	</svg>
);
export default Italic;
