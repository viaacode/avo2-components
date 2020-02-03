import React from 'react';

import { shallow } from 'enzyme';

import { MOCK_FLOW_PLAYER_PROPS } from '../../components/FlowPlayer/FlowPlayer.mock';

import { BlockFlowPlayer } from './BlockFlowPlayer';

const customClass = 'c-block-video-player-custom';

describe('<BlockFlowPlayer />', () => {
	it('Should be able to render', () => {
		shallow(<BlockFlowPlayer {...MOCK_FLOW_PLAYER_PROPS} />);
	});

	it('Should set the correct className', () => {
		const BlockFlowPlayerComponent = shallow(
			<BlockFlowPlayer className={customClass} {...MOCK_FLOW_PLAYER_PROPS} />
		);

		expect(BlockFlowPlayerComponent.hasClass(customClass)).toEqual(true);
	});
});
