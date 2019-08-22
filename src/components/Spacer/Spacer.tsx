import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

type SpacerMarginOption =
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
	| 'bottom-large';

export interface SpacerProps extends DefaultProps {
	margin?: SpacerMarginOption | SpacerMarginOption[];
	children?: ReactNode;
}

const abbreviateSizes = (input: string): string => {
	return input.replace('large', 'l').replace('small', 's');
};

export const Spacer: FunctionComponent<SpacerProps> = ({
	margin,
	children,
	className,
}: SpacerProps) => {
	let classes: string[] = [];

	if (margin) {
		const margins = typeof margin === 'string' ? [margin] : margin;

		classes = margins.map((option: SpacerMarginOption) => `u-spacer-${abbreviateSizes(option)}`);
	}

	return (
		<div className={classNames(className, { 'u-spacer': !margin }, ...classes)}>{children}</div>
	);
};
