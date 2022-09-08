import { shallow } from 'enzyme';
import React from 'react';

import { DeadlineIndicator } from './DeadlineIndicator';

describe('<DeadlineIndicator />', () => {
	it('Should be able to render', () => {
		shallow(<DeadlineIndicator>test</DeadlineIndicator>);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-deadline-indicator-custom';

		const boxComponent = shallow(
			<DeadlineIndicator className={customClass}>test</DeadlineIndicator>
		);

		expect(boxComponent.hasClass('c-deadline-indicator')).toEqual(true);
		expect(boxComponent.hasClass(customClass)).toEqual(true);
	});

	it('Should set the correct className when passed the `color`-prop', () => {
		const boxComponent = shallow(<DeadlineIndicator color="success">test</DeadlineIndicator>);

		expect(boxComponent.hasClass('c-deadline-indicator--success')).toEqual(true);
	});

	it('Should set the correct className when passed the `shape`-prop', () => {
		const boxComponent = shallow(<DeadlineIndicator shape="diamond">test</DeadlineIndicator>);

		expect(boxComponent.hasClass('c-deadline-indicator--diamond')).toEqual(true);
	});
});
