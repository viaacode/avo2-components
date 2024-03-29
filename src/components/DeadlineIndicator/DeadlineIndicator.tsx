import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import './DeadlineIndicator.scss';

export type DeadlineIndicatorColorsSchema = 'error' | 'yellow' | 'success';
export type DeadlineIndicatorShapesSchema = 'square' | 'diamond' | 'circle';

export interface DeadlineIndicatorPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	color?: DeadlineIndicatorColorsSchema;
	shape?: DeadlineIndicatorShapesSchema;
}

export const DeadlineIndicator: FunctionComponent<DeadlineIndicatorPropsSchema> = ({
	className,
	shape = 'square',
	color = 'error',
}) => (
	<div
		className={clsx(className, 'c-deadline-indicator', {
			[`c-deadline-indicator--${color}`]: !!color,
			[`c-deadline-indicator--${shape}`]: !!shape,
		})}
	/>
);
