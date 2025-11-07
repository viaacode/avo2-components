import { shallow } from 'enzyme';

import { Button } from '../Button/Button.js';

import { ButtonToolbar } from './ButtonToolbar.js';

describe('<ButtonToolbar />', () => {
	it('Should be able to render', () => {
		shallow(
			<ButtonToolbar>
				<Button label="test1" />
				<Button label="test2" />
			</ButtonToolbar>
		);
	});

	it('Should set the correct className', () => {
		const customClass = 'c-button-toolbar-custom';
		const ButtonToolbarComponent = shallow(
			<ButtonToolbar className={customClass}>
				<Button label="test1" />
				<Button label="test2" />
			</ButtonToolbar>
		);

		expect(ButtonToolbarComponent.hasClass('c-button-toolbar')).toEqual(true);
		expect(ButtonToolbarComponent.hasClass(customClass)).toEqual(true);
	});
});
