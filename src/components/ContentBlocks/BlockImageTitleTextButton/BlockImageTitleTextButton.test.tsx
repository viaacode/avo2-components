import React, { cloneElement } from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockImageTitleTextButton } from './BlockImageTitleTextButton';

const imageSource = '/images/1280x720.svg';
const loremIpsumText = loremIpsum({ count: 10 });

export const blockImageTitleTextButtonExample = (
	<BlockImageTitleTextButton
		imageSource={imageSource}
		imageDescription="image showing the default dimensions on a grey background"
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

		const divs = component.find('div');

		const containerVertical = component.find('section').at(0);
		const containerElement = divs.at(0);
		const gridElement = divs.at(1);
		const leftColumnElement = divs.at(2);
		const rightColumnElement = divs.at(4);
		const contentElement = divs.at(5);

		expect(containerVertical.hasClass('o-container-vertical')).toEqual(true);
		expect(containerElement.hasClass('o-container')).toEqual(true);
		expect(gridElement.hasClass('o-grid')).toEqual(true);
		expect(leftColumnElement.hasClass('o-grid-col-bp2-4')).toEqual(true);
		expect(rightColumnElement.hasClass('o-grid-col-bp2-8')).toEqual(true);
		expect(contentElement.hasClass('c-content')).toEqual(true);
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
