import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { useSlot } from '../../hooks/useSlot';
import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarLeft, ToolbarRight } from '../Toolbar/Toolbar.slots';
import { ToolbarItem } from '../Toolbar/ToolbarItem/ToolbarItem';
import { AccordeonActions, AccordeonBody, AccordeonTitle } from './Accordeon.slots';

import './Accordeon.scss';

export interface AccordeonProps extends DefaultProps {
	isOpen?: boolean;
	onToggle?: () => void;
	title?: string;
}

export const Accordeon: FunctionComponent<AccordeonProps> = ({
	children,
	className,
	isOpen = true,
	onToggle,
	title,
}) => {
	const titleSlot = useSlot(AccordeonTitle, children);
	const actionsSlot = useSlot(AccordeonActions, children);
	const bodySlot = useSlot(AccordeonBody, children);

	const accordionIcon = isOpen ? 'chevron-up' : 'chevron-down';
	const hasSlots = !!titleSlot || !!actionsSlot || !!bodySlot;

	return (
		<div className={classnames(className, 'c-accordion', { 'c-accordion--closed': !isOpen })}>
			<div
				className={classnames('c-accordion__header', { 'u-clickable': !actionsSlot && onToggle })}
				onClick={actionsSlot ? undefined : onToggle}
			>
				<Toolbar autoHeight>
					<ToolbarLeft>
						<ToolbarItem>
							<div className="c-accordion__header-title">{titleSlot || title}</div>
						</ToolbarItem>
					</ToolbarLeft>
					<ToolbarRight>
						<ToolbarItem>
							{actionsSlot || (
								<div className="c-accordion__icon">
									<Icon name={accordionIcon} type="arrows" />
								</div>
							)}
						</ToolbarItem>
					</ToolbarRight>
				</Toolbar>
			</div>
			<div className="c-accordion__body">
				<div className="c-accordion__item">{hasSlots ? bodySlot : children}</div>
			</div>
		</div>
	);
};
