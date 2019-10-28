import React from 'react';

import { storiesOf } from '@storybook/react';

import { loremIpsum } from 'lorem-ipsum';

import { Text } from './Text';

const content = loremIpsum({ count: 10 });

storiesOf('Text', module)
	.addParameters({ jest: ['Text'] })
	.add('Text', () => <Text>{content}</Text>)
	.add('Text with element as child', () => (
		<Text>
			<a href="http//www.viaa.be">{content}</a>
		</Text>
	));
