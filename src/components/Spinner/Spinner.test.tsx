import { render } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('<Spinner />', () => {
	it('Should be able to render', () => {
		render(<Spinner locationId="test" />);
	});

	it('Should correctly set the className', () => {
		const customClass = 'c-spinner-custom';

		const { container } = render(<Spinner className={customClass} locationId="test" />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-spinner');
	});

	it('Should have 12 spinner bars', () => {
		const { container } = render(<Spinner locationId="test" />);

		expect(container.querySelectorAll('.c-spinner__bar')).toHaveLength(12);
	});

	it('Should be able to render as a large spinner', () => {
		const { container } = render(<Spinner size="large" locationId="test" />);

		expect(container.firstChild).toHaveClass('c-spinner--large');
	});

	it('Should be able to render a light variant', () => {
		const { container } = render(<Spinner light locationId="test" />);

		expect(container.firstChild).toHaveClass('c-spinner--light');
	});
});
