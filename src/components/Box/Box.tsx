import classnames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import { DefaultProps } from '../../types';

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
		className={classnames(className, styles['c-box'], {
			[styles['c-box--padding-small']]: condensed,
			[styles[`c-box--${backgroundColor}`]]: backgroundColor !== 'gray',
		})}
	>
		{children}
	</div>
);
