import React, { SVGProps } from 'react';
const Power = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M11.995 22.998a9.967 9.967 0 01-7.072-2.925c-3.897-3.898-3.897-10.242 0-14.14a.999.999 0 111.414 1.414c-3.118 3.119-3.118 8.193 0 11.312 3.119 3.119 8.195 3.12 11.314.002 3.119-3.12 3.12-8.195.002-11.314a.999.999 0 111.414-1.414c3.897 3.899 3.896 10.244-.002 14.142a9.97 9.97 0 01-7.07 2.923z"
			fill="#000"
		/>
		<path d="M12 13a1 1 0 01-1-1V2a1 1 0 012 0v10a1 1 0 01-1 1z" fill="#000" />
	</svg>
);
export default Power;
