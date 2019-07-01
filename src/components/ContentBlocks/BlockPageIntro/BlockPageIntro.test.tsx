import React from 'react';

import { shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockPageIntro } from './BlockPageIntro';

const title = 'Page title';
const subtitle = loremIpsum({ count: 5 });
export const blockPageIntroExample = <BlockPageIntro title={title} subtitle={subtitle} />;

describe('<BlockPageIntro />', () => {
	it('Should be able to render', () => {
		shallow(blockPageIntroExample);
	});

	it('Should render the title correctly', () => {
		const component = shallow(blockPageIntroExample);

		const h1Element = component.find('h1');

		expect(h1Element.html()).toContain(`>${title}<`);
	});

	it('Should render the subtitle correctly', () => {
		const component = shallow(blockPageIntroExample);

		const pElement = component.find('p');

		expect(pElement.html()).toContain(`>${subtitle}<`);
	});

	it('Should set the correct className', () => {
		const component = shallow(blockPageIntroExample);

		const container = component.at(0).childAt(0);
		const h1Element = component.find('h1');
		const pElement = component.find('p');

		expect(component.hasClass('o-container-vertical')).toEqual(true);
		expect(component.hasClass('o-container-vertical-page-intro')).toEqual(true);

		expect(container.html()).toContain('"o-container"');

		expect(h1Element.hasClass('o-container-vertical-title__title')).toEqual(true);

		expect(pElement.hasClass('o-container-vertical-intro__intro')).toEqual(true);
	});
});
