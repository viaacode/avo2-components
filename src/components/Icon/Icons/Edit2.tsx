import React, { SVGProps } from 'react';
const Edit2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8 22H3a1 1 0 01-1-1v-5c0-.266.105-.52.293-.707l13-13a.999.999 0 011.414 0l5 5a.999.999 0 010 1.414l-13 13A.997.997 0 018 22zm-4-2h3.586l12-12L16 4.414l-12 12V20z"
			fill="#000"
		/>
	</svg>
);
export default Edit2;
