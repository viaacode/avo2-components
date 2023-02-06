import React, { SVGProps } from 'react';
const CheckSquare = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M12 15a.997.997 0 01-.707-.293l-3-3a.999.999 0 111.414-1.414L12 12.586l9.293-9.293a.999.999 0 111.414 1.414l-10 10A.997.997 0 0112 15z"
			fill="#000"
		/>
		<path
			d="M19 22H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h11a1 1 0 110 2H5c-.551 0-1 .449-1 1v14c0 .552.449 1 1 1h14a1 1 0 001-1v-7a1 1 0 112 0v7c0 1.654-1.346 3-3 3z"
			fill="#000"
		/>
	</svg>
);
export default CheckSquare;
