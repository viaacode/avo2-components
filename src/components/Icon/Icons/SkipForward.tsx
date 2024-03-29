import React, { SVGProps } from 'react';
const SkipForward = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M5 21a.999.999 0 01-1-1V4a.999.999 0 011.625-.78l10 8a.997.997 0 010 1.561l-10 8A.998.998 0 015 21zM6 6.081v11.838L13.399 12 6 6.081zM19 20a1 1 0 01-1-1V5a1 1 0 112 0v14a1 1 0 01-1 1z"
			fill="#000"
		/>
	</svg>
);
export default SkipForward;
