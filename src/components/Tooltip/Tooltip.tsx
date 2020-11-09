import classnames from 'classnames';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { Manager, Popper, Reference } from 'react-popper';

import { generateRandomId } from '../../helpers/uuid';
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
	const [id] = useState(generateRandomId());

	const tooltipSlot = useSlot(TooltipContent, children);
	const triggerSlot = useSlot(TooltipTrigger, children);

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
		<Manager>
			<Reference>
				{({ ref }) => (
					<span className="c-tooltip-trigger" ref={ref} data-id={id}>
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
