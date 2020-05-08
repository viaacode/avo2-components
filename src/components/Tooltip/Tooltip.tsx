import classnames from 'classnames';
import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';

import { useCallbackRef } from '../../hooks/useCallbackRef';
import { useSlot } from '../../hooks/useSlot';

import './Tooltip.scss';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots';

export interface TooltipPropsSchema {
	children: ReactNode;
	position: 'top' | 'right' | 'bottom' | 'left';
	contentClassName?: string;
}

export const Tooltip: FunctionComponent<TooltipPropsSchema> = ({
	children,
	position = 'bottom',
	contentClassName,
}) => {
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
				{({ ref }) => (
					<span className="c-tooltip-trigger" ref={ref}>
						{triggerSlot}
					</span>
				)}
			</Reference>
			<Popper placement={position}>
				{({ ref, style, placement }) => (
					<div
						className={classnames(contentClassName, 'c-tooltip', `c-tooltip--${position}`, {
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
