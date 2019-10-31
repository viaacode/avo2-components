import React from 'react';

import { storiesOf } from '@storybook/react';

import { Heading } from './Heading';

storiesOf('Heading', module)
	.addParameters({ jest: ['Heading'] })
	.add('Headings', () => (
		<>
			<Heading type="h1">Heading 1</Heading>
			<Heading type="h2">Heading 2</Heading>
			<Heading type="h3">Heading 3</Heading>
			<Heading type="h4">Heading 4</Heading>
		</>
	))
	.add('Heading with element as child', () => (
		<Heading type="h1">
			<a href="https://viaa.be/">Heading with anchor element</a>
		</Heading>
	));
