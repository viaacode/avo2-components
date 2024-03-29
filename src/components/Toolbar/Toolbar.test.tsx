import { shallow } from 'enzyme';
import React from 'react';

import { Toolbar } from './Toolbar';
import { ToolbarCenter, ToolbarLeft, ToolbarRight } from './Toolbar.slots';
import { ToolbarItem } from './ToolbarItem/ToolbarItem';

describe('<Toolbar />', () => {
	it('Should be able to render', () => {
		shallow(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
				<ToolbarCenter>
					<ToolbarItem>Center</ToolbarItem>
				</ToolbarCenter>
				<ToolbarRight>
					<ToolbarItem>Right</ToolbarItem>
				</ToolbarRight>
			</Toolbar>
		);
	});

	it('Should set the correct className(s)', () => {
		const customClass = 'c-toolbar-custom';

		const toolbarComponent = shallow(
			<Toolbar className={customClass}>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
				<ToolbarCenter>
					<ToolbarItem>Center</ToolbarItem>
				</ToolbarCenter>
				<ToolbarRight>
					<ToolbarItem>Right</ToolbarItem>
				</ToolbarRight>
			</Toolbar>
		);

		const mainToolbarDiv = toolbarComponent.find('.c-toolbar');
		const leftControlsDiv = toolbarComponent.find('.c-toolbar__left');
		const centerControlsDiv = toolbarComponent.find('.c-toolbar__center');
		const rightControlsDiv = toolbarComponent.find('.c-toolbar__right');

		expect(mainToolbarDiv).toHaveLength(1);
		expect(mainToolbarDiv.hasClass(customClass)).toBeTruthy();
		expect(leftControlsDiv).toHaveLength(1);
		expect(centerControlsDiv).toHaveLength(1);
		expect(rightControlsDiv).toHaveLength(1);
	});

	it('Should set the correct className for size', () => {
		const regularToolbarComponent = shallow(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const mediumToolbarComponent = shallow(
			<Toolbar size="medium">
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarComponent.find('.c-toolbar');
		const mediumToolbarInnerElement = mediumToolbarComponent.find('.c-toolbar');

		expect(regularToolbarInnerElement.hasClass('c-toolbar--medium')).toEqual(false);
		expect(mediumToolbarInnerElement.hasClass('c-toolbar--medium')).toEqual(true);
	});

	it('Should set the correct className for spaced', () => {
		const regularToolbarComponent = shallow(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const spacedToolbarComponent = shallow(
			<Toolbar spaced>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarComponent.find('.c-toolbar');
		const spacedToolbarInnerElement = spacedToolbarComponent.find('.c-toolbar');

		expect(regularToolbarInnerElement.hasClass('c-toolbar--spaced')).toEqual(false);
		expect(spacedToolbarInnerElement.hasClass('c-toolbar--spaced')).toEqual(true);
	});

	it('Should set the correct className for justify', () => {
		const regularToolbarComponent = shallow(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const justifiedToolbarComponent = shallow(
			<Toolbar justify>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarComponent.find('.c-toolbar');
		const justifiedToolbarInnerElement = justifiedToolbarComponent.find('.c-toolbar');

		expect(regularToolbarInnerElement.hasClass('c-toolbar--justified')).toEqual(false);
		expect(justifiedToolbarInnerElement.hasClass('c-toolbar--justified')).toEqual(true);
	});

	it('Should set the correct className for autoHeight', () => {
		const regularToolbarComponent = shallow(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const autoHeightToolbarComponent = shallow(
			<Toolbar autoHeight>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarComponent.find('.c-toolbar');
		const autoHeightToolbarInnerElement = autoHeightToolbarComponent.find('.c-toolbar');

		expect(regularToolbarInnerElement.hasClass('c-toolbar--auto')).toEqual(false);
		expect(autoHeightToolbarInnerElement.hasClass('c-toolbar--auto')).toEqual(true);
	});

	it('Should set the correct className for alignTop', () => {
		const regularToolbarComponent = shallow(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);
		const alignTopToolbarComponent = shallow(
			<Toolbar alignTop>
				<ToolbarLeft>
					<ToolbarItem>Left</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const regularToolbarInnerElement = regularToolbarComponent.find('.c-toolbar');
		const alignTopToolbarInnerElement = alignTopToolbarComponent.find('.c-toolbar');

		expect(regularToolbarInnerElement.hasClass('c-toolbar--align-top')).toEqual(false);
		expect(alignTopToolbarInnerElement.hasClass('c-toolbar--align-top')).toEqual(true);
	});

	it('Should correctly render the left controls', () => {
		const toolbarComponent = shallow(
			<Toolbar>
				<ToolbarLeft>
					<ToolbarItem>
						<p id="test">Hello!</p>
					</ToolbarItem>
				</ToolbarLeft>
			</Toolbar>
		);

		const children = toolbarComponent.find('#test');

		expect(toolbarComponent.find('.c-toolbar__left').children().html()).toContain(
			children.html()
		);

		const leftElement = toolbarComponent.find('.c-toolbar__left');
		const centerElement = toolbarComponent.find('.c-toolbar__center');
		const rightElement = toolbarComponent.find('.c-toolbar__right');

		expect(leftElement).toHaveLength(1);
		expect(centerElement).toHaveLength(0);
		expect(rightElement).toHaveLength(0);
	});

	it('Should correctly render the center controls', () => {
		const toolbarComponent = shallow(
			<Toolbar>
				<ToolbarCenter>
					<ToolbarItem>
						<p id="test">Hello!</p>
					</ToolbarItem>
				</ToolbarCenter>
			</Toolbar>
		);

		const children = toolbarComponent.find('#test');

		expect(toolbarComponent.find('.c-toolbar__center').children().html()).toContain(
			children.html()
		);

		const leftElement = toolbarComponent.find('.c-toolbar__left');
		const centerElement = toolbarComponent.find('.c-toolbar__center');
		const rightElement = toolbarComponent.find('.c-toolbar__right');

		expect(leftElement).toHaveLength(0);
		expect(centerElement).toHaveLength(1);
		expect(rightElement).toHaveLength(0);
	});

	it('Should correctly render the right controls', () => {
		const toolbarComponent = shallow(
			<Toolbar>
				<ToolbarRight>
					<ToolbarItem>
						<p id="test">Hello!</p>
					</ToolbarItem>
				</ToolbarRight>
			</Toolbar>
		);

		const children = toolbarComponent.find('#test');

		expect(toolbarComponent.find('.c-toolbar__right').children().html()).toContain(
			children.html()
		);

		const leftElement = toolbarComponent.find('.c-toolbar__left');
		const centerElement = toolbarComponent.find('.c-toolbar__center');
		const rightElement = toolbarComponent.find('.c-toolbar__right');

		expect(leftElement).toHaveLength(0);
		expect(centerElement).toHaveLength(0);
		expect(rightElement).toHaveLength(1);
	});
});
