import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { Spacer } from './Spacer';

const content = loremIpsum({ count: 3 });

storiesOf('Spacer', module)
	.addParameters({ jest: ['Spacer'] })
	.add('Spacer', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer>
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer with margin', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer margin="left-large">
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer sizes', () => (
		<Fragment>
			<p>
				<b>none </b>
				{content}
			</p>
			<Spacer margin="small">
				<b>small </b>
				{content}
			</Spacer>
			<Spacer>
				<b>medium </b>
				{content}
			</Spacer>
			<Spacer margin="large">
				<b>large </b>
				{content}
			</Spacer>
			<Spacer margin="extra-large">
				<b>extra-large </b>
				{content}
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer with multiple margins', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer margin={['left-large', 'top-large', 'bottom-large']}>
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	));
