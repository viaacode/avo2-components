import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';

const ALERT_TYPE_TO_ICON_MAPPING: { [type: string]: string } = {
	info: 'circle-info',
	success: 'circle-check',
	danger: 'circle-warning',
};

export interface AlertProps {
	close: () => void;
	dark?: boolean;
	message: ReactNode | string;
	type?: 'info' | 'success' | 'danger' | 'spinner';
}

export const Alert: FunctionComponent<AlertProps> = ({
	close = () => {},
	dark = false,
	message,
	type = 'info',
}) => {
	return (
		<div className={classNames('c-alert', { 'c-alert--dark': dark })}>
			<div className="c-alert__body">
				<div className="u-spacer-right-s">
					{ALERT_TYPE_TO_ICON_MAPPING[type] ? (
						<Icon name={ALERT_TYPE_TO_ICON_MAPPING[type]} type="multicolor" />
					) : (
						<Spinner />
					)}
				</div>
				{message}
			</div>
			<Button icon="close" type="borderless" onClick={close} />
		</div>
	);
};
