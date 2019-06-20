import { shallow } from 'enzyme';
import React, { Fragment } from 'react';

import { ToolbarItem } from './ToolbarItem';

describe('<ToolbarItem />', () => {
	it('Should be able to render', () => {
		shallow(
			<ToolbarItem>
				<Fragment />
			</ToolbarItem>
		);
	});

	it('Should set the correct className(s)', () => {
		const toolbarItemComponent = shallow(
			<ToolbarItem>
				<Fragment />
			</ToolbarItem>
		);

		expect(toolbarItemComponent.hasClass('c-toolbar__item')).toEqual(true);
	});

	it('Should correctly pass children', () => {
		const toolbarItemComponent = shallow(
			<ToolbarItem>
				<p id="toolbar-item-test">Testing 123</p>
			</ToolbarItem>
		);

		const paragraph = toolbarItemComponent.find('#toolbar-item-test');

		expect(toolbarItemComponent.html()).toContain(paragraph.html());
	});
});
