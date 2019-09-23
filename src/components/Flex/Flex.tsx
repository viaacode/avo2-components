import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

import './Flex.scss';

export interface FlexProps extends DefaultProps {
	align?: 'start' | 'baseline';
	center?: boolean;
	children: ReactNode;
	justify?: 'around' | 'between' | 'end';
	orientation?: 'horizontal' | 'vertical';
	spaced?: 'regular' | 'wide';
	wrap?: boolean;
}

export const Flex: FunctionComponent<FlexProps> = ({
	align,
	center,
	children,
	className,
	justify,
	orientation,
	spaced,
	wrap,
}) => {
	let orientationClass = '';

	if (orientation) {
		orientationClass += `-${orientation}`;
	}

	if (center) {
		orientationClass += '-center';
	}

	const classes = [
		'o-flex',
		!!orientationClass && `o-flex--${orientationClass}`,
		!!align && `o-flex--align-${align}`,
		!!spaced && `o-flex--spaced-${spaced}`.replace('-regular', ''),
	];

	return (
		<div
			className={classNames(className, ...classes, {
				'o-flex--justify-between': justify,
				'o-flex--wrap': wrap,
			})}
		>
			{children}
		</div>
	);
};
