import type { SVGProps } from 'react';
const CaretLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fill="#000" d="M14.5 7.5v10l-5-5z" fillRule="evenodd" />
	</svg>
);
export default CaretLeft;
