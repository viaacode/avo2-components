import React from 'react';

import { mount, shallow } from 'enzyme';

import { BlockIframe } from './BlockIframe';

describe('<BlockIframe />', () => {
	it('Should be able to render', () => {
		shallow(<BlockIframe title="test" />);
	});

	it('Should correctly set the wrapper `className`', () => {
		const blockIframeComponent = mount(<BlockIframe title="test" />);

		const videoWrapper = blockIframeComponent.find('div').at(0);

		expect(videoWrapper.hasClass('c-video-wrapper')).toEqual(true);
	});

	it('Should correctly set the wrapper `className` for the aspect ratios', () => {
		const blockIframe32Component = mount(<BlockIframe title="test" ratio="3:2" />);
		const blockIframe169Component = mount(<BlockIframe title="test" ratio="16:9" />);

		const video32Wrapper = blockIframe32Component.find('div').at(0);
		const video169Wrapper = blockIframe169Component.find('div').at(0);

		expect(video32Wrapper.hasClass('c-video-wrapper--aspect-3-2')).toEqual(true);
		expect(video169Wrapper.hasClass('c-video-wrapper--aspect-16-9')).toEqual(true);
	});

	it('Should correctly pass on the supported iframe-props', () => {
		const iframeProps = {
			title: 'hello',
			width: 800,
			height: 450,
			margin: 30,
			frameBorder: '0',
			allowFullScreen: true,
			allowTransparency: true,
			seamless: true,
		};

		const blockIframeComponent = shallow(<BlockIframe {...iframeProps} />);

		const iframeElement = blockIframeComponent.find('iframe');
		expect(iframeElement.props()).toMatchObject(iframeProps);
	});
});
