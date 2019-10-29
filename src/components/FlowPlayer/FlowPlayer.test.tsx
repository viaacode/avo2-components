import React from 'react';

import { mount, shallow } from 'enzyme';

import { FlowPlayer } from './FlowPlayer';
import { MOCK_FLOW_PLAYER_PROPS } from './FlowPlayer.mock';

const customClass = 'c-video-player-custom';

describe('<FlowPlayer />', () => {
	it('Should be able to render', () => {
		shallow(<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS} />);
	});

	it('Should set the correct className', () => {
		const FlowPlayerComponent = shallow(
			<FlowPlayer className={customClass} {...MOCK_FLOW_PLAYER_PROPS} />
		);

		expect(FlowPlayerComponent.hasClass(customClass)).toEqual(true);
		expect(FlowPlayerComponent.hasClass('c-video-player')).toEqual(true);
	});

	it('Should not render cut-overlay when end is not passed', () => {
		const FlowPlayerComponent = mount(
			<FlowPlayer className={customClass} {...MOCK_FLOW_PLAYER_PROPS} src={null} />
		);

		expect(FlowPlayerComponent.find('.c-cut-overlay')).toHaveLength(1);
	});

	it('Should render cut-overlay when start and end are passed', () => {
		const FlowPlayerComponent = mount(
			<FlowPlayer
				className={customClass}
				{...MOCK_FLOW_PLAYER_PROPS}
				src={null}
				start={0}
				end={100}
			/>
		);

		expect(FlowPlayerComponent.find('.c-cut-overlay')).toHaveLength(1);
	});
});
