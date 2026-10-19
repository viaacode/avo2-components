import { render } from '@testing-library/react';

import { DeadlineIndicator } from './DeadlineIndicator';

describe('<DeadlineIndicator />', () => {
	it('Should be able to render', () => {
		render(<DeadlineIndicator>test</DeadlineIndicator>);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-deadline-indicator-custom';

		const { container } = render(
			<DeadlineIndicator className={customClass}>test</DeadlineIndicator>
		);

		expect(container.firstChild).toHaveClass('c-deadline-indicator');
		expect(container.firstChild).toHaveClass(customClass);
	});

	it('Should set the correct className when passed the `color`-prop', () => {
		const { container } = render(<DeadlineIndicator color="success">test</DeadlineIndicator>);

		expect(container.firstChild).toHaveClass('c-deadline-indicator--success');
	});

	it('Should set the correct className when passed the `shape`-prop', () => {
		const { container } = render(<DeadlineIndicator shape="diamond">test</DeadlineIndicator>);

		expect(container.firstChild).toHaveClass('c-deadline-indicator--diamond');
	});
});
