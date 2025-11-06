import { ReactNode } from 'react';

import { DefaultProps } from '../../types/index.js';

export type AlertTypeSchema = 'info' | 'success' | 'warn' | 'danger' | 'spinner';

export type AlertTypeWithIcon = Exclude<AlertTypeSchema, 'spinner'>;

export interface AlertPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	dark?: boolean;
	message?: ReactNode | string;
	onClose?: () => void;
	type?: AlertTypeSchema;
}
