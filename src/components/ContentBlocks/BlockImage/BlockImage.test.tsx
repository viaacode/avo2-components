import React from 'react';

import { mount, shallow } from 'enzyme';

import { BlockImage } from './BlockImage';

const customClass = 'c-block-custom';
const imageSource = '/images/500x200.svg';

const blockImageExample = (
	<BlockImage
		className={customClass}
		imageSource={imageSource}
		imageDescription="image showing the default dimensions on a grey background"
	/>
);

describe('<BlockImage />', () => {
	it('Should be able to render', () => {
		shallow(blockImageExample);
	});

	it('Should render the image correctly', () => {
		const component = mount(blockImageExample);

		const imgElement = component.find('img');

		expect(imgElement.prop('src')).toEqual(imageSource);
	});

	it('Should set the correct className', () => {
		const component = mount(blockImageExample);

		const verticalContainerElement = component.find('div').at(0);
		const imgWrapperElement = component.find('div').at(1);

		expect(component.hasClass(customClass)).toEqual(true);
		expect(verticalContainerElement.hasClass('c-block-vertical')).toEqual(true);
		expect(imgWrapperElement.hasClass('c-image c-image--full')).toEqual(true);
	});
});
