import React, { SVGProps } from 'react';
const AlertCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M12 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11zm0-20c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9z"
			fill="#000"
		/>
		<path
			d="M12 13a1 1 0 01-1-1V8a1 1 0 012 0v4a1 1 0 01-1 1zM12 17c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21a.99.99 0 01-.21-1.09c.05-.12.12-.23.21-.33.1-.09.2-.16.33-.21a.991.991 0 01.76 0c.13.05.23.12.33.21.09.1.16.21.21.33a.995.995 0 01-.21 1.09.994.994 0 01-.71.29z"
			fill="#000"
		/>
	</svg>
);
export default AlertCircle;
