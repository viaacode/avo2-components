import React, { SVGProps } from 'react';
const MessageCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M3 22c-.3 0-.5-.1-.7-.3-.3-.3-.4-.7-.2-1l1.8-5.3c-.6-1.2-.9-2.6-.9-3.9C3 7.9 5 4.6 8.3 3c1.3-.7 2.8-1 4.2-1h.5c4.9.3 8.7 4.1 9 8.9v.6c0 1.5-.3 2.9-1 4.3-1.6 3.2-4.9 5.2-8.5 5.2-1.3 0-2.7-.3-3.9-.8L3.3 22H3zm9.5-18c-1.2 0-2.3.3-3.3.8C6.6 6.1 5 8.6 5 11.5c0 1.2.3 2.3.8 3.3.1.2.1.5.1.8l-1.3 3.8 3.8-1.3c.3-.1.5-.1.8.1 1 .5 2.2.8 3.3.8 2.9 0 5.4-1.6 6.7-4.1.5-1 .8-2.2.8-3.3V11c-.2-3.8-3.2-6.8-7.1-7h-.4z"
			fill="#000"
		/>
	</svg>
);
export default MessageCircle;
