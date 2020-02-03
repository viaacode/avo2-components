import React from 'react';

import { storiesOf } from '@storybook/react';

import { BlockHeading } from './BlockHeading';

storiesOf('blocks/BlockHeading', module)
	.addParameters({ jest: ['BlockHeading'] })
	.add('BlockHeadings', () => (
		<>
			<BlockHeading type="h1">BlockHeading 1</BlockHeading>
			<BlockHeading type="h2">BlockHeading 2</BlockHeading>
			<BlockHeading type="h3">BlockHeading 3</BlockHeading>
			<BlockHeading type="h4">BlockHeading 4</BlockHeading>
		</>
	))
	.add('BlockHeading with element as child', () => (
		<BlockHeading type="h1">
			<a href="https://viaa.be/">BlockHeading with anchor element</a>
		</BlockHeading>
	));
