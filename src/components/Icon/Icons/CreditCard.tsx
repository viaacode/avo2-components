import React, { SVGProps } from 'react';
const CreditCard = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21 21H3c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM3 5c-.551 0-1 .449-1 1v12c0 .552.449 1 1 1h18a1 1 0 001-1V6c0-.551-.448-1-1-1H3z"
			fill="#000"
		/>
		<path d="M23 11H1a1 1 0 010-2h22a1 1 0 110 2z" fill="#000" />
	</svg>
);
export default CreditCard;
