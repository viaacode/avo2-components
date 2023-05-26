import React, { SVGProps } from 'react';
const Edit = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 23H4c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h5.34a1 1 0 010 2H4c-.551 0-1 .449-1 1v14c0 .552.449 1 1 1h14a1 1 0 001-1v-5.34a1 1 0 112 0V20c0 1.654-1.346 3-3 3z"
			fill="#000"
		/>
		<path
			d="M12 17H8a1 1 0 01-1-1v-4c0-.265.105-.52.293-.707l10-10a.999.999 0 011.414 0l4 4a.999.999 0 010 1.414l-10 10A.997.997 0 0112 17zm-3-2h2.586l9-9L18 3.414l-9 9V15z"
			fill="#000"
		/>
	</svg>
);
export default Edit;
