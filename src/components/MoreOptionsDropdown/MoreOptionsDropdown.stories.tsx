import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

import { menuItems } from '../Menu/Menu.mocks';

import { MoreOptionsDropdown } from './MoreOptionsDropdown';

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
