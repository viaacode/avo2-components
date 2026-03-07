import { shallow } from 'enzyme';

import { Spinner } from './Spinner';

describe('<Spinner />', () => {
	it('Should be able to render', () => {
		shallow(<Spinner locationId="test" />);
	});

	it('Should correctly set the className', () => {
		const customClass = 'c-spinner-custom';

		const spinnerComponent = shallow(<Spinner className={customClass} locationId="test" />);

		expect(spinnerComponent.hasClass(customClass)).toBeTruthy();
		expect(spinnerComponent.hasClass('c-spinner')).toBeTruthy();
	});

	it('Should have 12 spinner bars', () => {
		const spinnerComponent = shallow(<Spinner locationId="test" />);

		expect(spinnerComponent.find('.c-spinner__bar')).toHaveLength(12);
	});

	it('Should be able to render as a large spinner', () => {
		const spinnerComponent = shallow(<Spinner size="large" locationId="test" />);

		expect(spinnerComponent.hasClass('c-spinner--large')).toBeTruthy();
	});

	it('Should be able to render a light variant', () => {
		const spinnerComponent = shallow(<Spinner light locationId="test" />);

		expect(spinnerComponent.hasClass('c-spinner--light')).toBeTruthy();
	});
});
