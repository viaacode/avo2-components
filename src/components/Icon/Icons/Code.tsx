import React, { SVGProps } from 'react';
const Code = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M16 19a.999.999 0 01-.707-1.707L20.586 12l-5.293-5.293a.999.999 0 111.414-1.414l6 6a.999.999 0 010 1.414l-6 6A.997.997 0 0116 19zM8 19a.997.997 0 01-.707-.293l-6-6a.999.999 0 010-1.414l6-6a.999.999 0 111.414 1.414L3.414 12l5.293 5.293A.999.999 0 018 19z"
			fill="#000"
		/>
	</svg>
);
export default Code;
