import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent } from 'react';

import type { DefaultProps } from '../../types/index.js';

import './Pill.scss';

export enum PillVariants {
	active = 'active',
}

export interface PillPropsSchema extends DefaultProps {
	children?: React.ReactNode;
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
