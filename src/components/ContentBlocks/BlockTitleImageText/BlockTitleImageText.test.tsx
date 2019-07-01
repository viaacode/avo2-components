import React from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockTitleImageText } from './BlockTitleImageText';
import { blockImageTextExample } from '../BlockImageTitleTextButton/BlockImageText.test';

const imageSource = 'https://source.unsplash.com/random/500x200';
const loremIpsumText = loremIpsum({ count: 10 });

export const blockTitleImageTextExample = <BlockTitleImageText
	imageSource={imageSource}
	imageDescription="random unsplash image"
	title="Title"
	text={loremIpsumText}
></BlockTitleImageText>;

describe('<BlockTitleImageText />', () => {
	it('Should be able to render', () => {
		shallow(blockTitleImageTextExample);
	});

	it('Should render the thumbnail slot correctly', () => {
		const component = mount(blockTitleImageTextExample);

		const imgElement = component.find('img');

		expect(imgElement.prop('src')).toEqual(imageSource);
	});

	it('Should render the text slot correctly', () => {
		const component = mount(blockTitleImageTextExample);

		const h2Element = component.find('h2');

		expect(h2Element.html()).toContain(`>Title<`);
	});

	it('Should set the correct className', () => {
		const component = shallow(blockImageTextExample);

		const containerElement = component.childAt(0);

		expect(component.hasClass('u-spacer-top-l')).toEqual(true);
		expect(containerElement.hasClass('o-container--small')).toEqual(true);
	});

});
