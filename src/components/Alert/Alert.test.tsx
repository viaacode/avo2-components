import { render } from '@testing-library/react';

import { Alert } from './Alert';
import type { AlertPropsSchema } from './Alert.types';

describe('<Alert />', () => {
	const alertProps: AlertPropsSchema = {
		className: 'c-alert-custom',
		onClose: () => {
			// Ignore empty function
		},
		dark: false,
		message: 'Alert message',
		type: 'info',
	};
	const alert = <Alert {...alertProps} />;

	it('should render', () => {
		render(alert);
	});

	it('should pass a custom className', () => {
		const { container } = render(alert);

		expect(container.firstChild).toHaveClass('c-alert-custom');
	});

	it('should show the correct message', () => {
		const { container } = render(alert);

		expect(container.querySelector('.c-alert__body')?.textContent).toEqual(alertProps.message);
	});

	it('should show an icon depending on the type option', () => {
		const { container } = render(alert);
		const svgElement = container.querySelector('.c-alert__body .o-svg-icon');
		const svgInfoClass = `o-svg-icon-multicolor-circle-${alertProps.type}`;

		expect(svgElement).toHaveClass(svgInfoClass);
	});

	it('should set the correct className when setting option dark = true', () => {
		const { container } = render(<Alert {...alertProps} dark />);

		expect(container.firstChild).toHaveClass('c-alert');
		expect(container.firstChild).toHaveClass('c-alert--dark');
	});

	it('should show a spinner when the correct type is passed', () => {
		const { container } = render(<Alert {...alertProps} type="spinner" />);

		expect(container.querySelectorAll('.c-spinner')).toHaveLength(1);
		expect(container.querySelectorAll('.c-alert__body .o-svg-icon')).toHaveLength(0);
	});
});
