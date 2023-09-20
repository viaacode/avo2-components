import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';

import './Pill.scss';

export enum PillVariants {
	active = 'active',
}

export interface PillPropsSchema extends DefaultProps {
	variants?: Array<PillVariants>; // tslint:disable-line
}

const PillClassName = 'c-pill';
export const Pill: FunctionComponent<PillPropsSchema> = ({
	className,
	children,
	style,
	variants = [],
}) => (
	<div
		className={clsx(
			PillClassName,
			className,
			variants.map((variant) => `${PillClassName}--${variant}`)
		)}
		style={style}
	>
		{children}
	</div>
);
