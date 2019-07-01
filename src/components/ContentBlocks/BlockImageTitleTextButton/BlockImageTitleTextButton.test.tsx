import React, { cloneElement } from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockImageTitleTextButton } from './BlockImageTitleTextButton';

const imageSource = 'https://source.unsplash.com/random/1280x720';
const loremIpsumText = loremIpsum({ count: 10 });

export const blockImageTitleTextButtonExample = (
	<BlockImageTitleTextButton
		imageSource={imageSource}
		imageDescription="random unsplash image"
		title="Title"
		text={loremIpsumText}
		buttonLabel="Goto video"
	/>
);

describe('<BlockImageTitleTextButton />', () => {
	it('Should be able to render', () => {
		shallow(blockImageTitleTextButtonExample);
	});

	it('Should render the image correctly', () => {
		const component = mount(blockImageTitleTextButtonExample);

		const imgElement = component.find('img');

		expect(imgElement.prop('src')).toEqual(imageSource);
	});

	it('Should render the title correctly', () => {
		const component = mount(blockImageTitleTextButtonExample);

		const h2Element = component.find('h2');

		expect(h2Element.html()).toContain(`>Title<`);
	});

	it('Should render the text correctly', () => {
		const component = mount(blockImageTitleTextButtonExample);

		const pElement = component.find('p');

		expect(pElement.html()).toContain(`>${loremIpsumText}<`);
	});

	it('Should set the correct className', () => {
		const component = mount(blockImageTitleTextButtonExample);

		const containerElement = component.childAt(0).childAt(0);
		const gridElement = containerElement.childAt(0).childAt(0);
		const leftColumnElement = gridElement.childAt(0).childAt(0);
		const rightColumnElement = gridElement.childAt(0).childAt(1);
		const contentElement = rightColumnElement.childAt(0).childAt(0);

		expect(component.html()).toContain('"o-container-vertical"');
		expect(containerElement.html()).toContain('"o-container"');
		expect(gridElement.html()).toContain('"o-grid"');
		expect(leftColumnElement.html()).toContain('"o-grid-col-bp2-4"');
		expect(rightColumnElement.html()).toContain('"o-grid-col-bp2-8"');
		expect(contentElement.html()).toContain('"c-content"');
	});

	it('Should trigger handler when button is clicked', () => {
		const onButtonClick = jest.fn();

		const component = mount(
			cloneElement(blockImageTitleTextButtonExample, { onClick: onButtonClick })
		);

		const buttonElement = component.find('button');

		buttonElement.simulate('click');

		expect(onButtonClick).toHaveBeenCalled();
		expect(onButtonClick).toHaveBeenCalledTimes(1);
	});
});
