import React from 'react';

import { storiesOf } from '@storybook/react';

import { Quote } from './Quote';

const quote =
	'There are only two ways to live your life. ' +
	'One is as though nothing is a miracle. ' +
	'The other is as though everything is a miracle.';
const authorImage = '/images/50x50.svg';
const authorName = 'Albert Einstein';
const authorInitials = 'AE';

storiesOf('components/Quote', module)
	.addParameters({ jest: ['Quote'] })
	.add('Quote', () => <Quote quote={quote} authorImage={authorImage} authorName={authorName} />)
	.add('Quote no avatar', () => (
		<Quote quote={quote} authorName={authorName} authorInitials={authorInitials} />
	));
