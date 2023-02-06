import React, { SVGProps } from 'react';
const Menu = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zM21 7H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zM21 19H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"
			fill="#000"
		/>
	</svg>
);
export default Menu;
