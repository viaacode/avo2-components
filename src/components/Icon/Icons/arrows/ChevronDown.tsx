import React, { SVGProps } from 'react';

const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M12 16a.997.997 0 01-.707-.293l-6-6a.999.999 0 111.414-1.414L12 13.586l5.293-5.293a.999.999 0 111.414 1.414l-6 6A.997.997 0 0112 16z"
			fill="#000"
		/>
	</svg>
);

export default ChevronDown;
