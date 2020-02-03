import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockQuote } from './BlockQuote';

const quoteText =
	'There are only two ways to live your life. ' +
	'One is as though nothing is a miracle. ' +
	'The other is as though everything is a miracle.';
const authorAvatarSource = '/images/50x50.svg';
const authorName = 'Albert Einstein';

storiesOf('blocks/BlockQuote', module)
	.addParameters({ jest: ['BlockTitleImageText'] })
	.add('BlockQuote', () => (
		<BlockQuote
			quoteText={quoteText}
			authorAvatarSource={authorAvatarSource}
			authorName={authorName}
		/>
	))
	.add('BlockQuote no avatar', () => <BlockQuote quoteText={quoteText} authorName={authorName} />);
