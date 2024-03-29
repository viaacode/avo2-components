import React, { SVGProps } from 'react';
const Fullscreen = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
		<path
			fill="#FFF"
			fillRule="evenodd"
			d="M2.703 12.8c-.388-.39-.703-.26-.703.297v3.901A.998.998 0 003 18h3.894c.552 0 .688-.313.29-.712l-1.535-1.537L9.29 12.1a1.01 1.01 0 00-.002-1.421l.033.032a.999.999 0 00-1.42-.002L4.26 14.359l-1.557-1.56zm14.594-5.6c.388.39.703.26.703-.297V3.002A.998.998 0 0017 2h-3.894c-.552 0-.688.313-.29.712l1.535 1.537L10.71 7.9a1.01 1.01 0 00.002 1.421l-.033-.032a.999.999 0 001.42.002l3.642-3.649 1.557 1.56z"
		/>
	</svg>
);
export default Fullscreen;
