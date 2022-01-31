import React, { SVGProps } from 'react';

const UserTeacher = (props: SVGProps<SVGSVGElement>) => (
	<svg width={16} height={18} viewBox="0 0 16 18" fill="none" {...props}>
		<path
			d="M10.71 4.014c0 1.64-1.372 3.013-3.119 3.013s-3.12-1.373-3.12-3.013S5.845 1 7.592 1s3.12 1.374 3.12 3.014z"
			fill="#fff"
			stroke="#2B414F"
			strokeWidth={2}
		/>
		<path
			d="M1 16.477v-2.59a4 4 0 014-4h5.182a4 4 0 014 4v2.59"
			stroke="#2B414F"
			strokeWidth={2}
			strokeLinecap="round"
		/>
		<path
			d="M5.943 10.357v4.05a.5.5 0 00.124.329l1.148 1.311a.5.5 0 00.752 0l1.148-1.312a.5.5 0 00.124-.329v-4.52"
			stroke="#2B414F"
			strokeWidth={2}
			strokeLinecap="round"
		/>
	</svg>
);

export default UserTeacher;
