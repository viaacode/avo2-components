import React, { SVGProps } from 'react';
const StopCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M12 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11zm0-20c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9z"
			fill="#000"
		/>
		<path
			d="M15 16H9a1 1 0 01-1-1V9a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1zm-5-2h4v-4h-4v4z"
			fill="#000"
		/>
	</svg>
);
export default StopCircle;
