import React, { SVGProps } from 'react';

const Type = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M20 8a1 1 0 01-1-1V5H5v2a1 1 0 01-2 0V4a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 01-1 1zM15 21H9a1 1 0 110-2h6a1 1 0 110 2z"
			fill="#000"
		/>
		<path d="M12 21a1 1 0 01-1-1V4a1 1 0 012 0v16a1 1 0 01-1 1z" fill="#000" />
	</svg>
);

export default Type;
