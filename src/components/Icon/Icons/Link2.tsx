import React, { SVGProps } from 'react';
const Link2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 18h-3a1 1 0 110-2h3c2.206 0 4-1.794 4-4s-1.794-4-4-4h-3a1 1 0 110-2h3c3.309 0 6 2.691 6 6s-2.691 6-6 6zm-9 0H6c-3.309 0-6-2.691-6-6s2.691-6 6-6h3a1 1 0 010 2H6c-2.206 0-4 1.794-4 4s1.794 4 4 4h3a1 1 0 110 2z"
			fill="#000"
		/>
		<path d="M16 13H8a1 1 0 010-2h8a1 1 0 110 2z" fill="#000" />
	</svg>
);
export default Link2;
