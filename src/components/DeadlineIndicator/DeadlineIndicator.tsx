import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import './DeadlineIndicator.scss';

export interface DeadlineIndicatorPropsSchema extends DefaultProps {
	color?: 'error' | 'yellow' | 'success';
	shape?: 'square' | 'diamond' | 'circle';
}

export const DeadlineIndicator: FunctionComponent<DeadlineIndicatorPropsSchema> = ({
	className,
	shape = 'square',
	color = 'error',
}) => (
	<div
		className={classnames(className, 'c-deadline-indicator', {
			[`c-deadline-indicator--${color}`]: !!color,
			[`c-deadline-indicator--${shape}`]: !!shape,
		})}
	/>
);
