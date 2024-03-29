import React, { SVGProps } from 'react';
const Camera = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21 22H3c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h3.465l1.703-2.555C8.354 2.167 8.666 2 9 2h6c.334 0 .646.167.832.445L17.535 5H21c1.654 0 3 1.346 3 3v11c0 1.654-1.346 3-3 3zM3 7c-.551 0-1 .449-1 1v11c0 .552.449 1 1 1h18a1 1 0 001-1V8c0-.551-.448-1-1-1h-4c-.334 0-.646-.167-.832-.445L14.465 4h-4.93L7.832 6.555A1.001 1.001 0 017 7H3z"
			fill="#000"
		/>
		<path
			d="M12 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
			fill="#000"
		/>
	</svg>
);
export default Camera;
