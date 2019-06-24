import React, { Fragment } from 'react';

import { loremIpsum } from 'lorem-ipsum';

import { storiesOf } from '@storybook/react';

const content = loremIpsum({ count: 3 });

import { Spacer } from './Spacer';

storiesOf('Spacer', module)
	.addParameters({ jest: ['Spacer'] })
	.add('Spacer (small)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer size="s">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer>
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (large)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer size="l">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (top - small)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="top" size="s">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (top)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="top">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (top - large)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="top" size="l">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (right - small)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="right" size="s">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (right)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="right">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (right - large)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="right" size="l">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (bottom - small)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="bottom" size="s">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (bottom)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="bottom">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (bottom - large)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="bottom" size="l">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (left - small)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="left" size="s">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (left)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="left">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer (left - large)', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer side="left" size="l">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	));
