import { render, screen } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('<Avatar />', () => {
	it('Should be able to render', () => {
		render(<Avatar initials="JD" name="John Doe" />);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-avatar-custom';
		const { container } = render(<Avatar className={customClass} initials="JD" />);

		expect(container.firstChild).toHaveClass(customClass);
	});

	it('should set the large class when setting size to large', () => {
		const { container } = render(<Avatar size="large" initials="JD" />);

		expect(container.firstChild).toHaveClass('c-avatar');
		expect(container.firstChild).toHaveClass('c-avatar--large');
		expect(container.firstChild).toHaveTextContent('JD');
	});

	it('should use an icon when no initials or name are passed', () => {
		const { container } = render(<Avatar />);

		expect(container.querySelectorAll('.o-svg-icon--user')).toHaveLength(1);
	});

	it('Should correctly render the name', () => {
		const name = 'Jane Doe';

		const { container } = render(<Avatar initials="JD" name={name} />);

		const nameElements = container.querySelectorAll('p');

		expect(nameElements).toHaveLength(1);
		expect(nameElements[0]).toHaveTextContent(name);
	});

	it('Should correctly render the title', () => {
		const title = 'Chief Executive Officer';

		const { container } = render(<Avatar initials="JD" title={title} />);

		expect(container.querySelector('.u-color-gray-150')).toHaveTextContent(title);
	});

	it('Should correctly render a combination of the name & title', () => {
		const name = 'Jane Doe';
		const title = 'Chief Executive Officer';

		const { container } = render(<Avatar initials="JD" name={name} title={title} />);

		const nameElement = container.querySelector('p');
		const titleElement = container.querySelector('.u-color-gray-150');

		expect(container.firstChild).toHaveClass('c-avatar-and-text');
		expect(nameElement).toHaveTextContent(name);
		expect(titleElement).toHaveTextContent(title);
	});

	it('Should render only the icon when no name or title was passed', () => {
		const { container } = render(<Avatar initials="JD" />);

		expect(container.children).toHaveLength(1);
		expect(container.firstChild).toHaveClass('c-avatar');
		expect(container.firstChild).not.toHaveClass('c-avatar-and-text');
		expect(container.querySelector('p')).not.toBeInTheDocument();
	});

	it('Should correctly pass the necessary props to <AvatarIcon />', () => {
		const initials = 'JD';
		const size = 'small';
		const image = 'https://api.adorable.io/avatars/128/test';

		const { container } = render(<Avatar initials={initials} size={size} image={image} />);

		expect(container.firstChild).toHaveClass('c-avatar--small');
		expect(container.firstChild).toHaveClass('c-avatar--img');
		expect(screen.getByRole('img')).toHaveAttribute('src', image);
	});
});
