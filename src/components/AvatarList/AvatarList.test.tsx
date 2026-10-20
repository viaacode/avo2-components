import { act, render, screen } from '@testing-library/react';

import { AvatarList } from './AvatarList';
import { mockAvatars } from './AvatarList.stories';

// floating-ui computes positions asynchronously after mount; flush those updates inside act()
const flushFloatingUi = () => act(async () => {});

describe('AvatarList', () => {
	const customClass = 'c-avatar-list-custom';

	const avatarList = <AvatarList avatars={mockAvatars} className={customClass} isOpen={false} />;

	it('should render', async () => {
		const { container } = render(avatarList);
		await flushFloatingUi();

		expect(container.firstChild).toBeInTheDocument();
	});

	it('should pass a custom className', async () => {
		const { container } = render(avatarList);
		await flushFloatingUi();

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-avatar--multiple');
	});

	it('should only show 3 visible avatars if more are given', async () => {
		const { container } = render(avatarList);
		await flushFloatingUi();

		expect(container.querySelectorAll('.c-tooltip')).toHaveLength(3);
	});

	it('should render only 1 avatar and no dropdown when 1 avatar is given', async () => {
		const { container } = render(<AvatarList avatars={mockAvatars.slice(0, 1)} isOpen={false} />);
		await flushFloatingUi();

		expect(container.querySelectorAll('.c-tooltip')).toHaveLength(1);
		expect(container.querySelector('.c-avatar-dropdown')).not.toBeInTheDocument();
	});

	it('should render only 2 avatars and no dropdown when 2 avatars are given', async () => {
		const { container } = render(<AvatarList avatars={mockAvatars.slice(0, 2)} isOpen={false} />);
		await flushFloatingUi();

		expect(container.querySelectorAll('.c-tooltip')).toHaveLength(2);
		expect(container.querySelector('.c-avatar-dropdown')).not.toBeInTheDocument();
	});

	it('should show a button with the amount of hidden avatars if more than 3 are given', async () => {
		render(avatarList);
		await flushFloatingUi();

		expect(screen.getByRole('button', { name: '+4' })).toHaveClass('c-avatar-dropdown');
	});

	it('should show the hidden avatars when isOpen prop equals true', async () => {
		const { container, rerender } = render(avatarList);
		await flushFloatingUi();

		expect(container.querySelector('.c-menu')).not.toHaveClass('c-menu--visible');

		rerender(<AvatarList avatars={mockAvatars} className={customClass} isOpen={true} />);
		await flushFloatingUi();

		const menuElement = container.querySelector('.c-menu') as HTMLElement;

		expect(menuElement).toHaveClass('c-menu--visible');
		expect(menuElement.querySelectorAll('.c-menu__item')).toHaveLength(4);
	});
});
