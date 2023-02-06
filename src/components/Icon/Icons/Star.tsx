import React, { SVGProps } from 'react';

const Star = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M18.18 22.02c-.159 0-.319-.038-.466-.115L12 18.899l-5.715 3.005a1 1 0 01-1.451-1.054l1.091-6.361-4.623-4.503a1 1 0 01.553-1.705l6.391-.935 2.857-5.79c.337-.682 1.456-.682 1.793 0l2.857 5.79 6.391.935a1 1 0 01.553 1.706l-4.623 4.503 1.091 6.36a1.002 1.002 0 01-.985 1.17zM4.148 9.966l3.55 3.457a1 1 0 01.287.886l-.838 4.883 4.387-2.307a.996.996 0 01.931 0l4.386 2.307-.837-4.883a1.002 1.002 0 01.288-.886l3.549-3.457-4.906-.717a1 1 0 01-.752-.547L12 4.259 9.807 8.702a.998.998 0 01-.752.547l-4.907.717z"
			fill="#000"
		/>
	</svg>
);

export default Star;
