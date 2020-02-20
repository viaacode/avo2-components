import React, { cloneElement, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers';
import { Button } from '../Button/Button';

import { FlowPlayer } from './FlowPlayer';
import { MOCK_FLOW_PLAYER_PROPS_FULL } from './FlowPlayer.mock';
import { ButtonToolbar } from '..';

const FlowPlayerStoryComponent = ({ children }: { children: ReactElement }) => {
	const [seekTime, setSeekTime] = useState(0);

	return (
		<>
			{cloneElement(children, {
				seekTime,
			})}
			<br />
			<ButtonToolbar>
				<Button label="0 seconds" onClick={() => setSeekTime(0)} />
				<Button label="10 seconds" onClick={() => setSeekTime(10)} />
				<Button label="20 seconds" onClick={() => setSeekTime(20)} />
				<Button label="30 seconds" onClick={() => setSeekTime(30)} />
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
	.add('FlowPlayer Thumbnail met Geknipt', () => (
		<div className="o-grid-col-bp3-4">
			<FlowPlayer {...MOCK_FLOW_PLAYER_PROPS_FULL} src={null} start={10} end={100} />
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
