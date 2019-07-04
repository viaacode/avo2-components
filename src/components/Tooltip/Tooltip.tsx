import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';
import PopperJS, { Data, ModifierFn } from 'popper.js';
import { Manager, Popper, Reference } from 'react-popper';

export interface TooltipProps {
	children: ReactNode;
	index: string;
	placement: 'bottom';
}

export const Tooltip: FunctionComponent<TooltipProps> = ({ children, index, placement }) => {
	return (
		<div className={classNames('c-tooltip', `c-tooltip--${placement}`)} id={index}>
			{children}
		</div>
	);
};
