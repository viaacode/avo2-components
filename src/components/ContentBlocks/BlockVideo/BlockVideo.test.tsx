import React from 'react';

import { mount, shallow } from 'enzyme';

import { BlockVideo } from './BlockVideo';

const videoIframeSource =
	'https://player.vimeo.com/video/113716040?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0';

export const blockVideoExampleExample = <BlockVideo videoIframeSource={videoIframeSource} />;

describe('<BlockVideo />', () => {
	it('Should be able to render', () => {
		shallow(blockVideoExampleExample);
	});

	it('Should render the iframe correctly', () => {
		const component = mount(blockVideoExampleExample);

		const iframeElement = component.find('iframe');

		expect(iframeElement.prop('src')).toEqual(videoIframeSource);
	});

	it('Should set the correct className', () => {
		const component = mount(blockVideoExampleExample);

		const container = component.find('div').at(0);
		const videoWrapper = component.find('div').at(1);

		expect(container.hasClass('o-container-vertical')).toEqual(true);

		expect(videoWrapper.hasClass('c-video-wrapper')).toEqual(true);
		expect(videoWrapper.hasClass('c-video-wrapper--aspect-16-9')).toEqual(true);
	});
});
