import React from 'react';

import { shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockIntro } from './BlockIntro';

const text = loremIpsum({ count: 30 });

describe('<BlockIntro />', () => {
	it('Should be able to render', () => {
		shallow(<BlockIntro text={text} />);
	});

	it('Should render the title correctly', () => {
		const component = shallow(<BlockIntro text={text} />);

		const paragraphElement = component.find('p');

		expect(paragraphElement.html()).toContain(`>${text}<`);
	});

	it('Should set the correct className', () => {
		const component = shallow(<BlockIntro text={text} />);

		const divElement = component.find('div');
		const pElement = component.find('p');

		expect(component.hasClass('o-container-vertical')).toEqual(true);
		expect(component.hasClass('o-container-vertical-intro')).toEqual(true);

		expect(divElement.hasClass('o-container')).toEqual(true);
		expect(divElement.hasClass('o-container--medium')).toEqual(true);

		expect(pElement.hasClass('o-container-vertical-intro__intro')).toEqual(true);
	});
});
