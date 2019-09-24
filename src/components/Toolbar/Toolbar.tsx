import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

import { useSlot } from '../../hooks/useSlot';

import { DefaultProps } from '../../types';
import { ToolbarCenter, ToolbarLeft, ToolbarRight } from './Toolbar.slots';

import './Toolbar.scss';

export interface ToolbarProps extends DefaultProps {
	children: ReactNode;
	size?: 'medium';
	spaced?: boolean;
	autoHeight?: boolean;
	alignTop?: boolean;
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({
	children,
	className,
	size,
	spaced,
	autoHeight,
	alignTop,
}) => {
	const left = useSlot(ToolbarLeft, children);
	const center = useSlot(ToolbarCenter, children);
	const right = useSlot(ToolbarRight, children);

	return (
		<div
			className={classNames(className, 'c-toolbar', {
				'c-toolbar--medium': size === 'medium',
				'c-toolbar--spaced': spaced,
				'c-toolbar--auto': autoHeight,
				'c-toolbar--align-top': alignTop,
			})}
		>
			{left && <div className="c-toolbar__left">{left}</div>}
			{center && (
				<div className="c-toolbar__center">
					<div className="c-toolbar__center-inner">{center}</div>
				</div>
			)}
			{right && <div className="c-toolbar__right">{right}</div>}
		</div>
	);
};
