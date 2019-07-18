import React, { FunctionComponent, ReactNode } from 'react';

import classNames from 'classnames';

export interface TooltipProps {
	children: ReactNode;
	id: string;
	placement: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: FunctionComponent<TooltipProps> = ({ children, id, placement }) => {
	return (
		<div className={classNames('c-tooltip', `c-tooltip--${placement}`)} id={`tooltip-${id}`}>
			{children}
		</div>
	);
};
