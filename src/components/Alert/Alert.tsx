import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { convertToHtml } from '../../helpers/convertToHtml';
import { DefaultProps } from '../../types';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/types';
import { Spacer } from '../Spacer/Spacer';
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

// TODO: Check if component can be written without message, only children.
export const Alert: FunctionComponent<AlertProps> = ({
	className,
	onClose,
	dark,
	message,
	children,
	type = 'info',
}) => {
	return (
		<div className={classNames(className, 'c-alert', { 'c-alert--dark': dark })}>
			<div className="c-alert__body">
				<Spacer margin="right-small">
					{ALERT_TYPE_TO_ICON_MAPPING[type] ? (
						<Icon name={ALERT_TYPE_TO_ICON_MAPPING[type] as IconName} type="multicolor" />
					) : (
						<Spinner light={dark} />
					)}
				</Spacer>

				{typeof message === 'string' ? (
					// TODO: Dit lijkt me wel niet safe, advies op hoe ik het anders oplos?
					<div dangerouslySetInnerHTML={{ __html: message }} />
				) : (
					message || children
				)}
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
