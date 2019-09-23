import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockVideo } from './BlockVideo';

const videoSource =
	'https://archief-media.viaa.be/viaa/TESTBEELD/c44b877a9a7d4b1a99c5b8b676c3aef4ca370f2fe15d42d49b438e71eea6b99d/browse.mp4';

storiesOf('BlockVideo', module)
	.addParameters({ jest: ['BlockVideo'] })
	.add('BlockVideo', () => <BlockVideo videoSource={videoSource} />);
