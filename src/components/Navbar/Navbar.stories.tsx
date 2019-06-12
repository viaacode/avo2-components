import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { COLORS } from '../../colors';
import { Navbar } from './Navbar';

const content = 'navbar content';

storiesOf('Navbar', module)
	.addParameters({ jest: ['Container'] })
	.add('Navbar', () => (
		<Fragment>
			<Navbar>{content}</Navbar>
			<div style={{ height: '200px' }} />
			<Navbar position="bottom">{content}</Navbar>
		</Fragment>
	))
	.add('Double spacing navbar', () => (
		<Fragment>
			<Navbar spacing="double">{content}</Navbar>
		</Fragment>
	))
	.add('Auto height navbar', () => (
		<Navbar autoHeight={true}>
			<Fragment>{content}</Fragment>
			<br />
			<Fragment>{content}</Fragment>
			<br />
			<Fragment>{content}</Fragment>
			<br />
			<Fragment>{content}</Fragment>
			<br />
			<Fragment>{content}</Fragment>
		</Navbar>
	))
	.add('Navbar backgrounds', () => (
		<Fragment>
			<Navbar color={COLORS.GRAYSCALE.G50}>{content}</Navbar>
			<div style={{ height: '200px' }} />
			<Navbar position="bottom" color={COLORS.PRIMARY.ORANGE}>
				{content}
			</Navbar>
		</Fragment>
	));
