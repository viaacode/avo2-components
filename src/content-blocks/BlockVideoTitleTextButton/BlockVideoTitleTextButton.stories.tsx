import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

import { flowplayerMock } from '../../__mocks__/flowplayer';

import { BlockVideoTitleTextButton } from './BlockVideoTitleTextButton';

const loremIpsumText = loremIpsum({ count: 14 });

storiesOf('blocks/BlockVideoTitleTextButton', module)
	.addParameters({ jest: ['BlockVideoTitleTextButton'] })
	.add('BlockVideoTitleTextButton', () => (
		<BlockVideoTitleTextButton
			flowPlayerProps={flowplayerMock}
			title="Title"
			titleLink="http://google.com?q=title"
			text={loremIpsumText}
		/>
	))
	.add('BlockVideoTitleTextButton no title', () => (
		<BlockVideoTitleTextButton flowPlayerProps={flowplayerMock} text={loremIpsumText} />
	))
	.add('BlockVideoTitleTextButton fully visible text', () => (
		<BlockVideoTitleTextButton
			flowPlayerProps={flowplayerMock}
			title="Title"
			titleLink="http://google.com?q=title"
			text={loremIpsum({ count: 5 })}
		/>
	))
	.add('BlockVideoTitleTextButton markdown text', () => (
		<BlockVideoTitleTextButton
			flowPlayerProps={flowplayerMock}
			title="Title"
			titleLink="http://google.com?q=title"
			text={'# title\ntest with **bold text**'}
		/>
	));
