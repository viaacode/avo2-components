import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockText } from './BlockText';

export const BlockTextExample = (
	<BlockText
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

storiesOf('BlockText', module)
	.addParameters({ jest: ['BlockText'] })
	.add('BlockText', () => BlockTextExample);
