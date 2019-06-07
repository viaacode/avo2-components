import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { Checkbox } from './Checkbox';

storiesOf('Checkbox', module)
	.addParameters({ jest: ['Checkbox'] })
	.add('Checkbox', () => <Checkbox label="One" onChanged={action('Checkbox toggled')} />)
	.add('Checkbox default checked', () => (
		<Checkbox label="One" defaultChecked={true} onChanged={action('Checkbox toggled')} />
	))
	.add('Checkbox default unchecked', () => (
		<Checkbox label="One" defaultChecked={false} onChanged={action('Checkbox toggled')} />
	));
