import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

import { action } from '../../helpers';
import { Button } from '../Button/Button';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';

import { FlowPlayer } from './FlowPlayer';
import { MOCK_FLOW_PLAYER_PROPS_FULL } from './FlowPlayer.mock';

const FlowPlayerStoryComponent = ({ children }: { children: ReactElement }) => {
	const [seekTime, setSeekTime] = useState(0);

	return (
		<>
			{cloneElement(children, {
				seekTime,
			})}
			<br />
			<ButtonToolbar>
				{[0, 0.001, 10, 20, 30].map(s => (
					<Button label={`${s} seconds`} onClick={() => setSeekTime(s)} />
				))}
			</ButtonToolbar>
		</>
	);
};

storiesOf('components/FlowPlayer', module)
	.addParameters({ jest: ['FlowPlayer'] })
	.add('FlowPlayer Video', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} />
		</div>
	))
	.add('FlowPlayer Thumbnail', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} src={null} />
		</div>
	))
	.add('FlowPlayer without thumbnail', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} poster={undefined} />
		</div>
	))
	.add('FlowPlayer Thumbnail met Geknipt', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} start={60} end={180} />
		</div>
	))
	.add('FlowPlayer logo', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} logo="images/100x100.svg" />
		</div>
	))
	.add('FlowPlayer set time', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayerStoryComponent>
				<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} />
			</FlowPlayerStoryComponent>
		</div>
	))
	.add('FlowPlayer events', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer
				{...MOCK_FLOW_PLAYER_PROPS_FULL}
				onPlay={action('play')}
				onPause={action('pause')}
				onEnded={action('ended')}
				onTimeUpdate={action('timeupdate')}
			/>
		</div>
	));
