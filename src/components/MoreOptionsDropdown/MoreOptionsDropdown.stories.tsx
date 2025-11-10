import { action } from 'storybook/actions';
import { storiesOf } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';

import { menuItems } from '../Menu/Menu.mocks.js';

import { MoreOptionsDropdown } from './MoreOptionsDropdown.js';

const MoreOptionsDropdownStory = ({
	children,
}: {
	children: ReactElement;
	defaultValue?: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return cloneElement(children, {
		isOpen,
		onClose: () => setIsOpen(false),
		onOpen: () => setIsOpen(true),
	});
};

storiesOf('components/MoreOptionsDropdown', module)
	.addParameters({ jest: ['MoreOptionsDropdown'] })
	.add('MoreOptionsDropdown', () => (
		<MoreOptionsDropdownStory>
			<MoreOptionsDropdown
				onOptionClicked={action('clicked menu item')}
				menuItems={menuItems}
				isOpen={false}
			/>
		</MoreOptionsDropdownStory>
	));
