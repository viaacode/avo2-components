import React, { SVGProps } from 'react';
const Inbox = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M14 16h-4c-.334 0-.646-.167-.832-.445L7.465 13H2a1 1 0 010-2h6c.334 0 .646.167.832.445L10.535 14h2.93l1.703-2.555c.186-.278.498-.445.832-.445h6a1 1 0 110 2h-5.465l-1.703 2.555A1.001 1.001 0 0114 16z"
			fill="#000"
		/>
		<path
			d="M20 21H4c-1.654 0-3-1.346-3-3v-6c0-.155.036-.309.106-.448l3.45-6.889A2.982 2.982 0 017.24 3h9.52a2.986 2.986 0 012.686 1.665l3.449 6.888c.069.138.105.292.105.447v6c0 1.654-1.346 3-3 3zM3 12.236V18c0 .552.449 1 1 1h16a1 1 0 001-1v-5.764l-3.345-6.679A.994.994 0 0016.759 5H7.24a.993.993 0 00-.894.555l-.001.003L3 12.236zM5.45 5.11h.01-.01z"
			fill="#000"
		/>
	</svg>
);
export default Inbox;
