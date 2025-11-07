import type { SVGProps } from 'react';
const Pointer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={9}
		height={13}
		viewBox="0 0 9 13"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8.629 7.406L1.19.79C1.082.707.918.625.781.625a.462.462 0 00-.273.082.629.629 0 00-.383.602v10.117c0 .273.164.52.41.601a.797.797 0 00.246.055.662.662 0 00.492-.246l2.27-2.68 1.613 3.364a.617.617 0 00.848.3c.328-.164.492-.547.328-.875l-1.613-3.39H8.19a.69.69 0 00.63-.41c.081-.274.027-.547-.192-.739zm-5.195-.164l-1.997 2.38V2.757L6.47 7.242H3.434z"
			fill="#7E93A5"
		/>
	</svg>
);
export default Pointer;
