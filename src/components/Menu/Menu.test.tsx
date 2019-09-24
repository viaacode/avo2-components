import { mount, shallow } from 'enzyme';
import React from 'react';

import { Menu } from './Menu';
import { MenuItemInfo } from './MenuContent/MenuContent';

const menuItems = [
	{ label: 'Aluminium', id: 'aluminium' },
	{ label: 'Cadmium', id: 'cadmium' },
	{ label: 'Dubnium', id: 'dubnium' },
	{ label: 'Potassium', id: 'potassium' },
];

const menuItemsWithIcons = [
	{ ...menuItems[0], icon: 'circle' },
	{ ...menuItems[1], icon: 'box' },
	{ ...menuItems[2], icon: 'square' },
	{ ...menuItems[3], icon: 'triangle' },
];

const menuItemWithDivider = [
	[{ ...menuItems[0] }, { ...menuItems[1] }],
	[{ ...menuItems[2] }],
	[{ ...menuItems[3] }],
];

describe('<MenuItem />', () => {
	it('Should be able to render', () => {
		shallow(<Menu menuItems={menuItems} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-menu-custom';

		const menuComponent = shallow(<Menu className={customClass} menuItems={menuItems} />);

		expect(menuComponent.hasClass(customClass)).toEqual(true);
		expect(menuComponent.hasClass('c-menu')).toEqual(true);
		expect(menuComponent.hasClass('c-menu--visible')).toEqual(true);
	});

	it('Should render the correct number of menu items', () => {
		const menuComponent = mount(<Menu menuItems={menuItems} />);

		expect(menuComponent.find('.c-menu__item')).toHaveLength(menuItems.length);
	});

	it('should render children when given', () => {
		const menuComponent = mount(
			<Menu>
				<div className="c-custom-content">stuff</div>
			</Menu>
		);

		expect(menuComponent.find('.c-custom-content')).toHaveLength(1);
	});

	it('Should render icons if provided', () => {
		const menuComponent = mount(<Menu menuItems={menuItemsWithIcons} />);

		expect(menuComponent.find('.o-svg-icon')).toHaveLength(menuItemsWithIcons.length);
	});

	it('Should render no results label if provided', () => {
		const noResultsLabel = 'No results';
		const menuComponent = mount(<Menu menuItems={[]} noResultsLabel={noResultsLabel} />);

		expect(menuComponent.find('.c-menu__label').text()).toEqual(noResultsLabel);
	});

	it('Should render the correct number of dividers', () => {
		const menuComponent = mount(<Menu menuItems={menuItemWithDivider} />);

		expect(menuComponent.find('.c-menu__item')).toHaveLength(menuItems.length);
		expect(menuComponent.find('.c-menu__divider')).toHaveLength(menuItemWithDivider.length - 1);
	});

	it('Should render using custom render function', () => {
		const customRenderFunction = (menuItem: MenuItemInfo) => {
			return (
				<div className="custom-item" key={`menu-search-item-${menuItem.id}`}>
					{menuItem.label}
				</div>
			);
		};

		const menuComponent = mount(
			<Menu menuItems={menuItemWithDivider} renderItem={customRenderFunction} />
		);

		expect(menuComponent.find('.custom-item')).toHaveLength(menuItems.length);
		expect(
			menuComponent
				.find('.custom-item')
				.at(1)
				.text()
		).toEqual(menuItems[1].label);
	});

	it('Should call onClick when item is clicked', () => {
		const onClickHandler = jest.fn();

		const menuComponent = mount(<Menu menuItems={menuItems} onClick={onClickHandler} />);

		const secondItem = menuComponent.find('.c-menu__item').at(1);
		secondItem.simulate('click');

		expect(onClickHandler).toHaveBeenCalled();
		expect(onClickHandler).toHaveBeenCalledTimes(1);
		expect(onClickHandler).toHaveBeenCalledWith(menuItems[1].id);
	});
});
