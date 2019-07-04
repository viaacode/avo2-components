import React from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { BlockText } from './BlockText';

const markdownAndHtmlString = `
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
  `;
export const BlockTextExample = <BlockText text={markdownAndHtmlString} />;

storiesOf('BlockText', module)
	.addParameters({ jest: ['BlockText'] })
	.add('BlockText', () => BlockTextExample);
