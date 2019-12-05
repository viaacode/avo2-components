import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarLeft, ToolbarRight } from '../Toolbar/Toolbar.slots';
import { ToolbarItem } from '../Toolbar/ToolbarItem/ToolbarItem';

import './Accordion.scss';

export interface AccordionProps extends DefaultProps {
	isOpen: boolean;
	onToggle?: () => void;
	title?: string;
}

export const Accordion: FunctionComponent<AccordionProps> = ({
	children,
	className,
	isOpen,
	onToggle,
	title,
}) => {
	const accordionIcon = isOpen ? 'chevron-up' : 'chevron-down';

	return (
		<div className={classnames(className, 'c-accordion', { 'c-accordion--closed': !isOpen })}>
			<div
				className={classnames('c-accordion__header', { 'u-clickable': onToggle })}
				onClick={onToggle}
			>
				<Toolbar autoHeight>
					<ToolbarLeft>
						<ToolbarItem>
							<div className="c-accordion__header-title">{title}</div>
						</ToolbarItem>
					</ToolbarLeft>
					<ToolbarRight>
						<ToolbarItem>
							<div className="c-accordion__icon">
								<Icon name={accordionIcon} type="arrows" />
							</div>
						</ToolbarItem>
					</ToolbarRight>
				</Toolbar>
			</div>
			<div className="c-accordion__body">
				<div className="c-accordion__item">{children}</div>
			</div>
		</div>
	);
};
