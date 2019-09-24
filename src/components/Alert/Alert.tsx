import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';

import './Alert.scss';

const ALERT_TYPE_TO_ICON_MAPPING: { [type: string]: string } = {
	info: 'circle-info',
	success: 'circle-check',
	danger: 'circle-warning',
};

export interface AlertProps extends DefaultProps {
	onClose?: () => void;
	dark?: boolean;
	message?: ReactNode | string;
	type?: 'info' | 'success' | 'danger' | 'spinner';
	children?: ReactNode;
}

export const Alert: FunctionComponent<AlertProps> = ({
	className,
	onClose,
	dark = false,
	message = '',
	type = 'info',
	children = null,
}) => {
	return (
		<div className={classNames(className, 'c-alert', { 'c-alert--dark': dark })}>
			<div className="c-alert__body">
				<div className="u-spacer-right-s">
					{ALERT_TYPE_TO_ICON_MAPPING[type] ? (
						<Icon name={ALERT_TYPE_TO_ICON_MAPPING[type]} type="multicolor" />
					) : (
						<Spinner light={dark} />
					)}
				</div>
				{message || children}
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
