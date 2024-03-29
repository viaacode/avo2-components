import React, { SVGProps } from 'react';
const ChevronsRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M13 18a.999.999 0 01-.707-1.707L16.586 12l-4.293-4.293a.999.999 0 111.414-1.414l5 5a.999.999 0 010 1.414l-5 5A.997.997 0 0113 18z"
			fill="#000"
		/>
		<path
			d="M6 18a.999.999 0 01-.707-1.707L9.586 12 5.293 7.707a.999.999 0 111.414-1.414l5 5a.999.999 0 010 1.414l-5 5A.997.997 0 016 18z"
			fill="#000"
		/>
	</svg>
);
export default ChevronsRight;
