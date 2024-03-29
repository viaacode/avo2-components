import React, { SVGProps } from 'react';
const Globe = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M22 13H2a1 1 0 010-2h20a1 1 0 110 2z" fill="#000" />
		<path
			d="M12 23a1 1 0 01-.738-.325A16.299 16.299 0 017 12.021a16.316 16.316 0 014.262-10.695.997.997 0 011.476 0A16.291 16.291 0 0117 11.979a16.318 16.318 0 01-4.262 10.696A1 1 0 0112 23zm0-19.449a14.293 14.293 0 00-3 8.47 14.26 14.26 0 003 8.428 14.285 14.285 0 003-8.47 14.246 14.246 0 00-3-8.428z"
			fill="#000"
		/>
	</svg>
);
export default Globe;
