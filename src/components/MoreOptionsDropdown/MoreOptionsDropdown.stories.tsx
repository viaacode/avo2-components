import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';

import { menuItems } from '../Menu/Menu.mocks';
import { MoreOptionsDropdown } from './MoreOptionsDropdown';

type Props = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

const MoreOptionsDropdownStory = ({
	children,
}: {
	children: ReactElement;
	defaultValue?: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return cloneElement(children as ReactElement<Props>, {
		isOpen,
		onClose: () => setIsOpen(false),
		onOpen: () => setIsOpen(true),
	});
};

const meta: Meta<typeof MoreOptionsDropdown> = {
	title: 'components/MoreOptionsDropdown',
	component: MoreOptionsDropdown,
	tags: ['autodocs'],
	parameters: {
		jest: ['MoreOptionsDropdown'],
	},
};
export default meta;

type Story = StoryObj<typeof MoreOptionsDropdown>;

export const Default: Story = {
	render: () => (
		<MoreOptionsDropdownStory>
			<MoreOptionsDropdown
				onOptionClicked={() => console.log('clicked menu item')}
				menuItems={menuItems}
				isOpen={false}
			/>
		</MoreOptionsDropdownStory>
	),
};
