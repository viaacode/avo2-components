import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockRichText } from './BlockRichText';
import { BlockRichTextExample } from './BlockRichText.test';

storiesOf('BlockRichText', module)
	.addParameters({ jest: ['BlockRichText'] })
	.add('BlockRichText', () => BlockRichTextExample);
