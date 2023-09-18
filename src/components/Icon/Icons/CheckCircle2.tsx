import React, { SVGProps } from 'react';
const CheckCircle2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={16}
		height={16}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7.594 10.625a.849.849 0 01-1.219 0l-2-2a.85.85 0 010-1.219.85.85 0 011.219 0L7 8.781l3.375-3.375a.85.85 0 011.219 0 .85.85 0 010 1.219l-4 4zM16 8c0 4.438-3.594 8-8 8-4.438 0-8-3.563-8-8 0-4.406 3.563-8 8-8 4.406 0 8 3.594 8 8zM8 1.5C4.406 1.5 1.5 4.438 1.5 8c0 3.594 2.906 6.5 6.5 6.5 3.563 0 6.5-2.906 6.5-6.5 0-3.563-2.938-6.5-6.5-6.5z"
			fill="#31DB42"
		/>
	</svg>
);
export default CheckCircle2;
