import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types/index.js';

import './StickyEdgeBar.scss';

export type StickyEdgeBarPositions = 'bottom' | 'top';

export interface StickyEdgeBarPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	positions?: StickyEdgeBarPositions[];
	color?: 'teal-bright';
}

export const StickyEdgeBar: FunctionComponent<StickyEdgeBarPropsSchema> = ({
	className,
	color = 'teal-bright',
	positions = ['bottom'],
	style,
	children,
}) => {
	return (
		<div
			className={clsx(
				className,
				'c-sticky-edge-bar',
				`c-sticky-edge-bar--color--${color}`,
				positions.map((pos) => `${`c-sticky-edge-bar--position--${pos}`}`)
			)}
			style={style}
		>
			{children}
		</div>
	);
};
