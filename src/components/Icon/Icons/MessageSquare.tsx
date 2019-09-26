import React, { SVGProps } from 'react';
export const MessageSquare = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M3 22c-.1 0-.3 0-.4-.1-.4-.1-.6-.5-.6-.9V5c0-1.7 1.3-3 3-3h14c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7.4l-3.7 3.7c-.2.2-.4.3-.7.3zM5 4c-.6 0-1 .4-1 1v13.6l2.3-2.3c.2-.2.4-.3.7-.3h12c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5z"
			fill="#000"
		/>
	</svg>
);
