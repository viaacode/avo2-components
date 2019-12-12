import { ReactNode } from 'react';

import { DefaultProps } from '../../types';

export enum AlertType {
	Info = 'info',
	Success = 'success',
	Danger = 'danger',
	Spinner = 'spinner',
}

export type AlertTypeWithIcon = Exclude<AlertType, AlertType.Spinner>;

export interface AlertProps extends DefaultProps {
	dark?: boolean;
	light?: boolean;
	message?: ReactNode | string;
	onClose?: () => void;
	type?: AlertType;
}
