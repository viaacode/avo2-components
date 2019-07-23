import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';

import classNames from 'classnames';

import { useCallbackRef } from '../../hooks/useCallbackRef';
import { useSlot } from '../../hooks/useSlot';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots';

export interface TooltipProps {
	children: ReactNode;
	position: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: FC<TooltipProps> = ({ children, position = 'bottom' }) => {
	const [show, setShow] = useState(false);

	const [triggerNode, triggerRef] = useCallbackRef();

	const tooltipSlot = useSlot(TooltipContent, children);
	const triggerSlot = useSlot(TooltipTrigger, children);

	const showHandler = () => setShow(true);
	const hideHandler = () => setShow(false);

	useEffect(() => {
		if (triggerNode) {
			triggerNode.addEventListener('mouseover', showHandler);
			triggerNode.addEventListener('touchstart', showHandler);
			triggerNode.addEventListener('mouseout', hideHandler);
			triggerNode.addEventListener('touchend', hideHandler);

			return () => {
				triggerNode.removeEventListener('mouseover', showHandler);
				triggerNode.removeEventListener('touchstart', showHandler);
				triggerNode.removeEventListener('mouseout', hideHandler);
				triggerNode.removeEventListener('touchend', hideHandler);
			};
		}
	}, [triggerNode]);

	return tooltipSlot && triggerSlot ? (
		<Manager>
			<Reference innerRef={triggerRef}>
				{({ ref }) => <span ref={ref}>{triggerSlot}</span>}
			</Reference>
			<Popper placement={position}>
				{({ ref, style, placement }) => (
					<div
						className={classNames('c-tooltip', `c-tooltip--${position}`, {
							'c-tooltip--show': show,
						})}
						data-placement={placement}
						ref={ref}
						style={style}
					>
						{tooltipSlot}
					</div>
				)}
			</Popper>
		</Manager>
	) : null;
};
