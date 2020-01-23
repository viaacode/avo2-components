import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockRichText } from './BlockRichText';
import { RICH_TEXT_MOCK } from './BlockRichText.mock';

storiesOf('BlockRichText', module)
	.addParameters({ jest: ['BlockRichText'] })
	.add('BlockRichText', () => <BlockRichText elements={RICH_TEXT_MOCK} />)
	.add('BlockRichText Two Columns', () => (
		<BlockRichText elements={[RICH_TEXT_MOCK, RICH_TEXT_MOCK]} />
	));
