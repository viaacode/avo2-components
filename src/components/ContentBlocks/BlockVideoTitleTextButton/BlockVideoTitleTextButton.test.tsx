import React, { cloneElement } from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockVideoTitleTextButton } from './BlockVideoTitleTextButton';

const loremIpsumText = loremIpsum({ count: 10 });
const videoIframeSource =
	'https://player.vimeo.com/video/113716040?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0';

export const blockVideoTitleTextButtonExample = (
	<BlockVideoTitleTextButton
		videoIframeSource={videoIframeSource}
		title="Title"
		text={loremIpsumText}
		buttonLabel="More info"
	/>
);

describe('<BlockVideoTitleTextButton />', () => {
	it('Should be able to render', () => {
		shallow(blockVideoTitleTextButtonExample);
	});

	it('Should render the iframe correctly', () => {
		const component = mount(blockVideoTitleTextButtonExample);

		const iframeElement = component.find('iframe');

		expect(iframeElement.prop('src')).toEqual(videoIframeSource);
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
		expect(leftColumnElement.hasClass('o-grid-col-6')).toEqual(true);
		expect(rightColumnElement.hasClass('o-grid-col-6')).toEqual(true);
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
