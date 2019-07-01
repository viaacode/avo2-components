import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { Flex } from './Flex';

const content = loremIpsum({ count: 3 });

storiesOf('Flex', module)
	.addParameters({ jest: ['Flex'] })
	.add('Flex', () => (
		<Flex>
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	))
	.add('Flex (horizontal)', () => (
		<Flex orientation="horizontal">
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	))
	.add('Flex (vertical)', () => (
		<Flex orientation="vertical">
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	))
	.add('Flex (center)', () => (
		<Flex center>
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	))
	.add('Flex (vertical - center)', () => (
		<Flex orientation="vertical" center>
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	))
	.add('Flex (horizontal - center)', () => (
		<Flex orientation="horizontal" center>
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	))
	.add('Flex (justify)', () => (
		<Flex justify>
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	))
	.add('Flex (spaced)', () => (
		<Flex spaced>
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	))
	.add('Flex (spaced - wide)', () => (
		<Flex spaced="wide">
			<div>Test</div>
			<div className="o-flex__item">Test</div>
			<div>Test</div>
		</Flex>
	));
