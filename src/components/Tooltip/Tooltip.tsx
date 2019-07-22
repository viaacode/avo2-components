import React, { ReactElement, useEffect, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';

import classNames from 'classnames';

import { useCallbackRef } from '../../hooks/useCallbackRef';
import { useSlot } from '../../hooks/useSlot';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots';

export interface TooltipProps {
	children: ReactElement[];
	placement: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: React.FC<TooltipProps> = ({ children, placement = 'bottom' }) => {
	const [hovered, setHovered] = useState(false);

	const [triggerNode, triggerRef] = useCallbackRef();

	const tooltip = useSlot(TooltipContent, children);
	const trigger = useSlot(TooltipTrigger, children);

	useEffect(() => {
		if (triggerNode) {
			triggerNode.addEventListener('mouseover', () => setHovered(true));
			triggerNode.addEventListener('touchstart', () => setHovered(true));
			triggerNode.addEventListener('mouseout', () => setHovered(false));
			triggerNode.addEventListener('touchend', () => setHovered(false));

			return () => {
				triggerNode.removeEventListener('mouseover', () => setHovered(true));
				triggerNode.removeEventListener('touchstart', () => setHovered(true));
				triggerNode.removeEventListener('mouseout', () => setHovered(false));
				triggerNode.removeEventListener('touchend', () => setHovered(false));
			};
		}
	}, [triggerNode]);

	return tooltip && trigger ? (
		<Manager>
			<Reference innerRef={triggerRef}>{({ ref }) => <span ref={ref}>{trigger}</span>}</Reference>
			<Popper placement={placement}>
				{({ ref, style, placement }) => (
					<div
						className={classNames('c-tooltip', `c-tooltip--${placement}`, {
							'c-tooltip--show': hovered,
						})}
						data-placement={placement}
						ref={ref}
						style={style}
					>
						{tooltip}
					</div>
				)}
			</Popper>
		</Manager>
	) : null;
};
