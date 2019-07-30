import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import './Spinner.css';

export interface SpinnerProps {
	size?: 'large';
	light?: boolean;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ size, light = false }) => {
	return (
		<div
			className={classNames('c-spinner', {
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
