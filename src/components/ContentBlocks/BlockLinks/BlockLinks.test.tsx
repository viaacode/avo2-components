import React from 'react';

import { mount, shallow } from 'enzyme';

import { BlockLinks } from './BlockLinks';

export const links = [
	{ label: 'Google', url: 'http://google.be' },
	{ label: 'Facebook', url: 'http://facebook.com' },
	{ label: 'Twitter', url: 'http://twitter.com' },
];

export const blockLinksExampleExample = <BlockLinks key="footerlinks" links={links} />;

describe('<BlockLinks />', () => {
	it('Should be able to render', () => {
		shallow(blockLinksExampleExample);
	});

	it('Should render the links correctly', () => {
		const component = mount(blockLinksExampleExample);

		const anchorElements = component.find('a');

		expect(anchorElements).toHaveLength(links.length);
		expect(anchorElements.at(0).text()).toEqual(links[0].label);
		expect(anchorElements.at(1).text()).toEqual(links[1].label);
		expect(anchorElements.at(2).text()).toEqual(links[2].label);
		expect(anchorElements.at(0).prop('href')).toEqual(links[0].url);
		expect(anchorElements.at(1).prop('href')).toEqual(links[1].url);
		expect(anchorElements.at(2).prop('href')).toEqual(links[2].url);
	});

	it('Should set the correct className', () => {
		const component = mount(blockLinksExampleExample);

		const divs = component.find('div');

		const verticalContainer = divs.at(0);
		const horizontalContainer = divs.at(1);
		const flexContainer = divs.at(2);
		const ulElement = component.find('ul').at(0);

		expect(verticalContainer.hasClass('o-container-vertical')).toEqual(true);
		expect(verticalContainer.hasClass('o-container-vertical-anchor-links')).toEqual(true);

		expect(horizontalContainer.hasClass('o-container')).toEqual(true);

		expect(flexContainer.hasClass('o-flex')).toEqual(true);
		expect(flexContainer.hasClass('o-flex--horizontal-center')).toEqual(true);

		expect(ulElement.hasClass('c-bordered-list-horizontal')).toEqual(true);
	});
});
