import React, { SVGProps } from 'react';
const CircleInfo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"
			fill="#00C0F2"
		/>
		<path d="M13 7h-2v2h2V7zM13 11h-2v6h2v-6z" fill="#fff" />
	</svg>
);
export default CircleInfo;
