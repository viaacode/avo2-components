import { mount, shallow } from 'enzyme';

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
	const wrapper = mount(alert);

	it('should render', () => {
		shallow(alert);
	});

	it('should pass a custom className', () => {
		expect(shallow(alert).hasClass('c-alert-custom')).toBeTruthy();
	});

	it('should show the correct message', () => {
		expect(wrapper.find('.c-alert__body').text()).toEqual(alertProps.message);
	});

	it('should show an icon depending on the type option', () => {
		const svgElement = wrapper.find('.c-alert__body .o-svg-icon');
		const svgInfoClass = `o-svg-icon-multicolor-circle-${alertProps.type}`;

		expect(svgElement.hasClass(svgInfoClass)).toBeTruthy();
	});

	it('should set the correct className when setting option dark = true', () => {
		const alertComponent = shallow(<Alert {...alertProps} dark />);

		expect(alertComponent.find('.c-alert').hasClass('c-alert--dark')).toBeTruthy();
	});

	it('should show a spinner when the correct type is passed', () => {
		const alertComponent = mount(<Alert {...alertProps} type="spinner" />);
		const svgElement = alertComponent.find('.c-alert__body .o-svg-icon');

		expect(alertComponent.find('.c-spinner')).toHaveLength(1);
		expect(svgElement).toHaveLength(0);
	});
});
