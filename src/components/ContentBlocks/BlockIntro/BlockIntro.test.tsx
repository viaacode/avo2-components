import React from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockIntro } from './BlockIntro';

const title = 'Page title';
const text = loremIpsum({ count: 3 });
export const BlockIntroExample = <BlockIntro title={title} text={text} />;

describe('<BlockIntro />', () => {
	it('Should be able to render', () => {
		shallow(BlockIntroExample);
	});

	it('Should render the title correctly', () => {
		const component = shallow(BlockIntroExample);

		const h1Element = component.find('h1');

		expect(h1Element.html()).toContain(`>${title}<`);
	});

	it('Should not render the title if none is passed', () => {
		const component = shallow(<BlockIntro text={text} />);

		expect(component.html()).not.toContain(`</h1>`);
	});

	it('Should render the subtitle correctly', () => {
		const component = shallow(BlockIntroExample);

		const pElement = component.find('p');

		expect(pElement.html()).toContain(`>${text}<`);
	});

	it('Should set the correct className', () => {
		const component = mount(BlockIntroExample);

		const verticalContainer = component.find('section').at(0);
		const horizontalContainer = component.find('div').at(0);
		const h1Element = component.find('h1');
		const pElement = component.find('p');

		expect(verticalContainer.hasClass('o-container-vertical')).toEqual(true);
		expect(verticalContainer.hasClass('o-container-vertical-page-intro')).toEqual(true);

		expect(horizontalContainer.hasClass('o-container')).toEqual(true);
		expect(horizontalContainer.hasClass('o-container--medium')).toEqual(true);

		expect(h1Element.hasClass('o-container-vertical-title__title')).toEqual(true);

		expect(pElement.hasClass('o-container-vertical-intro__intro')).toEqual(true);
	});
});
