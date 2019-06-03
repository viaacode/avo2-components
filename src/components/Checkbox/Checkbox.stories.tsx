import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Checkbox } from './Checkbox';

storiesOf('Checkbox', module)
	.addParameters({ jest: ['Checkbox'] })
	.add('Checkbox', () => <Checkbox label="One" id="one" onChanged={action('Checkbox toggled')} />)
	.add('Checkbox default checked', () => (
		<Checkbox label="One" id="one" defaultChecked={true} onChanged={action('Checkbox toggled')} />
	))
	.add('Checkbox default unchecked', () => (
		<Checkbox label="One" id="one" defaultChecked={false} onChanged={action('Checkbox toggled')} />
	));
