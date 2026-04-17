import clsx from 'clsx';
import { type FunctionComponent, type ReactNode, useState } from 'react';
import {
	autoUpdate,
	offset as floating_offset,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
} from '@floating-ui/react';

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

	const tooltipSlot = useSlot(TooltipContent, children);
	const triggerSlot = useSlot(TooltipTrigger, children);

	const { refs, floatingStyles, context } = useFloating({
		open: show,
		onOpenChange: setShow,
		placement: position,
		middleware: [floating_offset(offset ?? 10)],
		whileElementsMounted: autoUpdate,
	});

	const hover = useHover(context);
	const focus = useFocus(context);
	const { getFloatingProps, getReferenceProps } = useInteractions([hover, focus]);

	return tooltipSlot && triggerSlot ? (
		<>
			<div className="c-tooltip-trigger" ref={refs.setReference} {...getReferenceProps()}>
				{triggerSlot}
			</div>

			<div
				className={clsx(contentClassName, 'c-tooltip', `c-tooltip--${position}`, {
					'c-tooltip--show': show,
				})}
				ref={refs.setFloating}
				style={floatingStyles}
				{...getFloatingProps()}
			>
				{tooltipSlot}
				<div className="c-tooltip__arrow" data-popper-arrow />
			</div>
		</>
	) : null;
};
