import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';

import { useSlot } from '../../hooks/useSlot';

import { DefaultProps } from '../../types';
import { ToolbarCenter, ToolbarLeft, ToolbarRight } from './Toolbar.slots';

import './Toolbar.scss';

export interface ToolbarPropsSchema extends DefaultProps {
	children: ReactNode;
	size?: 'medium' | 'large' | 'huge';
	spaced?: boolean;
	autoHeight?: boolean;
	alignTop?: boolean;
	justify?: boolean;
}

export const Toolbar: FunctionComponent<ToolbarPropsSchema> = ({
	children,
	className,
	size,
	spaced,
	autoHeight,
	alignTop,
	justify,
}) => {
	const left = useSlot(ToolbarLeft, children);
	const center = useSlot(ToolbarCenter, children);
	const right = useSlot(ToolbarRight, children);

	return (
		<div
			className={classnames(className, 'c-toolbar', {
				[`c-toolbar--${size}`]: size,
				'c-toolbar--spaced': spaced,
				'c-toolbar--auto': autoHeight,
				'c-toolbar--align-top': alignTop,
				'c-toolbar--justified': justify,
			})}
		>
			{left && <div className="c-toolbar__left">{left}</div>}
			{center && (
				<div className="c-toolbar__center">
					<div className="c-toolbar__center-inner">{center}</div>
				</div>
			)}
			{right && <div className="c-toolbar__right">{right}</div>}
			{!left && !center && !right && !!children && children}
		</div>
	);
};
