import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import './Spinner.scss';

export interface SpinnerPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	size?: 'large';
	light?: boolean;
}

export const Spinner: FunctionComponent<SpinnerPropsSchema> = ({
	className,
	size,
	light = false,
}) => {
	return (
		<div
			className={clsx(className, 'c-spinner', {
				'c-spinner--large': size === 'large',
				'c-spinner--light': light,
			})}
		>
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
			<div className="c-spinner__bar" />
		</div>
	);
};
