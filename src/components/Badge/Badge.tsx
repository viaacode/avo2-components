import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

import type { DefaultProps } from '../../types';

import styles from './Badge.module.scss';

export interface BadgePropsSchema extends DefaultProps {
	children?: React.ReactNode;
	text: string;
	type?: 'default' | 'success' | 'error';
}

export const Badge: FunctionComponent<BadgePropsSchema> = ({
	className,
	text,
	type = 'default',
}) => (
	<div
		className={clsx(className, {
			// Normal
			'c-badge': true,
			[`c-badge--${type}`]: type,

			// Module
			[styles['c-badge']]: true,
			[styles[`c-badge--${type}`]]: type,
		})}
	>
		{text}
	</div>
);
