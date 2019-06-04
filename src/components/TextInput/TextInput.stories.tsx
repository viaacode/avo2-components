import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { TextInput } from './TextInput';

storiesOf('TextInput', module)
	.addParameters({ jest: ['TextInput'] })
	.add('TextInput', () => (
		<Fragment>
			<TextInput placeholder="Type something here..." onChange={action('onChange')} />
			<div className="u-spacer-bottom" />
			<TextInput disabled placeholder="No typing here..." />
		</Fragment>
	))
	.add('TextInput with icon', () => (
		<Fragment>
			<TextInput icon="search" placeholder="Type something here..." onChange={action('onChange')} />
			<div className="u-spacer-bottom" />
			<TextInput icon="x" disabled placeholder="No typing here..." />
		</Fragment>
	));
