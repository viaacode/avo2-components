import React, { SVGProps } from 'react';
const Twitter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#twitter_svg__clip0)">
			<path
				d="M8.264 21.948c-2.599 0-5.262-.692-7.75-2.074a1 1 0 01-.477-1.144c.125-.447.561-.77 1.002-.73 1.705.07 3.36-.263 4.877-.966-3.716-2.292-4.678-5.533-4.79-7.99-.134-2.951.916-5.35.96-5.451a1 1 0 011.732-.168A9.64 9.64 0 0011 7.507a5.464 5.464 0 011.884-4.172 5.489 5.489 0 017.25.05 9.878 9.878 0 002.29-1.202 1 1 0 011.548 1.054 8.704 8.704 0 01-1.995 3.774c.015.16.022.323.023.486 0 5.484-2.428 10.056-6.661 12.547-2.159 1.27-4.588 1.904-7.075 1.904zM4.959 19.52c3.25.836 6.577.44 9.366-1.201C17.932 16.197 20 12.254 20 7.5a3.438 3.438 0 00-.062-.641.999.999 0 01.279-.901c.223-.22.43-.454.618-.701-.227.083-.455.16-.688.23a1.001 1.001 0 01-1.043-.301 3.482 3.482 0 00-4.909-.342A3.475 3.475 0 0013 7.517V8.53c0 .542-.432.985-.974 1a11.582 11.582 0 01-8.63-3.493C2.8 8.59 2.564 13.49 8.406 16.086a1 1 0 01.155 1.74 12.63 12.63 0 01-3.602 1.695z"
				fill="#000"
			/>
		</g>
		<defs>
			<clipPath id="twitter_svg__clip0">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default Twitter;
