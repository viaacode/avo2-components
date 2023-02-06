import React, { SVGProps } from 'react';

const Upload = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M19 22H5c-1.654 0-3-1.346-3-3v-4a1 1 0 112 0v4c0 .552.449 1 1 1h14a1 1 0 001-1v-4a1 1 0 112 0v4c0 1.654-1.346 3-3 3zM17 9a.997.997 0 01-.707-.293L12 4.414 7.707 8.707a.999.999 0 11-1.414-1.414l5-5a.999.999 0 011.414 0l5 5A.999.999 0 0117 9z"
			fill="#000"
		/>
		<path d="M12 16a1 1 0 01-1-1V3a1 1 0 012 0v12a1 1 0 01-1 1z" fill="#000" />
	</svg>
);

export default Upload;
