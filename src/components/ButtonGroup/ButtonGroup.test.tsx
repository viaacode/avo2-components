import { shallow } from 'enzyme';

import { Button } from '../Button/Button.js';

import { ButtonGroup } from './ButtonGroup.js';

describe('<ButtonGroup />', () => {
	it('Should be able to render', () => {
		shallow(
			<ButtonGroup>
				<Button label="test1" />
				<Button label="test2" />
			</ButtonGroup>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-button-group-custom';
		const buttonGroupComponent = shallow(
			<ButtonGroup className={customClass}>
				<Button label="test1" />
				<Button label="test2" />
			</ButtonGroup>
		);

		expect(buttonGroupComponent.hasClass('c-button-group')).toEqual(true);
		expect(buttonGroupComponent.hasClass(customClass)).toEqual(true);
	});
});
