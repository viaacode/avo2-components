import React, { cloneElement, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { MenuContent } from '../Menu/MenuContent';
import { Dropdown } from './Dropdown';

const menuItems = [
	{ label: 'Aluminium', id: 'aluminium' },
	{ label: 'Cadmium', id: 'cadmium' },
	{ label: 'Dubnium', id: 'dubnium' },
	{ label: 'Potassium', id: 'potassium' },
];

const menuItemsWithIcons = [
	{ ...menuItems[0], label: 'Aluminium with an icon', icon: 'circle' },
	{ ...menuItems[1], label: 'Cadmium with an icon', icon: 'box' },
	{ ...menuItems[2], label: 'Dubnium with an icon', icon: 'square' },
	{ ...menuItems[3], label: 'Potassium with an icon', icon: 'triangle' },
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

	const childrenWithProps = cloneElement(children, {
		isOpen,
		onOpen: open,
		onClose: close,
	});

	return childrenWithProps;
};

storiesOf('Dropdown', module)
	.addParameters({ jest: ['Dropdown'] })
	.add('Dropdown', () => (
		<DropdownStoryComponent>
			<Dropdown label="Show options" isOpen={false}>
				<MenuContent menuItems={menuItems} />
			</Dropdown>
		</DropdownStoryComponent>
	))
	.add('Dropdown up', () => (
		<div style={{ paddingTop: '200px' }}>
			<DropdownStoryComponent>
				<Dropdown label="Show options" isOpen={false} placement={'top'}>
					<MenuContent menuItems={menuItemsWithIcons} />
				</Dropdown>
			</DropdownStoryComponent>
		</div>
	))
	.add('Dropdown fixed-width', () => (
		<DropdownStoryComponent>
			<Dropdown label="Show options" isOpen={false} flyoutWidth="same-as-button">
				<MenuContent menuItems={menuItems} />
			</Dropdown>
		</DropdownStoryComponent>
	))
	.add('Dropdown fixed-width bottom-start', () => (
		<DropdownStoryComponent>
			<Dropdown
				label="Show options"
				isOpen={false}
				placement={'bottom-start'}
				flyoutWidth="same-as-button"
			>
				<MenuContent menuItems={menuItemsWithIcons} />
			</Dropdown>
		</DropdownStoryComponent>
	))
	.add('Dropdown fixed-width bottom-end', () => (
		<DropdownStoryComponent>
			<Dropdown
				label="Show options"
				isOpen={false}
				placement={'bottom-end'}
				flyoutWidth="same-as-button"
			>
				<MenuContent menuItems={menuItems} />
			</Dropdown>
		</DropdownStoryComponent>
	))
	.add('Dropdown fixed-width top-start', () => (
		<div style={{ paddingTop: '200px' }}>
			<DropdownStoryComponent>
				<Dropdown
					label="Show options"
					isOpen={false}
					placement={'top-start'}
					flyoutWidth="same-as-button"
				>
					<MenuContent menuItems={menuItemsWithIcons} />
				</Dropdown>
			</DropdownStoryComponent>
		</div>
	))
	.add('Dropdown fixed-width top-end', () => (
		<div style={{ paddingTop: '200px' }}>
			<DropdownStoryComponent>
				<Dropdown
					label="Show options"
					isOpen={false}
					placement={'top-end'}
					flyoutWidth="same-as-button"
				>
					<MenuContent menuItems={menuItems} />
				</Dropdown>
			</DropdownStoryComponent>
		</div>
	))
	.add('Dropdown auto-width bottom-start', () => (
		<DropdownStoryComponent>
			<Dropdown
				label="Show options"
				isOpen={false}
				placement={'bottom-start'}
				flyoutWidth="fit-content"
			>
				<MenuContent menuItems={menuItemsWithIcons} />
			</Dropdown>
		</DropdownStoryComponent>
	))
	.add('Dropdown auto-width bottom-end', () => (
		<DropdownStoryComponent>
			<Dropdown
				label="Show options"
				isOpen={false}
				placement={'bottom-end'}
				flyoutWidth="fit-content"
			>
				<MenuContent menuItems={menuItems} />
			</Dropdown>
		</DropdownStoryComponent>
	))
	.add('Dropdown auto-width top-start', () => (
		<div style={{ paddingTop: '200px' }}>
			<DropdownStoryComponent>
				<Dropdown
					label="Show options"
					isOpen={false}
					placement={'top-start'}
					flyoutWidth="fit-content"
				>
					<MenuContent menuItems={menuItemsWithIcons} />
				</Dropdown>
			</DropdownStoryComponent>
		</div>
	))
	.add('Dropdown auto-width top-end', () => (
		<div style={{ paddingTop: '200px' }}>
			<DropdownStoryComponent>
				<Dropdown
					label="Show options"
					isOpen={false}
					placement={'top-end'}
					flyoutWidth="fit-content"
				>
					<MenuContent menuItems={menuItems} />
				</Dropdown>
			</DropdownStoryComponent>
		</div>
	));
