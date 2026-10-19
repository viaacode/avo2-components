import { render, screen } from '@testing-library/react';

import { AvatarIcon } from './AvatarIcon';

describe('<AvatarIcon />', () => {
	it('Should be able to render', () => {
		render(<AvatarIcon initials="JD" />);
	});

	it('Should correctly set the className', () => {
		const customClass = 'c-avatar-custom';

		const { container } = render(<AvatarIcon className={customClass} initials="JD" />);

		expect(container.firstChild).toHaveClass('c-avatar');
		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should correctly render the initials', () => {
		const initials = 'FB';

		const { container } = render(<AvatarIcon initials={initials} />);

		expect(container.firstChild).toHaveTextContent(initials);
	});

	it('Should be able to render as a small avatar', () => {
		const { container } = render(<AvatarIcon initials="JD" size="small" />);

		expect(container.firstChild).toHaveClass('c-avatar--small');
	});

	it('Should be able to render an image as the avatar', () => {
		const image = 'https://api.adorable.io/avatars/128/test';

		render(<AvatarIcon initials="JD" image={image} />);

		const imageElements = screen.getAllByRole('img');

		expect(imageElements).toHaveLength(1);
		expect(imageElements[0]).toHaveAttribute('src', image);
	});
});
