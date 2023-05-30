import React, { SVGProps } from 'react';
const DownloadCloud = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#download-cloud_svg__clip0)" fill="#000">
			<path d="M12 22a.997.997 0 01-.707-.293l-4-4a.999.999 0 111.414-1.414L12 19.586l3.293-3.293a.999.999 0 111.414 1.414l-4 4A.997.997 0 0112 22z" />
			<path d="M12 22a1 1 0 01-1-1v-9a1 1 0 012 0v9a1 1 0 01-1 1z" />
			<path d="M20.881 19.09a1 1 0 01-.576-1.819 3.973 3.973 0 001.64-2.585A4.001 4.001 0 0018.005 10h-1.264c-.457 0-.856-.309-.97-.75a7.009 7.009 0 00-8.52-5.042 6.953 6.953 0 00-4.285 3.216 6.953 6.953 0 00-.755 5.304 7.015 7.015 0 001.538 2.9 1 1 0 01-1.497 1.325 9.041 9.041 0 01-1.978-3.729 8.943 8.943 0 01.972-6.819 8.938 8.938 0 015.51-4.135C11.3 1.104 15.951 3.646 17.48 8h.525a6.004 6.004 0 015.91 7.03 5.96 5.96 0 01-2.46 3.878.996.996 0 01-.575.182z" />
		</g>
		<defs>
			<clipPath id="download-cloud_svg__clip0">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default DownloadCloud;
