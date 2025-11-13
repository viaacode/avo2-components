import type { ReactNode } from 'react';

import type { DefaultProps } from '../../types';

export type AlertTypeSchema = 'info' | 'success' | 'warn' | 'danger' | 'spinner';

export type AlertTypeWithIcon = Exclude<AlertTypeSchema, 'spinner'>;

export interface AlertPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	dark?: boolean;
	message?: ReactNode | string;
	onClose?: () => void;
	type?: AlertTypeSchema;
}
