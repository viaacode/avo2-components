import React from 'react';

import { mount, shallow } from 'enzyme';

import { MOCK_FLOW_PLAYER_PROPS_FULL } from '../../FlowPlayer/FlowPlayer.mock';

import { BlockVideo } from './BlockVideo';

const customClass = 'c-block-custom';
const videoSource =
	'https://archief-media.viaa.be/viaa/TESTBEELD/ad87ac36b4f640dfb0fc57c26397b7aebb4c49785d2e4a7b8c8069aa95c4db16/browse.mp4';

export const blockVideoExampleExample = (
	<BlockVideo className={customClass} flowPlayerProps={MOCK_FLOW_PLAYER_PROPS_FULL} />
);

describe('<BlockVideo />', () => {
	it('Should be able to render', () => {
		shallow(blockVideoExampleExample);
	});

	it('Should set the correct className', () => {
		const component = mount(blockVideoExampleExample);

		const container = component.find('div').at(0);
		const videoWrapper = component.find('div').at(1);

		expect(container.hasClass(customClass)).toEqual(true);
		expect(container.hasClass('o-container-vertical')).toEqual(true);

		expect(videoWrapper.hasClass('c-video-wrapper')).toEqual(true);
		expect(videoWrapper.hasClass('c-video-wrapper--aspect-16-9')).toEqual(true);
	});
});
