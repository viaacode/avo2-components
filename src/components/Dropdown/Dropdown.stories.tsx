import type { Meta, StoryFn } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';

import type { IconNameSchema } from '../Icon/Icon.types';
import { MenuContent } from '../Menu/MenuContent/MenuContent';

import { Dropdown, type DropdownPropsSchema } from './Dropdown';

const menuItems = [
	{ label: 'Aluminium', id: 'aluminium', key: 'aluminium' },
	{ label: 'Cadmium', id: 'cadmium', key: 'cadmium' },
	{ label: 'Dubnium', id: 'dubnium', key: 'dubnium' },
	{ label: 'Potassium', id: 'potassium', key: 'potassium' },
];

const menuItemsWithIcons = [
	{ ...menuItems[0], label: 'Aluminium with an icon', icon: 'circle' as IconNameSchema },
	{ ...menuItems[1], label: 'Cadmium with an icon', icon: 'box' as IconNameSchema },
	{ ...menuItems[2], label: 'Dubnium with an icon', icon: 'square' as IconNameSchema },
	{ ...menuItems[3], label: 'Potassium with an icon', icon: 'triangle' as IconNameSchema },
];

const DropdownStoryComponent = ({ children }: { children: ReactElement }) => {
	const [isOpen, setOpen] = useState(false);

	const open = () => {
		action('onOpen')();
		setOpen(true);
	};

	const close = () => {
		action('onClose')();
		setOpen(false);
	};

	return cloneElement(children, {
		isOpen,
		onOpen: open,
		onClose: close,
	});
};

const DropdownMoveTriggerStoryComponent = ({ children }: { children: ReactElement }) => {
	const [isOpen, setOpen] = useState(false);
	const [closeCount, setCloseCount] = useState(0);

	const open = () => {
		action('onOpen')();
		setOpen(true);
	};

	const close = () => {
		action('onClose')();
		setCloseCount((closeCount) => closeCount + 1);
		setOpen(false);
	};

	const clone = cloneElement(children, {
		isOpen,
		onOpen: open,
		onClose: close,
	});
	return (
		<>
			<span
				style={{
					width: `${closeCount * 20}px`,
					display: 'inline-block',
					height: '40px',
					backgroundColor: 'grey',
				}}
			></span>
			{clone}
		</>
	);
};

export default {
	title: 'components/Dropdown',
	parameters: { jest: ['Dropdown'] },
} as Meta;

const Template: StoryFn = (args) => (
	<DropdownStoryComponent>
		<Dropdown isOpen={true} {...args}>
			<MenuContent menuItems={args.menuItems} />
		</Dropdown>
	</DropdownStoryComponent>
);

export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
	label: 'Show options',
	isOpen: false,
	menuItems,
};

export const DropdownFitMenuContent = Template.bind({});
DropdownFitMenuContent.args = {
	label: 'Show options',
	isOpen: false,
	menuWidth: 'fit-content',
	menuItems: menuItemsWithIcons,
};

export const DropdownFullWidth = Template.bind({});
DropdownFullWidth.args = {
	label: 'Show options',
	isOpen: false,
	triggerWidth: 'full-width',
	menuItems,
};

export const DropdownUp = Template.bind({});
DropdownUp.args = {
	label: 'Show options',
	isOpen: false,
	placement: 'top',
	menuItems: menuItemsWithIcons,
};
DropdownUp.decorators = [(Story) => <div style={{ paddingTop: '200px' }}>{Story()}</div>];

export const DropdownBottomStart = Template.bind({});
DropdownBottomStart.args = {
	label: 'Show options',
	isOpen: false,
	menuWidth: 'fit-content',
	placement: 'bottom-start',
	menuItems: menuItemsWithIcons,
};

export const DropdownBottomEnd = Template.bind({});
DropdownBottomEnd.args = {
	label: 'Show options',
	isOpen: false,
	menuWidth: 'fit-content',
	placement: 'bottom-end',
	menuItems,
};

export const DropdownTopStart = Template.bind({});
DropdownTopStart.args = {
	label: 'Show options',
	isOpen: false,
	menuWidth: 'fit-content',
	placement: 'top-start',
	menuItems: menuItemsWithIcons,
};
DropdownTopStart.decorators = [(Story) => <div style={{ paddingTop: '200px' }}>{Story()}</div>];

export const DropdownTopEnd = Template.bind({});
DropdownTopEnd.args = {
	label: 'Show options',
	isOpen: false,
	menuWidth: 'fit-content',
	placement: 'top-end',
	menuItems,
};
DropdownTopEnd.decorators = [(Story) => <div style={{ paddingTop: '200px' }}>{Story()}</div>];

export const DropdownWithTriggerMoving = (args: DropdownPropsSchema & { menuItems: any[] }) => (
	<DropdownMoveTriggerStoryComponent>
		<Dropdown {...args}>
			<MenuContent menuItems={args.menuItems} />
		</Dropdown>
	</DropdownMoveTriggerStoryComponent>
);
DropdownWithTriggerMoving.args = {
	label: 'Show options',
	isOpen: false,
	menuItems,
};
