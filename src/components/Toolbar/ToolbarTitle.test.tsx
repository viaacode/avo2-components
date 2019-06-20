import { shallow } from 'enzyme';
import React, { Fragment } from 'react';

import { ToolbarTitle } from './ToolbarTitle';

describe('<ToolbarTitle />', () => {
	it('Should be able to render', () => {
		shallow(
			<ToolbarTitle>
				<Fragment />
			</ToolbarTitle>
		);
	});

	it('Should set the correct className(s)', () => {
		const toolbarItemComponent = shallow(
			<ToolbarTitle>
				<Fragment />
			</ToolbarTitle>
		);

		expect(toolbarItemComponent.hasClass('c-toolbar__title')).toEqual(true);
	});

	it('Should correctly pass children', () => {
		const toolbarItemComponent = shallow(
			<ToolbarTitle>
				<p id="toolbar-title-test">Testing 123</p>
			</ToolbarTitle>
		);

		const paragraph = toolbarItemComponent.find('#toolbar-title-test');

		expect(toolbarItemComponent.html()).toContain(paragraph.html());
	});
});
