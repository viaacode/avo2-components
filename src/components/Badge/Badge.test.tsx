import { render, screen } from '@testing-library/react';

import { Badge } from './Badge';

describe('<Badge />', () => {
	it('Should be able to render', () => {
		render(<Badge text="this is a badge" />);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-badge-custom';
		const { container } = render(<Badge className={customClass} text="this is a badge" />);

		expect(container.firstChild).toHaveClass('c-badge');
		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should set the correct className for every type', () => {
		const { container: defaultContainer } = render(<Badge text="this is a badge" />);
		const { container: successContainer } = render(<Badge text="this is a badge" type="success" />);
		const { container: errorContainer } = render(<Badge text="this is a badge" type="error" />);

		expect(defaultContainer.firstChild).toHaveClass('c-badge--default');
		expect(successContainer.firstChild).toHaveClass('c-badge--success');
		expect(errorContainer.firstChild).toHaveClass('c-badge--error');
	});

	it('Should render the text correctly', () => {
		const text = 'this is a badge';
		render(<Badge text={text} />);

		expect(screen.getByText(text)).toBeInTheDocument();
	});
});
