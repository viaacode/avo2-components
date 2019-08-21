import { mount, shallow } from 'enzyme';
import React from 'react';

import { Menu } from '../..';
import { MenuSearchResult } from './MenuSearchResult';
import { MenuSearchResultItemInfo } from './MenuSearchResultContent';

const menuItems: MenuSearchResultItemInfo[] = [
	{ label: 'WK Voetbal', id: 0, type: 'collection' },
	{ label: 'Wereldkampioenschap Voetbal 2018', id: 1, type: 'collection' },
	{ label: 'Journaal: voetbij bij jongeren', id: 2, type: 'bundle' },
	{ label: 'Op één: voetbal', id: 3, type: 'video' },
	{ label: 'Ketnet online: interview wereldbeker voetbal', id: 4, type: 'audio' },
];

describe('<MenuItem />', () => {
	it('Should be able to render', () => {
		shallow(<MenuSearchResult menuItems={menuItems} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-menu-search-result-custom';

		const menuComponent = mount(<MenuSearchResult className={customClass} menuItems={menuItems} />);

		const mainDivElement = menuComponent.find('div').at(0);

		expect(mainDivElement.hasClass(customClass)).toEqual(true);
		expect(mainDivElement.hasClass('c-menu')).toEqual(true);
		expect(mainDivElement.hasClass('c-menu--search-result')).toEqual(true);
		expect(mainDivElement.hasClass('c-menu--visible')).toEqual(true);
	});

	it('Should render the correct number of menu items', () => {
		const menuComponent = mount(<MenuSearchResult menuItems={menuItems} />);

		expect(menuComponent.find('.c-menu__item').length).toEqual(menuItems.length);
	});

	it('Should render the correct icons', () => {
		const menuComponent = mount(<MenuSearchResult menuItems={menuItems} />);

		expect(menuComponent.find('.o-svg-icon-collection').length).toEqual(2);
		expect(menuComponent.find('.o-svg-icon-bundle').length).toEqual(1);
		expect(menuComponent.find('.o-svg-icon-video').length).toEqual(1);
		expect(menuComponent.find('.o-svg-icon-audio').length).toEqual(1);
	});

	it('Should render no results label if provided', () => {
		const noResultsLabel = 'No results';
		const menuComponent = mount(
			<MenuSearchResult menuItems={[]} noResultsLabel={noResultsLabel} />
		);

		expect(menuComponent.find('.c-menu__label').text()).toEqual(noResultsLabel);
	});

	it('Should call onClick when item is clicked', () => {
		const onClickHandler = jest.fn();

		const menuComponent = mount(
			<MenuSearchResult onClick={onClickHandler} menuItems={menuItems} />
		);

		const secondItem = menuComponent.find('.c-menu__item').at(1);
		secondItem.simulate('click');

		expect(onClickHandler).toHaveBeenCalled();
		expect(onClickHandler).toHaveBeenCalledTimes(1);
		expect(onClickHandler).toHaveBeenCalledWith(menuItems[1].id);
	});
});
