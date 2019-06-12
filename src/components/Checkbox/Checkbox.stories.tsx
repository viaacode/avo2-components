import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { Checkbox } from './Checkbox';

storiesOf('Checkbox', module)
	.addParameters({ jest: ['Checkbox'] })
	.add('Checkbox', () => (
		<Fragment>
			<Checkbox label="Sodium" onChange={action('Checkbox toggled')} />
			<br />
			<Checkbox label="Hydrogen" onChange={action('Checkbox toggled')} />
			<br />
			<Checkbox label="Oxygen" onChange={action('Checkbox toggled')} />
			<br />
			<Checkbox label="Nitrogen" onChange={action('Checkbox toggled')} />
		</Fragment>
	))
	.add('Checkbox default checked', () => (
		<Fragment>
			<Checkbox label="Sodium" defaultChecked={true} onChange={action('Checkbox toggled')} />
			<br />
			<Checkbox label="Hydrogen" defaultChecked={true} onChange={action('Checkbox toggled')} />
			<br />
			<Checkbox label="Oxygen" defaultChecked={true} onChange={action('Checkbox toggled')} />
			<br />
			<Checkbox label="Nitrogen" defaultChecked={true} onChange={action('Checkbox toggled')} />
		</Fragment>
	))
	.add('Checkbox default unchecked', () => (
		<Checkbox label="One" defaultChecked={false} onChange={action('Checkbox toggled')} />
	));
