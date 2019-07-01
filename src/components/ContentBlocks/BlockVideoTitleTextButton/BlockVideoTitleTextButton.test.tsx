import React, { cloneElement } from 'react';

import { mount, shallow } from 'enzyme';
import { loremIpsum } from 'lorem-ipsum';

import { BlockVideoTitleTextButton } from './BlockVideoTitleTextButton';

const loremIpsumText = loremIpsum({ count: 10 });
const videoIframeSource =
	'https://player.vimeo.com/video/113716040?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0';

export const blockVideoTitleButtonExample = (
	<BlockVideoTitleTextButton
		videoIframeSource={videoIframeSource}
		title="Title"
		text={loremIpsumText}
		buttonLabel="More info"
	/>
);

describe('<BlockVideoTitleTextButton />', () => {
	it('Should be able to render', () => {
		shallow(blockVideoTitleButtonExample);
	});

	it('Should render the iframe correctly', () => {
		const component = mount(blockVideoTitleButtonExample);

		const iframeElement = component.find('iframe');

		expect(iframeElement.prop('src')).toEqual(videoIframeSource);
	});

	it('Should render the title correctly', () => {
		const component = mount(blockVideoTitleButtonExample);

		const h2Element = component.find('h2');

		expect(h2Element.html()).toContain(`>Title<`);
	});

	it('Should render the text correctly', () => {
		const component = mount(blockVideoTitleButtonExample);

		const pElement = component.find('p');

		expect(pElement.html()).toContain(`>${loremIpsumText}<`);
	});

	it('Should set the correct className', () => {
		// const component = mount(blockVideoTitleButtonExample);
		// console.log('component: ', component.html());
		//
		// const containerElement = component.childAt(0).childAt(0);
		// console.log('containerElement: ', containerElement.html());
		// const gridElement = containerElement.childAt(0).childAt(0);
		// console.log('gridElement: ', gridElement.html());
		// const leftColumnElement = gridElement.childAt(0).childAt(0);
		// console.log('leftColumnElement: ', leftColumnElement.html());
		// const rightColumnElement = gridElement.childAt(0).childAt(1);
		// console.log('rightColumnElement: ', rightColumnElement.html());
		// const contentElement = rightColumnElement.childAt(0).childAt(0);
		//
		// expect(component.hasClass('o-container-vertical')).toEqual(true);
		// expect(containerElement.hasClass('o-container')).toEqual(true);
		// expect(gridElement.hasClass('o-grid')).toEqual(true);
		// expect(leftColumnElement.hasClass('o-grid-col-bp2-4')).toEqual(true);
		// expect(rightColumnElement.hasClass('o-grid-col-bp2-8')).toEqual(true);
		// expect(contentElement.hasClass('c-content')).toEqual(true);
	});

	it('Should trigger handler when button is clicked', () => {
		const onButtonClick = jest.fn();

		const component = mount(cloneElement(blockVideoTitleButtonExample, { onClick: onButtonClick }));

		const buttonElement = component.find('button');

		buttonElement.simulate('click');

		expect(onButtonClick).toHaveBeenCalled();
		expect(onButtonClick).toHaveBeenCalledTimes(1);
	});
});
