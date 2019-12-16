import { ReactNode } from 'react';

import { DefaultProps } from '../../types';

export type AlertType = 'info' | 'success' | 'danger' | 'spinner';

export type AlertTypeWithIcon = Exclude<AlertType, 'spinner'>;

export interface AlertProps extends DefaultProps {
	dark?: boolean;
	message?: ReactNode | string;
	onClose?: () => void;
	type?: AlertType;
}
