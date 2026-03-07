import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

import type { DefaultProps } from '../../types';

import './Spinner.scss';

export interface SpinnerPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	size?: 'large';
	light?: boolean;
	locationId: string;
}

export const Spinner: FunctionComponent<SpinnerPropsSchema> = ({
	className,
	size,
	light = false,
	locationId,
}) => {
	return (
		<div
			className={clsx(className, 'c-spinner', {
				'c-spinner--large': size === 'large',
				'c-spinner--light': light,
			})}
			data-loaction-id={locationId}
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
