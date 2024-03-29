import React, { SVGProps } from 'react';
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M19 13H5a1 1 0 010-2h14a1 1 0 110 2z" fill="#000" />
		<path
			d="M12 20a.999.999 0 01-.707-1.707L17.586 12l-6.293-6.293a.999.999 0 111.414-1.414l7 7a.999.999 0 010 1.414l-7 7A.997.997 0 0112 20z"
			fill="#000"
		/>
	</svg>
);
export default ArrowRight;
