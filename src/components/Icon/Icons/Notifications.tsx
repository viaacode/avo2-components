import React, { SVGProps } from 'react';
const Notifications = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19.2 12.91h-.9V8.363C18.3 4.818 15.51 2 12 2S5.7 4.818 5.7 8.364v4.545h-.9c-.99 0-1.8.818-1.8 1.818v1.819c0 1 .81 1.818 1.8 1.818h3.6c0 2 1.62 3.636 3.6 3.636s3.6-1.636 3.6-3.636h3.6c.99 0 1.8-.819 1.8-1.819v-1.818c0-1-.81-1.818-1.8-1.818zM7.5 8.363c0-2.546 1.98-4.546 4.5-4.546s4.5 2 4.5 4.546v4.545h-9V8.364zM12 20.182c-.99 0-1.8-.818-1.8-1.818h3.6c0 1-.81 1.818-1.8 1.818zm7.2-3.636H4.8v-1.819h14.4v1.819z"
			fill="#000"
		/>
	</svg>
);
export default Notifications;
