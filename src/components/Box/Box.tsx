import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types/index.js';

import styles from './Box.module.scss';

export interface BoxPropsSchema extends DefaultProps {
	condensed?: boolean;
	backgroundColor?: 'gray' | 'soft-white' | 'white' | 'dark';
	children: ReactNode;
}

export const Box: FunctionComponent<BoxPropsSchema> = ({
	children,
	className,
	condensed,
	backgroundColor = 'gray',
}) => (
	<div
		className={clsx(className, {
			// Normal
			['c-box']: true,
			['c-box--padding-small']: condensed,
			[`c-box--${backgroundColor}`]: backgroundColor !== 'gray',

			// Module
			[styles['c-box']]: true,
			[styles['c-box--padding-small']]: condensed,
			[styles[`c-box--${backgroundColor}`]]: backgroundColor !== 'gray',
		})}
	>
		{children}
	</div>
);
