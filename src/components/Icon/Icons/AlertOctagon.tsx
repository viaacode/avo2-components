import React, { SVGProps } from 'react';

const AlertOctagon = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M16.14 23H7.86a.997.997 0 01-.707-.293l-5.86-5.86A1 1 0 011 16.14V7.86c0-.265.105-.52.293-.707l5.86-5.86A.997.997 0 017.86 1h8.28c.266 0 .52.105.707.293l5.86 5.86A.997.997 0 0123 7.86v8.28c0 .266-.105.52-.293.707l-5.86 5.86a1 1 0 01-.707.293zm-7.866-2h7.452L21 15.726V8.274L15.726 3H8.274L3 8.274v7.452L8.274 21z"
			fill="#000"
		/>
		<path
			d="M12 13a1 1 0 01-1-1V8a1 1 0 012 0v4a1 1 0 01-1 1zM12 17c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21a.99.99 0 01-.21-1.09c.05-.12.12-.23.21-.33.1-.09.2-.16.33-.21a.991.991 0 01.76 0c.13.05.23.12.33.21.09.1.16.21.21.33a.995.995 0 01-.21 1.09.994.994 0 01-.71.29z"
			fill="#000"
		/>
	</svg>
);

export default AlertOctagon;
