import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockVideo } from './BlockVideo';

const videoSource =
	'https://archief-media.viaa.be/viaa/TESTBEELD/ad87ac36b4f640dfb0fc57c26397b7aebb4c49785d2e4a7b8c8069aa95c4db16/browse.mp4';

storiesOf('BlockVideo', module)
	.addParameters({ jest: ['BlockVideo'] })
	.add('BlockVideo', () => <BlockVideo videoSource={videoSource} />);
