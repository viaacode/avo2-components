import React, { SVGProps } from 'react';
const Users = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#users_svg__clip0)" fill="#000">
			<path d="M17 22a1 1 0 01-1-1v-2c0-1.654-1.346-3-3-3H5c-1.654 0-3 1.346-3 3v2a1 1 0 11-2 0v-2c0-2.757 2.243-5 5-5h8c2.757 0 5 2.243 5 5v2a1 1 0 01-1 1zM9 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8C7.346 4 6 5.346 6 7s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM23 22a1 1 0 01-1-1v-2a3 3 0 00-2.25-2.902 1 1 0 01.5-1.936A5 5 0 0124 18.999v2a1 1 0 01-1 1zM15.999 11.88a1 1 0 01-.247-1.969 2.997 2.997 0 002.162-2.162 3.003 3.003 0 00-2.162-3.65 1.001 1.001 0 01.496-1.938 5.007 5.007 0 013.604 6.084 5 5 0 01-3.604 3.604 1.017 1.017 0 01-.249.031z" />
		</g>
		<defs>
			<clipPath id="users_svg__clip0">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default Users;
