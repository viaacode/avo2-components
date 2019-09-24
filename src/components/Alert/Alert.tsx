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
	close: () => void;
	dark?: boolean;
	message: ReactNode | string;
	type?: 'info' | 'success' | 'danger' | 'spinner';
}

export const Alert: FunctionComponent<AlertProps> = ({
	className,
	close = () => {},
	dark = false,
	message,
	type = 'info',
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
				{message}
			</div>
			<Button icon="close" type={dark ? 'borderless-i' : 'borderless'} onClick={close} />
		</div>
	);
};
