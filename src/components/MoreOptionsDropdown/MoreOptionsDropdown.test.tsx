import { mount, shallow } from 'enzyme';
import React from 'react';

import { noop } from '../../helpers/noop';
import { IconNameSchema } from '../Icon/Icon.types';
import { MenuItemInfoSchema } from '../Menu/MenuContent/MenuContent';

import { MoreOptionsDropdown } from './MoreOptionsDropdown';

const menuItems: MenuItemInfoSchema[] = [
	{
		label: 'Add',
		id: 'add',
		icon: IconNameSchema.add,
	},
	{
		label: 'Delete',
		id: 'delete',
		icon: IconNameSchema.delete,
	},
	{
		label: 'Archive',
		id: 'archive',
		icon: IconNameSchema.clock,
	},
];

describe('<BooleanCheckboxDropdown />', () => {
	it('Should be able to render', () => {
		shallow(
			<MoreOptionsDropdown
				isOpen={true}
				onOpen={noop}
				onClose={noop}
				menuItems={menuItems}
				onOptionClicked={noop}
			/>
		);
	});

	it('Should not render if no options are provided', () => {
		const moreOptionsDropdownComponent = shallow(
			<MoreOptionsDropdown
				isOpen={true}
				onOpen={noop}
				onClose={noop}
				menuItems={[]}
				onOptionClicked={noop}
			/>
		);

		expect(moreOptionsDropdownComponent.type()).toEqual(null);
	});

	it('Should call `onChange` when toggling checkbox', () => {
		const onOptionClicked = jest.fn();

		const moreOptionsDropdownComponent = mount(
			<MoreOptionsDropdown
				isOpen={true}
				onOpen={noop}
				onClose={noop}
				menuItems={menuItems}
				onOptionClicked={onOptionClicked}
			/>
		);

		const menuItemElements = moreOptionsDropdownComponent.find('.c-menu__item');

		menuItemElements.at(0).simulate('click');

		expect(onOptionClicked).toBeCalledWith(menuItems[0].id);

		menuItemElements.at(1).simulate('click');

		expect(onOptionClicked).toBeCalledWith(menuItems[1].id);

		menuItemElements.at(2).simulate('click');

		expect(onOptionClicked).toBeCalledWith(menuItems[2].id);
	});
});
