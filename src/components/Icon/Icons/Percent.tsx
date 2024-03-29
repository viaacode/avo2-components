import React, { SVGProps } from 'react';
const Percent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M5 20a.999.999 0 01-.707-1.707l14-14a.999.999 0 111.414 1.414l-14 14A.997.997 0 015 20zM6.5 10C4.57 10 3 8.43 3 6.5S4.57 3 6.5 3 10 4.57 10 6.5 8.43 10 6.5 10zm0-5C5.673 5 5 5.673 5 6.5S5.673 8 6.5 8 8 7.327 8 6.5 7.327 5 6.5 5zM17.5 21c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"
			fill="#000"
		/>
	</svg>
);
export default Percent;
