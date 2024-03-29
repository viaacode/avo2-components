import React, { SVGProps } from 'react';
const Volume1 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M11 20a.998.998 0 01-.625-.22L5.649 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.649l4.726-3.781A1.001 1.001 0 0112 5v14a.999.999 0 01-1 1zm-8-6h3c.227 0 .447.077.625.219l3.375 2.7V7.08l-3.375 2.7A1.001 1.001 0 016 10H3v4zM15.54 16.53a.999.999 0 01-.707-1.707 4.005 4.005 0 000-5.656.999.999 0 111.414-1.414 6.006 6.006 0 010 8.484.993.993 0 01-.707.293z"
			fill="#000"
		/>
	</svg>
);
export default Volume1;
