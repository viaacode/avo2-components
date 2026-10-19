import { act, render, screen } from '@testing-library/react';

import { AvatarList } from './AvatarList';
import { mockAvatars } from './AvatarList.stories';

// floating-ui computes positions asynchronously after mount; flush those updates inside act()
const flushFloatingUi = () => act(async () => {});

describe('AvatarList', () => {
	const avatarsLength = mockAvatars.length;
	const visibleAvatarsLength = mockAvatars.slice(0, 3).length;
	const hiddenAvatarsLength = mockAvatars.slice(3, avatarsLength).length;

	const customClass = 'c-avatar-list-custom';

	const avatarList = <AvatarList avatars={mockAvatars} className={customClass} isOpen={false} />;

	it('should render', async () => {
		render(avatarList);
		await flushFloatingUi();
	});

	it('should pass a custom className', async () => {
		const { container } = render(avatarList);
		await flushFloatingUi();

		expect(container.firstChild).toHaveClass(customClass);
	});

	it('should only show 3 visible avatars if more are given', async () => {
		const { container } = render(avatarList);
		await flushFloatingUi();

		expect(avatarsLength).toBeGreaterThan(3);
		expect(container.querySelectorAll('.c-tooltip')).toHaveLength(visibleAvatarsLength);
	});

	it('should show a button with the amount of hidden avatars if more than 3 are given', async () => {
		render(avatarList);
		await flushFloatingUi();

		expect(screen.getByRole('button', { name: `+${hiddenAvatarsLength}` })).toHaveClass(
			'c-avatar-dropdown'
		);
	});

	it('should show the hidden avatars when isOpen prop equals true', async () => {
		const { container, rerender } = render(avatarList);
		await flushFloatingUi();

		expect(container.querySelector('.c-menu')).not.toHaveClass('c-menu--visible');

		rerender(<AvatarList avatars={mockAvatars} className={customClass} isOpen={true} />);
		await flushFloatingUi();

		const menuElement = container.querySelector('.c-menu') as HTMLElement;

		expect(menuElement).toHaveClass('c-menu--visible');
		expect(menuElement.querySelectorAll('.c-menu__item')).toHaveLength(hiddenAvatarsLength);
	});
});
