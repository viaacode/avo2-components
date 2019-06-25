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
			<Spacer margin={['left-small']}>
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	))
	.add('Spacer with multiple margins', () => (
		<Fragment>
			<p>{content}</p>
			<Spacer margin={['left-small', 'top-large']}>
				<p>{content}</p>
			</Spacer>
			<p>{content}</p>
		</Fragment>
	));
