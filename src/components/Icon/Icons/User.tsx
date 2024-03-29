import React, { SVGProps } from 'react';
const User = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M20 22a1 1 0 01-1-1v-2c0-1.654-1.346-3-3-3H8c-1.654 0-3 1.346-3 3v2a1 1 0 11-2 0v-2c0-2.757 2.243-5 5-5h8c2.757 0 5 2.243 5 5v2a1 1 0 01-1 1zM12 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
			fill="#000"
		/>
	</svg>
);
export default User;
