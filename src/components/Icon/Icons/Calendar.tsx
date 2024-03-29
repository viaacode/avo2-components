import React, { SVGProps } from 'react';
const Calendar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19 23H5c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3zM5 5c-.551 0-1 .449-1 1v14c0 .552.449 1 1 1h14a1 1 0 001-1V6c0-.551-.448-1-1-1H5z"
			fill="#000"
		/>
		<path
			d="M16 7a1 1 0 01-1-1V2a1 1 0 112 0v4a1 1 0 01-1 1zM8 7a1 1 0 01-1-1V2a1 1 0 012 0v4a1 1 0 01-1 1zM21 11H3a1 1 0 010-2h18a1 1 0 110 2z"
			fill="#000"
		/>
	</svg>
);
export default Calendar;
