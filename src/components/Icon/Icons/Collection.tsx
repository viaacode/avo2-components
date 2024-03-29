import React, { SVGProps } from 'react';
const Collection = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M10 11H3a1 1 0 01-1-1V3a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1zM4 9h5V4H4v5zM21 11h-7a1 1 0 01-1-1V3a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1zm-6-2h5V4h-5v5zM21 22h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1zm-6-2h5v-5h-5v5zM10 22H3a1 1 0 01-1-1v-7a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1zm-6-2h5v-5H4v5z"
			fill="#000"
		/>
	</svg>
);
export default Collection;
