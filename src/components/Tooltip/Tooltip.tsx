import classnames from 'classnames';
import React, {
	createRef,
	FunctionComponent,
	ReactNode,
	useEffect,
	useState,
} from 'react';
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

	const handleMouseMove = (evt: Event) => {
		const elem = evt.target as HTMLElement;
		setShow(
			elem.classList.contains('c-tooltip-trigger') || !!elem.closest('.c-tooltip-trigger')
		);
	};

	useEffect(() => {
		if (triggerNodeRef.current) {
			const triggerNode = triggerNodeRef.current;
			document.body.addEventListener('mousemove', handleMouseMove);

			return () => {
				if (triggerNode) {
					triggerNode.removeEventListener('mousemove', handleMouseMove);
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
