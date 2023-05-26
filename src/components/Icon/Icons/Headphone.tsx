import React, { SVGProps } from 'react';
const Headphone = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={12}
		height={12}
		viewBox="0 0 12 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M2.606 2.594a4.811 4.811 0 016.788 0A4.767 4.767 0 0110.8 5.973v.489H9.6c-.477 0-.935.194-1.273.54A1.87 1.87 0 007.8 8.308v1.846c0 .49.19.96.527 1.305.338.347.796.541 1.273.541h.6c.477 0 .935-.194 1.273-.54A1.87 1.87 0 0012 10.153V5.973a5.959 5.959 0 00-1.757-4.224A6.014 6.014 0 006 0C4.409 0 2.883.63 1.757 1.75A5.96 5.96 0 000 5.972v4.181c0 .49.19.96.527 1.305.338.347.796.541 1.273.541h.6c.477 0 .935-.194 1.273-.54a1.87 1.87 0 00.527-1.306V8.308c0-.49-.19-.96-.527-1.306a1.777 1.777 0 00-1.273-.54H1.2v-.49c0-1.266.506-2.482 1.406-3.378zM1.2 7.692V10.154c0 .163.063.32.176.435.112.115.265.18.424.18h.6c.16 0 .312-.065.424-.18A.623.623 0 003 10.154V8.308a.623.623 0 00-.176-.435.592.592 0 00-.424-.18H1.2zm9.6 0H9.6a.592.592 0 00-.424.18.623.623 0 00-.176.436v1.846c0 .163.063.32.176.435.112.115.265.18.424.18h.6c.16 0 .312-.065.424-.18a.623.623 0 00.176-.435V7.692z"
			fill="#000"
		/>
	</svg>
);
export default Headphone;
