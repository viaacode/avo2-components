import React, { cloneElement } from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockVideoTitleTextButton } from './BlockVideoTitleTextButton';

const loremIpsumText = loremIpsum({ count: 10 });
const videoSource =
	'https://archief-media.viaa.be/viaa/TESTBEELD/ad87ac36b4f640dfb0fc57c26397b7aebb4c49785d2e4a7b8c8069aa95c4db16/browse.mp4';

export const blockVideoTitleTextButtonExample = (
	<BlockVideoTitleTextButton
		videoSource={videoSource}
		title="Title"
		text={loremIpsumText}
		buttonLabel="More info"
	/>
);

describe('<BlockVideoTitleTextButton />', () => {
	it('Should be able to render', () => {
		shallow(blockVideoTitleTextButtonExample);
	});

	it('Should render the video correctly', () => {
		const component = mount(blockVideoTitleTextButtonExample);

		const videoElement = component.find('video');

		expect(videoElement.prop('src')).toEqual(videoSource);
	});

	it('Should render the title correctly', () => {
		const component = mount(blockVideoTitleTextButtonExample);

		const h2Element = component.find('h2');

		expect(h2Element.html()).toContain(`>Title<`);
	});

	it('Should render the text correctly', () => {
		const component = mount(blockVideoTitleTextButtonExample);

		const pElement = component.find('p');

		expect(pElement.html()).toContain(`>${loremIpsumText}<`);
	});

	it('Should set the correct className', () => {
		const component = mount(blockVideoTitleTextButtonExample);

		const divs = component.find('div');

		const containerElement = divs.at(0);
		const spacerElement = divs.at(1);
		const gridElement = divs.at(2);
		const leftColumnElement = divs.at(3);
		const rightColumnElement = divs.at(5);
		const contentElement = divs.at(6);

		expect(containerElement.hasClass('o-container')).toEqual(true);
		expect(spacerElement.hasClass('u-spacer')).toEqual(true);
		expect(gridElement.hasClass('o-grid')).toEqual(true);
		expect(leftColumnElement.hasClass('o-grid-col-bp2-6')).toEqual(true);
		expect(rightColumnElement.hasClass('o-grid-col-bp2-6')).toEqual(true);
		expect(contentElement.hasClass('c-content')).toEqual(true);
	});

	it('Should trigger handler when button is clicked', () => {
		const onButtonClick = jest.fn();

		const component = mount(
			cloneElement(blockVideoTitleTextButtonExample, { onClick: onButtonClick })
		);

		const buttonElement = component.find('button');

		buttonElement.simulate('click');

		expect(onButtonClick).toHaveBeenCalled();
		expect(onButtonClick).toHaveBeenCalledTimes(1);
	});
});
