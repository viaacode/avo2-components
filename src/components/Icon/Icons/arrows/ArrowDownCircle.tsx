import React, { SVGProps } from 'react';
const ArrowDownCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M12 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11zm0-20c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9z"
			fill="#000"
		/>
		<path
			d="M12 17a.997.997 0 01-.707-.293l-4-4a.999.999 0 111.414-1.414L12 14.586l3.293-3.293a.999.999 0 111.414 1.414l-4 4A.997.997 0 0112 17z"
			fill="#000"
		/>
		<path d="M12 17a1 1 0 01-1-1V8a1 1 0 012 0v8a1 1 0 01-1 1z" fill="#000" />
	</svg>
);
export default ArrowDownCircle;
