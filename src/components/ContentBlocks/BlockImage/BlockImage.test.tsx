import React from 'react';

import { mount, shallow } from 'enzyme';

import { BlockImage } from './BlockImage';

const imageSource = 'https://source.unsplash.com/random/500x200';

export const BlockImageExample = <BlockImage
	imageSource={imageSource}
	imageDescription="random unsplash image"
></BlockImage>;

describe('<BlockImage />', () => {
	it('Should be able to render', () => {
		shallow(BlockImageExample);
	});

	it('Should render the image correctly', () => {
		const component = mount(BlockImageExample);

		const imgElement = component.find('img');

		expect(imgElement.prop('src')).toEqual(imageSource);
	});

	it('Should set the correct className', () => {
		const component = mount(BlockImageExample);

		const containerElement = component.childAt(0);

		expect(component.hasClass('c-block-vertical')).toEqual(true);
		expect(containerElement.hasClass('c-image--full-width')).toEqual(true);
	});

});
