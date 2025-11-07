import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps, Orientation } from '../../types/index.js';

import './Flex.scss';

export interface FlexPropsSchema extends DefaultProps {
	align?: 'start' | 'baseline';
	center?: boolean;
	children: ReactNode;
	justify?: 'around' | 'between' | 'end';
	orientation?: Orientation;
	spaced?: 'regular' | 'wide';
	wrap?: boolean;
}

export const Flex: FunctionComponent<FlexPropsSchema> = ({
	align,
	center,
	children,
	className,
	justify,
	orientation,
	spaced,
	wrap,
	style,
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
		!!orientationClass && `o-flex-${orientationClass}`,
		!!align && `o-flex--align-${align}`,
		!!spaced && `o-flex--spaced-${spaced}`.replace('-regular', ''),
	];

	return (
		<div
			className={clsx(className, ...classes, {
				[`o-flex--justify-${justify}`]: justify,
				'o-flex--wrap': wrap,
			})}
			style={style}
		>
			{children}
		</div>
	);
};
