import { render } from '@testing-library/react';

import { FileInput } from './FileInput';

const customClass = 'c-input-custom';

describe('<TextInput />', () => {
	it('Should be able to render', () => {
		render(<FileInput />);
	});

	it('Should set the correct className', () => {
		const { container } = render(<FileInput className={customClass} />);

		expect(container.firstChild).toHaveClass(customClass);
		expect(container.firstChild).toHaveClass('c-button--file');
	});

	it('Should pass on the id', () => {
		const id = 'test';

		const { container } = render(<FileInput id={id} />);

		expect(container.querySelector('input[type="file"]')).toHaveAttribute('id', id);
	});

	it('Should be able to set the disabled state', () => {
		const { container } = render(<FileInput disabled />);

		expect(container.querySelector('input[type="file"]')).toBeDisabled();
	});

	it('Should be able to set the placeholder value', () => {
		const placeholder = 'this is a test placeholder';

		const { container } = render(<FileInput placeholder={placeholder} />);

		expect(container.querySelector('.c-button__label')).toHaveTextContent(placeholder);
	});
});
