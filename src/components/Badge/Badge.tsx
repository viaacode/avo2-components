import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import styles from './Badge.module.scss';

export interface BadgePropsSchema extends DefaultProps {
	text: string;
	type?: 'default' | 'success' | 'error';
}

export const Badge: FunctionComponent<BadgePropsSchema> = ({
	className,
	text,
	type = 'default',
}) => (
	<div
		className={classnames(className, styles['c-badge'], { [styles[`c-badge--${type}`]]: type })}
	>
		{text}
	</div>
);
