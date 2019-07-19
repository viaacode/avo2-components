import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockVideoTitleTextButton } from './BlockVideoTitleTextButton';

const loremIpsumText = loremIpsum({ count: 14 });
const videoSource =
	'https://archief-media.viaa.be/viaa/TESTBEELD/c44b877a9a7d4b1a99c5b8b676c3aef4ca370f2fe15d42d49b438e71eea6b99d/browse.mp4';

storiesOf('BlockVideoTitleTextButton', module)
	.addParameters({ jest: ['BlockVideoTitleTextButton'] })
	.add('BlockVideoTitleTextButton', () => (
		<BlockVideoTitleTextButton
			videoSource={videoSource}
			title="Title"
			titleLink="http://google.com?q=title"
			text={loremIpsumText}
		/>
	))
	.add('BlockVideoTitleTextButton no title', () => (
		<BlockVideoTitleTextButton videoSource={videoSource} text={loremIpsumText} />
	))
	.add('BlockVideoTitleTextButton fully visible text', () => (
		<BlockVideoTitleTextButton
			videoSource={videoSource}
			title="Title"
			titleLink="http://google.com?q=title"
			text={loremIpsum({ count: 5 })}
		/>
	));
