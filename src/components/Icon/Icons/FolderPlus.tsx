import React, { SVGProps } from 'react';
const FolderPlus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M20 22H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h5c.334 0 .646.167.832.445L11.535 5H20c1.654 0 3 1.346 3 3v11c0 1.654-1.346 3-3 3zM4 4c-.551 0-1 .449-1 1v14c0 .552.449 1 1 1h16a1 1 0 001-1V8c0-.551-.448-1-1-1h-9c-.334 0-.646-.167-.832-.445L8.465 4H4z"
			fill="#000"
		/>
		<path d="M12 18a1 1 0 01-1-1v-6a1 1 0 012 0v6a1 1 0 01-1 1z" fill="#000" />
		<path d="M15 15H9a1 1 0 110-2h6a1 1 0 110 2z" fill="#000" />
	</svg>
);
export default FolderPlus;
