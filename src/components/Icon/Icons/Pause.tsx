import type { SVGProps } from 'react';
const Pause = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M10 21H6a1 1 0 01-1-1V4a1 1 0 011-1h4a1 1 0 011 1v16a1 1 0 01-1 1zm-3-2h2V5H7v14zM18 21h-4a1 1 0 01-1-1V4a1 1 0 011-1h4a1 1 0 011 1v16a1 1 0 01-1 1zm-3-2h2V5h-2v14z"
			fill="#000"
		/>
	</svg>
);
export default Pause;
