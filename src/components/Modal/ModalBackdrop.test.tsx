import { render } from '@testing-library/react';

import { ModalBackdrop } from './ModalBackdrop';

describe('<ModalBackdrop />', () => {
	it('Should be able to render', () => {
		render(<ModalBackdrop />);
	});

	it('Should set the correct className(s)', () => {
		const { container } = render(<ModalBackdrop />);

		expect(container.firstChild).toHaveClass('c-modal-backdrop');
		expect(container.firstChild).not.toHaveClass('c-modal-backdrop--visible');
	});

	it('Should set the correct className when `visible`', () => {
		const { container } = render(<ModalBackdrop visible />);

		expect(container.firstChild).toHaveClass('c-modal-backdrop--visible');
	});
});
