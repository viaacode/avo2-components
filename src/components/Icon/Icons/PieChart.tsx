import React, { SVGProps } from 'react';
const PieChart = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M11.984 22.995a10.92 10.92 0 01-4.268-.868c-5.587-2.362-8.21-8.829-5.848-14.416A10.956 10.956 0 017.6 1.914a.999.999 0 11.8 1.833A8.96 8.96 0 003.71 8.49c-1.933 4.57.214 9.861 4.785 11.795 4.572 1.932 9.86-.215 11.794-4.785a1 1 0 011.842.78c-1.773 4.192-5.858 6.715-10.147 6.715z"
			fill="#000"
		/>
		<path
			d="M22 13H12a1 1 0 01-1-1V2a1 1 0 011-1c6.065 0 11 4.935 11 11a1 1 0 01-1 1zm-9-2h7.944A9.018 9.018 0 0013 3.055V11z"
			fill="#000"
		/>
	</svg>
);
export default PieChart;
