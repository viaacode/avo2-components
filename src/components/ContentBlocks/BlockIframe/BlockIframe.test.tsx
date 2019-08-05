import React from 'react';

import { shallow } from 'enzyme';

import { BlockIframe } from './BlockIframe';

describe('<BlockIframe />', () => {
	it('Should be able to render', () => {
		shallow(<BlockIframe />);
	});

	it('Should correctly set the wrapper `className`', () => {
		const blockIframeComponent = shallow(<BlockIframe />);

		expect(blockIframeComponent.hasClass('c-video-wrapper')).toEqual(true);
	});

	it('Should correctly set the wrapper `className` for the aspect ratios', () => {
		const blockIframe32Component = shallow(<BlockIframe ratio="3:2" />);
		const blockIframe169Component = shallow(<BlockIframe ratio="16:9" />);

		expect(blockIframe32Component.hasClass('c-video-wrapper--aspect-2-3')).toEqual(true);
		expect(blockIframe169Component.hasClass('c-video-wrapper--aspect-16-9')).toEqual(true);
	});

	it('Should correctly pass on the supported iframe-props', () => {
		const iframeProps = {
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
