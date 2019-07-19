import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

export interface SpinnerProps {
	size?: 'large';
	dark?: boolean;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ size, dark = true }: SpinnerProps) => {
	let colorStyle = {};
	if (!dark) {
		colorStyle = { background: 'rgba(255, 255, 255, 0.8)' };
	}
	return (
		<div className={classNames('c-spinner', { 'c-spinner--large': size === 'large' })}>
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
			<div className="c-spinner__bar" style={colorStyle} />
		</div>
	);
};
