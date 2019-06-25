import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface SpacerProps {
	margin?: (
		| 'small'
		| 'large'
		| 'left-small'
		| 'left'
		| 'left-large'
		| 'top-small'
		| 'top'
		| 'top-large'
		| 'right-small'
		| 'right'
		| 'right-large'
		| 'bottom-small'
		| 'bottom'
		| 'bottom-large')[];
	children?: ReactNode;
}

const abbreviateSizes = (input: string): string => {
	return input.replace('large', 'l').replace('small', 's');
};

export const Spacer: FunctionComponent<SpacerProps> = ({ margin, children }: SpacerProps) => {
	let classes: string[] = ['u-spacer'];

	if (margin) {
		classes = margin.map(value => `u-spacer-${abbreviateSizes(value)}`);
	}

	return <div className={classNames(...classes)}>{children}</div>;
};
