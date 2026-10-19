import type { ReactElement } from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';

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

		expect(container.querySelector('.c-button__label')).toHaveTextContent(label);
		expect(container.querySelector('.firstItem')).toHaveTextContent('OneOneOneOneOneOne');
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
		expect(fitContentContainer.querySelectorAll('.c-dropdown__trigger')).toHaveLength(1);
	});

	it('Should correctly pass menuWidth', async () => {
		const { container } = await renderDropdown(
			<Dropdown label="Show options" isOpen={true} menuWidth="fit-content">
				<div>One</div>
				<div>Two</div>
			</Dropdown>
		);
		const fitContentMenu = container.querySelector('.c-dropdown__menu') as HTMLElement;

		expect(fitContentMenu.style.width).toBe('');
	});
});
