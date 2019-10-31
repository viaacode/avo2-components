import React, { FunctionComponent, ReactNode } from 'react';

import classnames from 'classnames';
import PopperJS, { Data, ModifierFn, Placement } from 'popper.js';
import { Manager, Popper, Reference } from 'react-popper';

import { useCallbackRef } from '../../hooks/useCallbackRef';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useSlot } from '../../hooks/useSlot';
import { get } from '../../utils/get';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/types';
import { Menu } from '../Menu/Menu';
import { DropdownButton, DropdownContent } from './Dropdown.slots';

import './Dropdown.scss';

export interface DropdownProps {
	children: ReactNode;
	icon?: IconName;
	isOpen: boolean;
	label?: string;
	menuClassName?: string;
	menuWidth?: 'fit-content' | 'fit-trigger';
	onClose?: () => void;
	onOpen?: () => void;
	placement?: Placement;
	searchMenu?: boolean;
	triggerClassName?: string;
	triggerWidth?: 'fit-content' | 'full-width';
}

/**
 * This component provides a button that can show a flyout with some children inside of it.
 * The PopperJS library is used to provide the positioning logic for the flyout element.
 *
 * The nomenclature within this library is as follows:
 * - The button with down arrow is called the "reference"
 * - The flyout element that contains the children is called the "popper"
 */
export const Dropdown: FunctionComponent<DropdownProps> = ({
	children,
	icon,
	isOpen,
	label = '',
	menuClassName,
	menuWidth = 'fit-trigger',
	onClose = () => {},
	onOpen = () => {},
	placement = 'bottom-start',
	searchMenu = false,
	triggerClassName,
	triggerWidth = 'fit-content',
}) => {
	const [dropdownFlyout, dropdownFlyoutRef] = useCallbackRef();
	const [dropdownButton, dropdownButtonRef] = useCallbackRef();

	const dropdownButtonSlot = useSlot(DropdownButton, children);
	const dropdownContentSlot = useSlot(DropdownContent, children);

	const toggle = (openState: boolean = !isOpen) => {
		if (openState !== isOpen) {
			openState ? onOpen() : onClose();
		}
	};

	const toggleClosed = () => toggle(false);

	// We let popper calculate all the required styles, then we modify them a little based on the `menuWidth` prop
	const computeStyle = (data: Data, options: Object) => {
		const computeStylesFn: ModifierFn = get(PopperJS, 'Defaults.modifiers.computeStyle.fn');

		const newData = computeStylesFn(data, options);

		if (menuWidth === 'fit-trigger') {
			// Make the width of the popper the same size as the reference element
			newData.styles.width = `${newData.offsets.reference.width}px`;
		}

		newData.styles.overflow = 'hidden';

		return newData;
	};

	const modifiers = {
		computeStyle: {
			fn: computeStyle,
		},
	};

	useKeyPress('Escape', toggleClosed);
	useClickOutside(dropdownFlyout, toggleClosed, [dropdownButton]);

	return (
		<Manager>
			<Reference innerRef={dropdownButtonRef}>
				{({ ref }) => (
					<div
						className={classnames(triggerClassName, {
							'c-dropdown__trigger': triggerWidth === 'fit-content',
						})}
						ref={ref}
						onClick={() => toggle()}
					>
						{dropdownButtonSlot || (
							<Button type="secondary" block={triggerWidth === 'full-width'}>
								<div className="c-button__content">
									{icon && <Icon name={icon} />}
									{label && <div className="c-button__label">{label}</div>}
									{!icon && (
										<Icon name={isOpen ? 'caret-up' : 'caret-down'} size="small" type="arrows" />
									)}
								</div>
							</Button>
						)}
					</div>
				)}
			</Reference>
			<Popper placement={placement} modifiers={modifiers} innerRef={dropdownFlyoutRef}>
				{({ ref, style, placement }) => (
					<Menu
						className={classnames(menuClassName, 'c-dropdown__menu')}
						innerRef={ref}
						isOpen={isOpen}
						placement={placement}
						search={searchMenu}
						style={style}
					>
						{dropdownContentSlot || children}
					</Menu>
				)}
			</Popper>
		</Manager>
	);
};
