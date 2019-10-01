import { mount, shallow } from 'enzyme';
import React from 'react';

import { VideoWrapper, VideoWrapperProps } from './VideoWrapper';

const videoWrapper = (props: VideoWrapperProps = {}) => (
	<VideoWrapper {...props}>
		<video
			src="https://archief-media.viaa.be/viaa/TESTBEELD/c44b877a9a7d4b1a99c5b8b676c3aef4ca370f2fe15d42d49b438e71eea6b99d/browse.mp4"
			controls
		/>
	</VideoWrapper>
);

describe('<VideoWrapper>', () => {
	it('should be able to render', () => {
		shallow(videoWrapper());
	});

	it('should set the correct className', () => {
		const component = shallow(videoWrapper());

		expect(component.hasClass('c-video-wrapper')).toBeTruthy();
	});

	it('should set the correct className for the aspect ratio', () => {
		const component32 = shallow(videoWrapper({ aspect: '3:2' }));
		const component169 = shallow(videoWrapper({ aspect: '16:9' }));

		expect(component32.hasClass('c-video-wrapper--aspect-3-2')).toBeTruthy();
		expect(component169.hasClass('c-video-wrapper--aspect-16-9')).toBeTruthy();
	});
});
