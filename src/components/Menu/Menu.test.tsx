import { fireEvent, render, screen } from '@testing-library/react';

import { Menu } from './Menu';
import {
	menuItems,
	menuItemsWithDivider,
	menuItemsWithIcons,
	menuItemsWithSearch,
} from './Menu.mocks';
import type { MenuItemInfoSchema } from './MenuContent/MenuContent';
import { MenuSearchResultContent } from './MenuSearchResultContent/MenuSearchResultContent';

describe('<MenuItem />', () => {
	it('Should be able to render', () => {
		render(<Menu menuItems={menuItems} />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-menu-custom';

		const { container } = render(<Menu className={customClass} menuItems={menuItems} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-menu');
		expect(container.firstChild).toHaveClass('c-menu--visible');
	});

	it('Should render the correct number of menu items', () => {
		const { container } = render(<Menu menuItems={menuItems} />);

		expect(container.querySelectorAll('.c-menu__item')).toHaveLength(menuItems.length);
	});

	it('should render children when given', () => {
		render(
			<Menu>
				<div className="c-custom-content">stuff</div>
			</Menu>
		);

		expect(screen.getByText('stuff')).toHaveClass('c-custom-content');
	});

	it('Should render icons if provided', () => {
		const { container } = render(<Menu menuItems={menuItemsWithIcons} />);

		expect(container.querySelectorAll('.o-svg-icon')).toHaveLength(menuItemsWithIcons.length);
	});

	it('Should render with search results', () => {
		const { container } = render(
			<Menu search>
				<MenuSearchResultContent menuItems={menuItemsWithSearch} />
			</Menu>
		);

		expect(container.firstChild).toHaveClass('c-menu');
		expect(container.firstChild).toHaveClass('c-menu--search-result');
		expect(container.querySelectorAll('.c-menu__item')).toHaveLength(menuItemsWithSearch.length);
	});

	it('Should render no results label if provided', () => {
		const noResultsLabel = 'No results';
		const { container } = render(<Menu menuItems={[]} noResultsLabel={noResultsLabel} />);

		expect(container.querySelector('.c-menu__label')?.textContent).toEqual(noResultsLabel);
	});

	it('Should render the correct number of dividers', () => {
		const { container } = render(<Menu menuItems={menuItemsWithDivider} />);

		expect(container.querySelectorAll('.c-menu__item')).toHaveLength(menuItems.length);
		expect(container.querySelectorAll('.c-menu__divider')).toHaveLength(
			menuItemsWithDivider.length - 1
		);
	});

	it('Should render using custom render function', () => {
		const customRenderFunction = (menuItem: MenuItemInfoSchema) => {
			return (
				<div className="custom-item" key={`menu-search-item-${menuItem.id}`}>
					{menuItem.label}
				</div>
			);
		};

		const { container } = render(
			<Menu menuItems={menuItemsWithDivider} renderItem={customRenderFunction} />
		);

		const customItems = container.querySelectorAll('.custom-item');

		expect(customItems).toHaveLength(menuItems.length);
		expect(customItems[1].textContent).toEqual(menuItems[1].label);
	});

	it('Should call onClick when item is clicked', () => {
		const onClickHandler = jest.fn();

		const { container } = render(<Menu menuItems={menuItems} onClick={onClickHandler} />);

		const secondItem = container.querySelectorAll('.c-menu__item')[1];
		fireEvent.click(secondItem);

		expect(onClickHandler).toHaveBeenCalled();
		expect(onClickHandler).toHaveBeenCalledTimes(1);
		expect(onClickHandler).toHaveBeenCalledWith(menuItems[1].id);
	});
});
