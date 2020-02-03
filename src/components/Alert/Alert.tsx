import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/Icon.types';
import { Spinner } from '../Spinner/Spinner';

import { AlertProps, AlertTypeWithIcon } from './Alert.types';

import './Alert.scss';

const ALERT_TYPE_TO_ICON_MAPPING: { [type in AlertTypeWithIcon]: IconName } = {
	info: 'circle-info',
	success: 'circle-check',
	danger: 'circle-warning',
};

export const Alert: FunctionComponent<AlertProps> = ({
	children,
	className,
	dark = false,
	message = '',
	onClose,
	type = 'info',
}) => {
	return (
		<div
			className={classnames(className, 'c-alert', {
				'c-alert--dark': dark,
				[`c-alert--${type}`]: type,
			})}
		>
			<div className="c-alert__body">
				{type === 'spinner' ? (
					<Spinner light={dark} />
				) : (
					<Icon name={ALERT_TYPE_TO_ICON_MAPPING[type]} type="multicolor" />
				)}
				<div className="c-alert__message">{message || children}</div>
			</div>
			{!!onClose && (
				<Button
					icon="close"
					type={dark ? 'borderless-i' : 'borderless'}
					onClick={onClose || (() => {})}
				/>
			)}
		</div>
	);
};
