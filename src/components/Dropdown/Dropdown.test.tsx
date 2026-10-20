import { act, fireEvent, render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import { Button } from '../Button/Button';

import { Dropdown } from './Dropdown';
import { DropdownButton, DropdownContent } from './Dropdown.slots';

// floating-ui positions the menu asynchronously after mounting; flush that update inside act()
const renderDropdown = async (ui: ReactElement) => {
	const result = render(ui);
	await act(async () => {});
	return result;
};

describe('<Dropdown />', () => {
	it('Should be able to render', async () => {
		await renderDropdown(
			<Dropdown label="Show options" isOpen={false}>
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);
	});

	it('Should render correctly with `isOpen = false`', async () => {
		const { container } = await renderDropdown(
			<Dropdown label="Show options" isOpen={false}>
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		expect(container.querySelector('.c-menu--visible')).not.toBeInTheDocument();
		expect(container.querySelector('.c-dropdown__content-closed')).toBeInTheDocument();
	});

	it('Shouldrender correctly with `isOpen = true`', async () => {
		const { container } = await renderDropdown(
			<Dropdown label="Show options" isOpen={true}>
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		expect(container.querySelectorAll('.c-menu')).toHaveLength(1);
		expect(container.querySelectorAll('.c-menu--visible')).toHaveLength(1);
	});

	it('Should call `onOpen` when clicking the button (and `isOpen = false`)', async () => {
		const onOpenHandler = jest.fn();

		await renderDropdown(
			<Dropdown label="Show options" isOpen={false} onOpen={onOpenHandler}>
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		fireEvent.click(screen.getByRole('button'));

		await screen.findByRole('button');
		expect(onOpenHandler).toHaveBeenCalled();
		expect(onOpenHandler).toHaveBeenCalledTimes(1);
	});

	it('Should call `onClose` when clicking the button (and `isOpen = true`)', async () => {
		const onCloseHandler = jest.fn();

		await renderDropdown(
			<Dropdown label="Show options" isOpen={true} onClose={onCloseHandler}>
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		fireEvent.click(screen.getByRole('button', { name: /Show options/ }));

		await screen.findByRole('button', { name: /Show options/ });
		expect(onCloseHandler).toHaveBeenCalled();
		expect(onCloseHandler).toHaveBeenCalledTimes(1);
	});

	it('Should set the correct className for button', async () => {
		await renderDropdown(
			<Dropdown label="Show options" isOpen={false}>
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		expect(screen.getByRole('button')).toHaveClass('c-button');
	});

	it('Should correctly pass `label`', async () => {
		const label = 'Test label';

		const { container } = await renderDropdown(
			<Dropdown label={label} isOpen={false}>
				<div>OneOneOneOneOneOne</div>
				<div>Two</div>
				<div>Three</div>
				<div>Four</div>
				<div>Five</div>
			</Dropdown>
		);

		expect(container.querySelector('.c-button__label')).toHaveTextContent(label);
	});

	it('Should correctly render slots', async () => {
		const label = 'Test label';

		const { container } = await renderDropdown(
			<Dropdown isOpen={false}>
				<DropdownButton>
					<Button label={label} />
				</DropdownButton>
				<DropdownContent>
					<div className="firstItem">OneOneOneOneOneOne</div>
					<div>Two</div>
					<div>Three</div>
					<div>Four</div>
					<div>Five</div>
				</DropdownContent>
			</Dropdown>
		);

		const trigger = container.querySelector('.c-dropdown__trigger') as HTMLElement;
		const menu = container.querySelector('.c-dropdown__menu') as HTMLElement;

		// button slot is rendered inside the trigger, not in the menu
		expect(trigger.querySelector('.c-button__label')).toHaveTextContent(label);
		expect(menu.querySelector('.c-button__label')).not.toBeInTheDocument();
		// default trigger button (with caret icon) is replaced by the slot
		expect(trigger.querySelectorAll('.c-button')).toHaveLength(1);
		expect(trigger.querySelector('.o-svg-icon')).not.toBeInTheDocument();

		// content slot is rendered inside the menu, not in the trigger
		expect(menu.querySelector('.firstItem')).toHaveTextContent('OneOneOneOneOneOne');
		expect(menu).toHaveTextContent('OneOneOneOneOneOneTwoThreeFourFive');
		expect(trigger.querySelector('.firstItem')).not.toBeInTheDocument();
	});

	it('Should correctly pass triggerWidth', async () => {
		const { container: fullWidthContainer } = await renderDropdown(
			<Dropdown label="Show options" isOpen={false} triggerWidth="full-width">
				<div>One</div>
				<div>Two</div>
			</Dropdown>
		);

		const { container: fitContentContainer } = await renderDropdown(
			<Dropdown label="Show options" isOpen={false} triggerWidth="fit-content">
				<div>One</div>
				<div>Two</div>
			</Dropdown>
		);

		expect(fullWidthContainer.querySelector('.c-button')).toHaveClass('c-button--block');
		expect(fullWidthContainer.querySelector('.c-dropdown__trigger')).not.toBeInTheDocument();

		expect(fitContentContainer.querySelector('.c-button')).not.toHaveClass('c-button--block');
		expect(fitContentContainer.querySelector('.c-dropdown__trigger')).toBeInTheDocument();
	});

	it('Should ignore menuWidth (currently not implemented, see TODO in Dropdown.tsx)', async () => {
		const { container: fitContentContainer } = await renderDropdown(
			<Dropdown label="Show options" isOpen={true} menuWidth="fit-content">
				<div>One</div>
				<div>Two</div>
			</Dropdown>
		);
		const { container: fitTriggerContainer } = await renderDropdown(
			<Dropdown label="Show options" isOpen={true} menuWidth="fit-trigger">
				<div>One</div>
				<div>Two</div>
			</Dropdown>
		);

		const fitContentMenu = fitContentContainer.querySelector('.c-dropdown__menu') as HTMLElement;
		const fitTriggerMenu = fitTriggerContainer.querySelector('.c-dropdown__menu') as HTMLElement;

		// The menuWidth prop is commented out in the component, so neither variant sets an inline width.
		// Update this test once menuWidth is re-enabled.
		expect(fitContentMenu).not.toHaveAttribute('style');
		expect(fitTriggerMenu).not.toHaveAttribute('style');
	});
});
