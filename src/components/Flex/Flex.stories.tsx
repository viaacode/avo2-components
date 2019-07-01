import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { FlexItem } from '../FlexItem/FlexItem';
import { Flex } from './Flex';

const content1 = loremIpsum({ count: 1 });
const content2 = loremIpsum({ count: 4 });
const content3 = loremIpsum({ count: 2 });

storiesOf('Flex', module)
	.addParameters({ jest: ['Flex'] })
	.add('Flex', () => (
		<Flex>
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	))
	.add('Flex (horizontal)', () => (
		<Flex orientation="horizontal">
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	))
	.add('Flex (vertical)', () => (
		<Flex orientation="vertical">
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	))
	.add('Flex (center)', () => (
		<Flex center>
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	))
	.add('Flex (vertical - center)', () => (
		<Flex orientation="vertical" center>
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	))
	.add('Flex (horizontal - center)', () => (
		<Flex orientation="horizontal" center>
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	))
	.add('Flex (justify)', () => (
		<Flex justify>
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	))
	.add('Flex (spaced - regular)', () => (
		<Flex spaced="regular">
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	))
	.add('Flex (spaced - wide)', () => (
		<Flex spaced="wide">
			<FlexItem>{content1}</FlexItem>
			<FlexItem>{content2}</FlexItem>
			<FlexItem>{content3}</FlexItem>
		</Flex>
	));
