import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockVideo } from './BlockVideo';

const videoIframeSource =
	'https://player.vimeo.com/video/113716040?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0';

storiesOf('BlockVideo', module)
	.addParameters({ jest: ['BlockVideo'] })
	.add('BlockVideo', () => <BlockVideo videoIframeSource={videoIframeSource} />);
