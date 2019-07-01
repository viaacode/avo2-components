import { shallow } from 'enzyme';
import React from 'react';

import { BlockSubtitle } from './BlockSubtitle';

const subtitle = 'Subtitle';
export const blockSubtitleExample = <BlockSubtitle subtitle={subtitle} />;

describe('<BlockSubtitle />', () => {
	it('Should be able to render', () => {
		shallow(blockSubtitleExample);
	});

	it('Should render the title correctly', () => {
		const component = shallow(blockSubtitleExample);

		const h2Element = component.find('h2');

		expect(h2Element.html()).toContain(`>${subtitle}<`);
	});

	it('Should set the correct className', () => {
		// const component = shallow(blockSubtitleExample);
		//
		// const h2Element = component.find('h2');
		//
		// console.log('component: ', component.html());
		// expect(component.hasClass('o-container-vertical')).toEqual(true);
		// expect(component.hasClass('o-container-vertical-title')).toEqual(true);
		//
		// expect(h2Element.hasClass('o-container-vertical-subtitle__title')).toEqual(true);
	});
});
