import React from 'react';

import { mount, shallow } from 'enzyme';

import { BlockProjectsSpotlight } from './BlockProjectsSpotlight';
import { MOCK_SPOTLIGHT_PROJECTS } from './BlockProjectsSpotlight.mock';

const BlockProjectsSpotlightExample = (
	<BlockProjectsSpotlight elements={MOCK_SPOTLIGHT_PROJECTS} navigate={() => {}} />
);

describe('<BlockProjectsSpotlight />', () => {
	it('Should be able to render', () => {
		shallow(BlockProjectsSpotlightExample);
	});

	it('Should set the correct className', () => {
		const component = mount(BlockProjectsSpotlightExample);

		const mainDiv = component.find('div').at(0);
		const projectPrimary = component.find('div').at(1);
		const projectSecondary1 = component.find('div').at(2);
		const projectSecondary2 = component.find('div').at(3);

		expect(mainDiv.hasClass('c-projects-grid')).toEqual(true);
		expect(projectPrimary.hasClass('c-projects-grid-item')).toEqual(true);
		expect(projectSecondary1.hasClass('c-projects-grid-item')).toEqual(true);
		expect(projectSecondary2.hasClass('c-projects-grid-item')).toEqual(true);
	});

	it('Should set the correct title', () => {
		const component = mount(BlockProjectsSpotlightExample);

		const titleElement = component.find('p').at(0);

		expect(titleElement.text()).toEqual('My project');
	});
});
