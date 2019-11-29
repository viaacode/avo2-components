import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';

import './Spacer.scss';

type SpacerMarginOption =
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
	margin?: SpacerMarginOption | SpacerMarginOption[];
	children?: ReactNode;
}

const abbreviateSizes = (input: string): string => {
	return input
		.replace('large', 'l')
		.replace('extra-', 'x')
		.replace('small', 's');
};

export const Spacer: FunctionComponent<SpacerProps> = ({ margin, children, className }) => {
	let classes: string[] = [];

	if (margin) {
		const margins = typeof margin === 'string' ? [margin] : margin;

		classes = margins.map((option: SpacerMarginOption) => `u-spacer-${abbreviateSizes(option)}`);
	}

	return (
		<div className={classNames(className, { 'u-spacer': !margin }, ...classes)}>{children}</div>
	);
};
