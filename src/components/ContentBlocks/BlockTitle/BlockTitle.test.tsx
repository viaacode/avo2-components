import { mount, shallow } from 'enzyme';
import React from 'react';

import { BlockTitle } from './BlockTitle';

const customClass = 'c-block-custom';
const title = 'Main title';

export const blockTitleExample = <BlockTitle className={customClass} title={title} />;

describe('<BlockTitle />', () => {
	it('Should be able to render', () => {
		shallow(blockTitleExample);
	});

	it('Should render the title correctly', () => {
		const component = shallow(blockTitleExample);

		const h1Element = component.find('h1');

		expect(h1Element.html()).toContain(`>${title}<`);
	});

	it('Should set the correct className', () => {
		const component = mount(blockTitleExample);

		const verticalContainer = component.find('div').at(0);
		const h1Element = component.find('h1');

		expect(verticalContainer.hasClass(customClass)).toEqual(true);
		expect(verticalContainer.hasClass('o-container-vertical')).toEqual(true);
		expect(verticalContainer.hasClass('o-container-vertical-title')).toEqual(true);
		expect(h1Element.hasClass('o-container-vertical-title__title')).toEqual(true);
	});
});
