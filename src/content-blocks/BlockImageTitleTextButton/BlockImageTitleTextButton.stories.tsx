import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

import imageSource from '../../../static/images/1280x720.jpg';

import { BlockImageTitleTextButton } from './BlockImageTitleTextButton';

const loremIpsumText = loremIpsum({ count: 10 });

export const blockImageTitleTextButtonExample = (
	<BlockImageTitleTextButton
		imageSource={imageSource}
		imageDescription="image showing the default dimensions on a grey background"
		title="Title"
		text={loremIpsumText}
		buttonLabel="Goto video"
	/>
);

storiesOf('blocks/BlockImageTitleTextButton', module)
	.addParameters({ jest: ['BlockImageTitleTextButton'] })
	.add('BlockImageTitleTextButton', () => blockImageTitleTextButtonExample);
