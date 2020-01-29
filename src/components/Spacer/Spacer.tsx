import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../types';

import './Spacer.scss';

type SpacerOption =
	| 'small'
	| 'large'
	| 'extra-large'
	| 'left-small'
	| 'left'
	| 'left-large'
	| 'left-extra-large'
	| 'top-small'
	| 'top'
	| 'top-large'
	| 'top-extra-large'
	| 'right-small'
	| 'right'
	| 'right-large'
	| 'right-extra-large'
	| 'bottom-small'
	| 'bottom'
	| 'bottom-large'
	| 'bottom-extra-large';

export interface SpacerProps extends DefaultProps {
	children?: ReactNode;
	margin?: SpacerOption | SpacerOption[];
	padding?: SpacerOption | SpacerOption[];
}

const abbreviateSizes = (input: string): string => {
	return input
		.replace('large', 'l')
		.replace('extra-', 'x')
		.replace('small', 's');
};

const spacersToClasses = (
	spacer: SpacerOption | SpacerOption[] = [],
	classPrefix: string
): string[] => {
	const spacerArray = Array.isArray(spacer) ? spacer : [spacer];

	return spacerArray.map(option => `${classPrefix}-${abbreviateSizes(option)}`);
};

export const Spacer: FunctionComponent<SpacerProps> = ({
	children,
	className,
	margin,
	padding,
}) => {
	const marginClasses = spacersToClasses(margin, 'u-spacer');
	const paddingClasses = spacersToClasses(padding, 'u-padding');

	return (
		<div
			className={classnames(
				className,
				{ 'u-spacer': !margin && !padding },
				marginClasses,
				paddingClasses
			)}
		>
			{children}
		</div>
	);
};
