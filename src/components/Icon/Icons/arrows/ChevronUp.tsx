import React, { SVGProps } from 'react';
const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 16a.997.997 0 01-.707-.293L12 10.414l-5.293 5.293a.999.999 0 11-1.414-1.414l6-6a.999.999 0 011.414 0l6 6A.999.999 0 0118 16z"
			fill="#000"
		/>
	</svg>
);
export default ChevronUp;
