import React, { SVGProps } from 'react';
const Rewind = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M11 20a.996.996 0 01-.614-.211l-9-7a1 1 0 010-1.579l9-7a1.005 1.005 0 011.053-.109c.343.169.561.517.561.899v14a1 1 0 01-1 1zm-7.371-8L10 16.955V7.044L3.629 12z"
			fill="#000"
		/>
		<path
			d="M22 20a.996.996 0 01-.614-.211l-9-7a1 1 0 010-1.58l9-6.999c.303-.234.71-.276 1.054-.109.342.169.56.517.56.899v14a1 1 0 01-1 1zm-7.371-8L21 16.955V7.044L14.629 12z"
			fill="#000"
		/>
	</svg>
);
export default Rewind;
