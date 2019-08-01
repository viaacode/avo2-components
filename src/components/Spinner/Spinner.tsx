import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import './Spinner.css';

export interface SpinnerProps extends DefaultProps {
	size?: 'large';
	light?: boolean;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ className, size, light = false }) => {
	return (
		<div
			className={classNames(className, 'c-spinner', {
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
