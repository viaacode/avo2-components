import React, { SVGProps } from 'react';
const VolumeX = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#volume-x_svg__clip0)" fill="#000">
			<path d="M11 20a.998.998 0 01-.625-.22L5.649 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.649l4.726-3.781A1.001 1.001 0 0112 5v14a.999.999 0 01-1 1zm-8-6h3c.227 0 .447.077.625.219l3.375 2.7V7.08l-3.375 2.7A1.001 1.001 0 016 10H3v4zM17 16a.999.999 0 01-.707-1.707l6-6a.999.999 0 111.414 1.414l-6 6A.997.997 0 0117 16z" />
			<path d="M23 16a.997.997 0 01-.707-.293l-6-6a.999.999 0 111.414-1.414l6 6A.999.999 0 0123 16z" />
		</g>
		<defs>
			<clipPath id="volume-x_svg__clip0">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default VolumeX;
