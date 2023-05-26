import React, { SVGProps } from 'react';
const List = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21 7H8a1 1 0 010-2h13a1 1 0 110 2zM21 13H8a1 1 0 010-2h13a1 1 0 110 2zM21 19H8a1 1 0 110-2h13a1 1 0 110 2zM3 7c-.06 0-.13-.01-.2-.02a.636.636 0 01-.18-.06.757.757 0 01-.18-.09c-.05-.03-.1-.08-.15-.12l-.12-.15a.757.757 0 01-.09-.18.636.636 0 01-.06-.18C2.01 6.13 2 6.06 2 6c0-.13.03-.26.08-.38s.12-.23.21-.33c.28-.27.72-.37 1.09-.21.13.05.23.12.33.21.18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15C3.52 6.89 3.26 7 3 7zM3 13c-.06 0-.13-.01-.19-.02a.603.603 0 01-.19-.06.757.757 0 01-.18-.09c-.05-.03-.1-.08-.15-.12-.18-.19-.29-.44-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.05-.04.1-.09.15-.12.06-.04.12-.07.18-.09.06-.03.12-.05.19-.06.32-.06.66.04.9.27.09.1.16.2.21.33.05.12.08.25.08.38 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15c-.19.18-.45.29-.71.29zM3 19c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21a.99.99 0 01-.21-1.09c.05-.13.12-.23.21-.33a1.035 1.035 0 011.42 0c.09.1.16.21.21.33.05.12.08.25.08.38s-.03.26-.08.38-.12.229-.21.33A.994.994 0 013 19z"
			fill="#000"
		/>
	</svg>
);
export default List;
