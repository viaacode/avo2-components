 import clsx from 'clsx';
import { type FunctionComponent, type ReactNode } from 'react';
import { useFloating, autoUpdate } from '@floating-ui/react';
import type { Placement } from '@floating-ui/react';
import { noop } from '../../helpers/noop';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useSlot } from '../../hooks/useSlot';
import { Button } from '../Button/Button';
import type { ButtonTypeSchema } from '../Button/Button.types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';
import { Menu } from '../Menu/Menu';

import { DropdownButton, DropdownContent } from './Dropdown.slots';

import './Dropdown.scss';
import { handleEnterOrSpace } from '../../utils';

export interface DropdownPropsSchema {
	children: ReactNode;
	icon?: IconNameSchema;
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
	buttonType?: ButtonTypeSchema;
}

/**
 * This component provides a button that can show a flyout with some children inside it.
 * The PopperJS library is used to provide the positioning logic for the flyout element.
 *
 * The nomenclature within this library is as follows:
 * - The button with down arrow is called the "reference"
 * - The flyout element that contains the children is called the "popper"
 */
export const Dropdown: FunctionComponent<DropdownPropsSchema> = ({
	children,
	icon,
	isOpen,
	label = '',
	menuClassName,
	// TODO re-enable this without causing an infinite render loop
	// https://github.com/popperjs/popper-core/issues/794#issuecomment-736727000
	// menuWidth = 'fit-trigger',
	onClose = noop,
	onOpen = noop,
	placement = 'bottom-start',
	searchMenu = false,
	triggerClassName,
	triggerWidth = 'fit-content',
	buttonType = 'secondary',
}) => {

	const dropdownButtonSlot = useSlot(DropdownButton, children);
	const dropdownContentSlot = useSlot(DropdownContent, children);

	// const { update, styles, attributes } = usePopper(referenceElement, popperElement, {
	// 	placement
	// });
	
	const { x, y, strategy, refs, update } = useFloating({
			placement,
			whileElementsMounted: autoUpdate,
		});


	const toggle = async (openState = !isOpen) => {
		await update?.();
		if (openState !== isOpen) {
			openState ? onOpen() : onClose();
		}
	};

	const toggleClosed = () => toggle(false);

	useKeyPress('Escape', toggleClosed);
	useClickOutside(refs.floating.current as Element, toggleClosed, [refs.reference.current as Element]);

	return (
		<>
			{/** biome-ignore lint/a11y/noStaticElementInteractions: TODO fix */}
			<div
				className={clsx(triggerClassName, {
					'c-dropdown__trigger': triggerWidth === 'fit-content',
				})}
				onClick={() => toggle()}
				onKeyUp={handleEnterOrSpace(() => toggle())}
				ref={refs.setReference}
			>
				{dropdownButtonSlot || (
					<Button type={buttonType} block={triggerWidth === 'full-width'}>
						<div className="c-button__content">
							{icon && <Icon name={icon} />}
							{label && <div className="c-button__label">{label}</div>}
							{!icon && (
								<Icon
									name={isOpen ? IconNameSchema.caretUp : IconNameSchema.caretDown}
									size="small"
									type="arrows"
								/>
							)}
						</div>
					</Button>
				)}
			</div>

			<div

                ref={refs.setFloating}
                style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                }}
                className={
                    isOpen
                        ? 'c-dropdown__content-open'
                        : 'c-dropdown__content-closed'
                }
			>
				<Menu
					className={clsx(menuClassName, 'c-dropdown__menu')}
					isOpen={isOpen}
					search={searchMenu}
				>
					{dropdownContentSlot || children}
				</Menu>
			</div>
		</>
	);
};
