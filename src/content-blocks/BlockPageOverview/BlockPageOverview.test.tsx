import { mount, shallow } from 'enzyme';
import React from 'react';

import { BlockPageOverview } from './BlockPageOverview';
import { BUTTONS_BUILD_NAVIGATE, BUTTONS_MOCK } from './BlockPageOverview.mock';

describe('<BlockPageOverview />', () => {
	it('Should be able to render', () => {
		shallow(<BlockPageOverview elements={BUTTONS_MOCK} navigate={BUTTONS_BUILD_NAVIGATE} />);
	});

	it('should pass a custom className', () => {
		const customClass = 'c-buttons-custom';
		const ButtonsComponent = (
			<BlockPageOverview
				className={customClass}
				elements={BUTTONS_MOCK}
				navigate={BUTTONS_BUILD_NAVIGATE}
			/>
		);

		expect(shallow(ButtonsComponent).hasClass(customClass)).toBeTruthy();
	});

	it('Should correctly pass on elements prop', () => {
		const ButtonsComponent = mount(
			<BlockPageOverview elements={BUTTONS_MOCK} navigate={BUTTONS_BUILD_NAVIGATE} />
		);

		expect(ButtonsComponent.prop('elements')).toEqual(BUTTONS_MOCK);
	});

	it('Should correctly render Buttons', () => {
		const ButtonsComponent = mount(
			<BlockPageOverview elements={BUTTONS_MOCK} navigate={BUTTONS_BUILD_NAVIGATE} />
		);
		const buttonToolbar = ButtonsComponent.find('.c-button-toolbar');
		const buttons = buttonToolbar.find('.c-button');

		expect(buttons).toHaveLength(2);
	});
});
