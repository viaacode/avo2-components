import React from 'react';

import { mount, shallow } from 'enzyme';

import { BlockImage } from './BlockImage';

const imageSource = 'https://source.unsplash.com/random/500x200';

export const BlockImageExample = (
	<BlockImage imageSource={imageSource} imageDescription="random unsplash image" />
);

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

		const verticalContainerElement = component.childAt(0);
		const imgWrapperElement = verticalContainerElement.childAt(0);

		expect(verticalContainerElement.hasClass('c-block-vertical')).toEqual(true);
		// hasClass doesn't work for some reason
		expect(imgWrapperElement.html()).toContain('"c-image c-image--full-width"');
	});
});
