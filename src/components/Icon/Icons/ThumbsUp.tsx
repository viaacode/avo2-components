import React, { SVGProps } from 'react';
const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18.304 23H4c-1.654 0-3-1.346-3-3v-7c0-1.654 1.346-3 3-3h2.35l3.736-8.406C10.247 1.233 10.605 1 11 1c2.206 0 4 1.794 4 4v3h4.66a2.988 2.988 0 012.439 1.221c.476.646.671 1.437.55 2.229l-1.38 9.001A3.013 3.013 0 0118.304 23zM8 21h10.292c.502 0 .926-.363 1-.85l1.38-9.002a.988.988 0 00-.184-.741.995.995 0 00-.814-.407H14a1 1 0 01-1-1V5c0-.891-.585-1.647-1.392-1.906L8 11.212V21zm-4-9c-.551 0-1 .449-1 1v7c0 .552.449 1 1 1h2v-9H4z"
			fill="#000"
		/>
	</svg>
);
export default ThumbsUp;
