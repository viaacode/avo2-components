import type React from 'react';
import type { FunctionComponent } from 'react';

import { Button } from '../Button/Button.js';
import { Dropdown } from '../Dropdown/Dropdown.js';
import { DropdownButton, DropdownContent } from '../Dropdown/Dropdown.slots.js';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { MenuContent, type MenuItemInfoSchema } from '../Menu/MenuContent/MenuContent.js';

export interface MoreOptionsDropdownPropsSchema {
	children?: React.ReactNode;
	isOpen: boolean;
	onClose?: () => void;
	onOpen?: () => void;
	menuItems: MenuItemInfoSchema[] | MenuItemInfoSchema[][];
	label?: string;
	onOptionClicked?: (menuItemId: string | number) => void;
}

export const MoreOptionsDropdown: FunctionComponent<MoreOptionsDropdownPropsSchema> = ({
	isOpen,
	onOpen,
	onClose,
	menuItems,
	label = 'meer opties',
	onOptionClicked,
}) => {
	return !!menuItems && !!menuItems.length ? (
		<Dropdown
			isOpen={isOpen}
			menuWidth="fit-content"
			onOpen={onOpen}
			onClose={onClose}
			placement="bottom-end"
		>
			<DropdownButton>
				<Button
					icon={IconNameSchema.moreHorizontal}
					type="secondary"
					ariaLabel={label}
					title={label}
				/>
			</DropdownButton>
			<DropdownContent>
				<MenuContent menuItems={menuItems} onClick={onOptionClicked} />
			</DropdownContent>
		</Dropdown>
	) : null;
};
