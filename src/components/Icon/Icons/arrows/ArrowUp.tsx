import React, { SVGProps } from 'react';
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M12 20a1 1 0 01-1-1V5a1 1 0 012 0v14a1 1 0 01-1 1z" fill="#000" />
		<path
			d="M19 13a.997.997 0 01-.707-.293L12 6.414l-6.293 6.293a.999.999 0 11-1.414-1.414l7-7a.999.999 0 011.414 0l7 7A.999.999 0 0119 13z"
			fill="#000"
		/>
	</svg>
);
export default ArrowUp;
