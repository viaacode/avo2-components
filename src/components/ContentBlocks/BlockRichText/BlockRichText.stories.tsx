import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockRichText } from './BlockRichText';

export const BlockRichTextExample = (
	<BlockRichText
		content={`
  # Title


  ${loremIpsum({ count: 5 })}


  * one
  * two
  * three


  <ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
  </ul>
  `}
	/>
);

storiesOf('BlockRichText', module)
	.addParameters({ jest: ['BlockRichText'] })
	.add('BlockRichText', () => BlockRichTextExample);
