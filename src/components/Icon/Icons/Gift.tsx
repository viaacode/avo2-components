import React, { SVGProps } from 'react';
const Gift = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M20 23H4a1 1 0 01-1-1V12a1 1 0 012 0v9h14v-9a1 1 0 112 0v10a1 1 0 01-1 1z"
			fill="#000"
		/>
		<path
			d="M22 13H2a1 1 0 01-1-1V7a1 1 0 011-1h20a1 1 0 011 1v5a1 1 0 01-1 1zM3 11h18V8H3v3z"
			fill="#000"
		/>
		<path d="M12 23a1 1 0 01-1-1V7a1 1 0 012 0v15a1 1 0 01-1 1z" fill="#000" />
		<path
			d="M12 8H7.5C5.57 8 4 6.43 4 4.5S5.57 1 7.5 1c4.271 0 5.433 5.567 5.48 5.804A.998.998 0 0112 8zM7.5 3C6.673 3 6 3.673 6 4.5S6.673 6 7.5 6h3.154C10.183 4.759 9.213 3 7.5 3z"
			fill="#000"
		/>
		<path
			d="M16.5 8H12a.998.998 0 01-.98-1.196C11.067 6.567 12.23 1 16.5 1 18.43 1 20 2.57 20 4.5S18.43 8 16.5 8zm-3.154-2H16.5c.827 0 1.5-.673 1.5-1.5S17.327 3 16.5 3c-1.713 0-2.684 1.759-3.154 3z"
			fill="#000"
		/>
	</svg>
);
export default Gift;
