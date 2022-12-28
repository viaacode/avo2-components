import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import React from 'react';

import { BlockRichText } from './BlockRichText';
import { RICH_TEXT_MOCK } from './BlockRichText.mock';

storiesOf('blocks/BlockRichText', module)
	.addParameters({ jest: ['BlockRichText'] })
	.add('BlockRichText', () => <BlockRichText elements={RICH_TEXT_MOCK} />)
	.add('BlockRichText Two Columns', () => (
		<BlockRichText elements={[RICH_TEXT_MOCK, RICH_TEXT_MOCK]} />
	))
	.add('BlockRichText long text', () => (
		<BlockRichText elements={[{ content: loremIpsum({ count: 20 }) }]} maxTextWidth="800px" />
	))
	.add('BlockRichText with centering', () => (
		<BlockRichText
			elements={[
				{
					content: `<p style='text-align:center'>Simpel! Drie <a href='/start' target=''>stappen</a> naar een geslaagde opdracht:</p>`,
				},
			]}
		/>
	));
