import React, { SVGProps } from 'react';
const SkipBack = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M19 21a.998.998 0 01-.625-.219l-10-8a1 1 0 010-1.562l10-8c.3-.24.711-.286 1.059-.12.345.166.566.517.566.901v16a1.001 1.001 0 01-1 1zm-8.399-9L18 17.92V6.08l-7.399 5.92zM5 20a1 1 0 01-1-1V5a1 1 0 012 0v14a1 1 0 01-1 1z"
			fill="#000"
		/>
	</svg>
);
export default SkipBack;
