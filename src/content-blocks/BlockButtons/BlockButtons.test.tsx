import { mount, shallow } from 'enzyme';
import React from 'react';

import { BlockButtons } from './BlockButtons';
import { BUTTONS_MOCK } from './BlockButtons.mock';

describe('<BlockButtons />', () => {
	it('Should be able to render', () => {
		shallow(<BlockButtons buttons={BUTTONS_MOCK} />);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-buttons-custom';
		const ButtonsComponent = <BlockButtons className={customClass} buttons={BUTTONS_MOCK} />;

		expect(shallow(ButtonsComponent).hasClass(customClass)).toBeTruthy();
	});

	it('Should correctly pass on buttons prop', () => {
		const ButtonsComponent = mount(<BlockButtons buttons={BUTTONS_MOCK} />);

		expect(ButtonsComponent.prop('buttons')).toEqual(BUTTONS_MOCK);
	});

	it('Should correctly render ButtonToolbar', () => {
		const ButtonsComponent = mount(<BlockButtons buttons={BUTTONS_MOCK} />);
		const buttonToolbar = ButtonsComponent.find('.c-button-toolbar');

		expect(buttonToolbar.hasClass('c-button-toolbar')).toBeTruthy();
	});
});
