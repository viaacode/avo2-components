import React, { SVGProps } from 'react';
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
			d="M12 20a.997.997 0 01-.707-.293l-7-7a.999.999 0 111.414-1.414L12 17.586l6.293-6.293a.999.999 0 111.414 1.414l-7 7A.997.997 0 0112 20z"
			fill="#000"
		/>
	</svg>
);
export default ArrowDown;
