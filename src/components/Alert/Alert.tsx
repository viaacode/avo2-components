import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { noop } from '../../helpers/noop';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';
import { Spinner } from '../Spinner/Spinner';

import './Alert.scss';
import { AlertPropsSchema, AlertTypeWithIcon } from './Alert.types';

/* eslint-disable @typescript-eslint/no-unused-vars */
const ALERT_TYPE_TO_ICON_MAPPING: { [type in AlertTypeWithIcon]: IconNameSchema } = {
	/* eslint-enable @typescript-eslint/no-unused-vars */
	info: IconNameSchema.circleInfo,
	success: IconNameSchema.circleCheck,
	warn: IconNameSchema.circleWarning,
	danger: IconNameSchema.circleWarning,
};

export const Alert: FunctionComponent<AlertPropsSchema> = ({
	children,
	className,
	dark = false,
	message = '',
	onClose,
	type = 'info',
}) => {
	return (
		<div
			className={clsx(className, 'c-alert', {
				'c-alert--dark': dark,
				[`c-alert--${type}`]: type,
			})}
		>
			<div className="c-alert__body">
				{type === 'spinner' ? (
					<Spinner light={dark}></Spinner>
				) : (
					<Icon name={ALERT_TYPE_TO_ICON_MAPPING[type]} type="multicolor"></Icon>
				)}
				<div className="c-alert__message">{message || children}</div>
			</div>
			{!!onClose && (
				<Button
					icon={IconNameSchema.close}
					type={dark ? 'borderless-i' : 'borderless'}
					onClick={onClose || noop}
				/>
			)}
		</div>
	);
};
