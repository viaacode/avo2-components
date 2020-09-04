import classnames from 'classnames';
import React, { createRef, FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';

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

	const triggerNodeRef = createRef<HTMLElement>();

	const tooltipSlot = useSlot(TooltipContent, children);
	const triggerSlot = useSlot(TooltipTrigger, children);

	const showHandler = () => setShow(true);
	const hideHandler = () => setShow(false);

	useEffect(() => {
		if (triggerNodeRef.current) {
			const triggerNode = triggerNodeRef.current;
			triggerNode.addEventListener('mouseover', showHandler);
			triggerNode.addEventListener('touchstart', showHandler);
			triggerNode.addEventListener('mouseout', hideHandler);
			triggerNode.addEventListener('touchend', hideHandler);

			return () => {
				if (triggerNode) {
					triggerNode.removeEventListener('mouseover', showHandler);
					triggerNode.removeEventListener('touchstart', showHandler);
					triggerNode.removeEventListener('mouseout', hideHandler);
					triggerNode.removeEventListener('touchend', hideHandler);
				}
			};
		}
	}, [triggerNodeRef]);

	return tooltipSlot && triggerSlot ? (
		<Manager>
			<Reference innerRef={triggerNodeRef}>
				{({ ref }) => (
					<span className="c-tooltip-trigger" ref={ref}>
						{triggerSlot}
					</span>
				)}
			</Reference>
			<Popper placement={position}>
				{({ ref, style, placement }) => (
					<div
						className={classnames(
							contentClassName,
							'c-tooltip',
							`c-tooltip--${position}`,
							{
								'c-tooltip--show': show,
							}
						)}
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
