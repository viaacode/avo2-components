import { mount, shallow } from 'enzyme';
import React from 'react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockImageTitleTextButton } from './BlockImageTitleTextButton';
import { blockTitleImageTextExample } from '../BlockTitleImageText/BlockTitleImageText.test';

const imageSource = 'https://source.unsplash.com/random/1280x720';
const loremIpsumText = loremIpsum({ count: 10 });

export const blockImageTitleButtonExample = <BlockImageTitleTextButton
	imageSource={imageSource}
	imageDescription="random unsplash image"
	title="Title"
	text={loremIpsumText}
	buttonLabel="Goto video"
></BlockImageTitleTextButton>;

describe('<BlockImageTitleTextButton />', () => {
	it('Should be able to render', () => {
		shallow(blockImageTitleButtonExample);
	});

	it('Should render the image correctly', () => {
		const component = mount(blockImageTitleButtonExample);

		const imgElement = component.find('img');

		expect(imgElement.prop('src')).toEqual(imageSource);
	});

	it('Should render the title correctly', () => {
		const component = mount(blockImageTitleButtonExample);

		const h2Element = component.find('h2');

		expect(h2Element.html()).toContain(`>Title<`);
	});

	it('Should render the text correctly', () => {
		const component = mount(blockImageTitleButtonExample);

		const pElement = component.find('p');

		expect(pElement.html()).toContain(`>${loremIpsumText}<`);
	});

	it('Should set the correct className', () => {
		const component = shallow(blockTitleImageTextExample);

		const containerElement = component.childAt(0);
		const gridElement = containerElement.childAt(0);
		const leftColumnElement = gridElement.childAt(0);
		const rightColumnElement = gridElement.childAt(1);
		const contentElement = rightColumnElement.childAt(0);

		expect(component.hasClass('o-container-vertical')).toEqual(true);
		expect(containerElement.hasClass('o-container')).toEqual(true);
		expect(gridElement.hasClass('o-grid')).toEqual(true);
		expect(leftColumnElement.hasClass('o-grid-col-bp2-4')).toEqual(true);
		expect(rightColumnElement.hasClass('o-grid-col-bp2-8')).toEqual(true);
		expect(contentElement.hasClass('c-content')).toEqual(true);
	});

	it('Should trigger handler when button is clicked', () => {
		const onButtonClick = jest.fn();

		const component = mount(cloneElement(blockImageTitleButtonExample, { onClick: onButtonClick }));

		const buttonElement = component.find('button');

		buttonElement.simulate('click');

		expect(onButtonClick).toHaveBeenCalled();
		expect(onButtonClick).toHaveBeenCalledTimes(1);
	});
});
