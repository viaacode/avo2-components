import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockVideoTitleTextButton } from './BlockVideoTitleTextButton';

const loremIpsumText = loremIpsum({ count: 10 });
const videoIframeSource =
	'https://player.vimeo.com/video/113716040?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0';

storiesOf('BlockVideoTitleTextButton', module)
	.addParameters({ jest: ['BlockVideoTitleTextButton'] })
	.add('BlockVideoTitleTextButton', () => (
		<BlockVideoTitleTextButton
			videoIframeSource={videoIframeSource}
			title="Title"
			text={loremIpsumText}
			buttonLabel="More info"
		/>
	));
