import React, { SVGProps } from 'react';
const CloseCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={16}
		height={16}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M5.469 5.469a.736.736 0 011.031 0l1.469 1.5 1.5-1.5a.736.736 0 011.031 0c.313.312.313.781 0 1.062L9.031 8 10.5 9.469c.313.312.313.781 0 1.062a.684.684 0 01-1.031 0l-1.5-1.469-1.469 1.47a.684.684 0 01-1.031 0c-.313-.282-.313-.75 0-1.063L6.937 8 5.47 6.531c-.313-.281-.313-.75 0-1.062zM16 8c0 4.438-3.594 8-8 8-4.438 0-8-3.563-8-8 0-4.406 3.563-8 8-8 4.406 0 8 3.594 8 8zM8 1.5C4.406 1.5 1.5 4.438 1.5 8c0 3.594 2.906 6.5 6.5 6.5 3.563 0 6.5-2.906 6.5-6.5 0-3.563-2.938-6.5-6.5-6.5z"
			fill="#5C778F"
		/>
	</svg>
);
export default CloseCircle;