import { act, fireEvent, render, screen } from '@testing-library/react';

import { noop } from '../../helpers/noop';
import { IconNameSchema } from '../Icon/Icon.types';
import type { MenuItemInfoSchema } from '../Menu/MenuContent/MenuContent';

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

// floating-ui computes positions asynchronously after mount; flush those updates inside act()
const flushFloatingUi = () => act(async () => {});

describe('<BooleanCheckboxDropdown />', () => {
	it('Should be able to render', async () => {
		render(
			<MoreOptionsDropdown
				isOpen={true}
				onOpen={noop}
				onClose={noop}
				menuItems={menuItems}
				onOptionClicked={noop}
			/>
		);
		await flushFloatingUi();
	});

	it('Should not render if no options are provided', async () => {
		const { container } = render(
			<MoreOptionsDropdown
				isOpen={true}
				onOpen={noop}
				onClose={noop}
				menuItems={[]}
				onOptionClicked={noop}
			/>
		);
		await flushFloatingUi();

		expect(container).toBeEmptyDOMElement();
	});

	it('Should call `onChange` when toggling checkbox', async () => {
		const onOptionClicked = jest.fn();

		render(
			<MoreOptionsDropdown
				isOpen={true}
				onOpen={noop}
				onClose={noop}
				menuItems={menuItems}
				onOptionClicked={onOptionClicked}
			/>
		);
		await flushFloatingUi();

		fireEvent.click(screen.getByText('Add'));

		expect(onOptionClicked).toHaveBeenCalledWith(menuItems[0].id);

		fireEvent.click(screen.getByText('Delete'));

		expect(onOptionClicked).toHaveBeenCalledWith(menuItems[1].id);

		fireEvent.click(screen.getByText('Archive'));

		expect(onOptionClicked).toHaveBeenCalledWith(menuItems[2].id);
	});
});
