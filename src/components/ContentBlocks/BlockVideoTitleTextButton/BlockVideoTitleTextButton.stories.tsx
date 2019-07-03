import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockVideoTitleTextButton } from './BlockVideoTitleTextButton';

const loremIpsumText = loremIpsum({ count: 10 });
const videoSource =
	'https://archief-media.viaa.be/viaa/TESTBEELD/ad87ac36b4f640dfb0fc57c26397b7aebb4c49785d2e4a7b8c8069aa95c4db16/browse.mp4';

storiesOf('BlockVideoTitleTextButton', module)
	.addParameters({ jest: ['BlockVideoTitleTextButton'] })
	.add('BlockVideoTitleTextButton', () => (
		<BlockVideoTitleTextButton
			videoSource={videoSource}
			title="Title"
			text={loremIpsumText}
			buttonLabel="More info"
		/>
	));
