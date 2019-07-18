import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';
import { AlertComponentPropsWithStyle } from 'react-alert';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';

const ALERT_TYPE_TO_ICON_MAPPING: { [type: string]: string } = {
	info: 'circle-info',
	success: 'circle-check',
	danger: 'circle-warning',
};

export interface AlertProps {
	id: string;
	options: {
		type: 'info' | 'success' | 'danger' | 'spinner';
		dark: boolean;
	};
	message: ReactNode | string;
	close: () => void;
}

export const Alert: FunctionComponent<AlertProps> = ({
	id,
	message,
	options,
	close = () => {},
}: AlertProps) => {
	return (
		<div className={classNames('c-alert', { 'c-alert--dark': options.dark })} id={id}>
			<div className="c-alert__body">
				<div className="u-spacer-right-s">
					{ALERT_TYPE_TO_ICON_MAPPING[options.type] && (
						<Icon name={ALERT_TYPE_TO_ICON_MAPPING[options.type]} />
					)}
					{!ALERT_TYPE_TO_ICON_MAPPING[options.type] && <Spinner />}
				</div>
				{message}
			</div>
			<Button icon="close" type="borderless" onClick={close} />
		</div>
	);
};
