import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface FlexProps {
	orientation?: 'horizontal' | 'vertical';
	center?: boolean;
	justify?: boolean;
	spaced?: 'regular' | 'wide';
	children: ReactNode;
}

export const Flex: FunctionComponent<FlexProps> = ({
	orientation,
	center,
	justify,
	spaced,
	children,
}) => {
	const classes = ['o-flex'];

	let orientationClass = 'o-flex-';

	if (orientation) {
		orientationClass += `-${orientation}`;
	}

	if (center) {
		orientationClass += '-center';
	}

	if (orientationClass !== 'o-flex-') {
		classes.push(orientationClass);
	}

	if (spaced) {
		classes.push(`o-flex--spaced-${spaced}`.replace('-regular', ''));
	}

	return (
		<div
			className={classNames(...classes, {
				'o-flex--justify-between': justify,
			})}
		>
			{children}
		</div>
	);
};
