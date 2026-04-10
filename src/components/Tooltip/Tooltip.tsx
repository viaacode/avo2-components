import clsx from 'clsx';
import { type FunctionComponent, type ReactNode, useCallback, useEffect, useState } from 'react';
import { useFloating, offset as floating_offset } from '@floating-ui/react';

import { generateRandomId } from '../../helpers/uuid';
import { useSlot } from '../../hooks/useSlot';

import './Tooltip.scss';
import { TooltipContent, TooltipTrigger } from './Tooltip.slots';

export interface TooltipPropsSchema {
	children: ReactNode;
	position: 'top' | 'right' | 'bottom' | 'left';
	offset?: number;
	contentClassName?: string;
}

export const Tooltip: FunctionComponent<TooltipPropsSchema> = ({
	children,
	position = 'bottom',
	offset,
	contentClassName,
}) => {

	const [show, setShow] = useState(false);
	const [id] = useState(generateRandomId());

	const tooltipSlot = useSlot(TooltipContent, children);
	const triggerSlot = useSlot(TooltipTrigger, children);
	
	const { x, y, strategy, refs } = useFloating({
	placement: position,
	middleware: [floating_offset(offset ?? 10)],
	});


	const handleMouseMove = useCallback(
		(evt: Event) => {
			const elem = evt.target as HTMLElement;
			let tooltipElem: HTMLElement | null = null;
			if (elem.classList.contains('c-tooltip-trigger')) {
				tooltipElem = elem;
			} else if (elem.closest('.c-tooltip-trigger')) {
				tooltipElem = elem.closest('.c-tooltip-trigger');
			}
			setShow(!!tooltipElem && tooltipElem.getAttribute('data-id') === id);
		},
		[id]
	);

	useEffect(() => {
		document.body.addEventListener('mousemove', handleMouseMove);
		document.body.addEventListener('touch', handleMouseMove);

		return () => {
			document.body.removeEventListener('mousemove', handleMouseMove);
			document.body.removeEventListener('touch', handleMouseMove);
		};
	}, [handleMouseMove]);

	return tooltipSlot && triggerSlot ? (
		<>
			<div className="c-tooltip-trigger" data-id={id} ref={refs.setReference}>
				{triggerSlot}
			</div>

			<div
				className={clsx(contentClassName, 'c-tooltip', `c-tooltip--${position}`, {
					'c-tooltip--show': show,
				})}
				ref={refs.setFloating}
				style={{
					position: strategy,
					top: y ?? 0,
					left: x ?? 0,
				}}
			>
				{tooltipSlot}
				<div className="c-tooltip__arrow" data-popper-arrow />
			</div>
		</>
	) : null;
};
