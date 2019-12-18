import React from 'react';

import { storiesOf } from '@storybook/react';

import { RichText } from './RichText';
import { RICH_TEXT_MOCK } from './RichText.mock';

storiesOf('RichText', module)
	.addParameters({ jest: ['RichText'] })
	.add('RichText', () => <RichText content={RICH_TEXT_MOCK} />)
	.add('RichText Two Columns', () => <RichText content={[RICH_TEXT_MOCK, RICH_TEXT_MOCK]} />);
