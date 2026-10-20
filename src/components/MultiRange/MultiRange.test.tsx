import { render } from '@testing-library/react';

import { MultiRange } from './MultiRange';

const customClass = 'c-input-custom';

describe('<MultiRange />', () => {
	it('Should be able to render', () => {
		render(<MultiRange />);
	});

	it('Should set the correct className', () => {
		const { container } = render(<MultiRange className={customClass} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-input-range');
	});

	it('Should pass on the id', () => {
		const id = 'test';

		const { container } = render(<MultiRange id={id} />);

		expect(container.firstChild).toHaveAttribute('id', id);
	});

	it('Should be able to set the disabled state', () => {
		const { container } = render(<MultiRange disabled />);

		expect(container.firstChild).toHaveClass('c-input-range__disabled');
	});
});
