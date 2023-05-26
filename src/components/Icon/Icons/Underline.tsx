import React, { SVGProps } from 'react';
const Underline = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M12 17c-3.86 0-7-3.141-7-7V3a1 1 0 012 0v7c0 2.757 2.243 5 5 5s5-2.243 5-5V3a1 1 0 112 0v7c0 3.859-3.141 7-7 7zM20 22H4a1 1 0 110-2h16a1 1 0 110 2z"
			fill="#000"
		/>
	</svg>
);
export default Underline;
