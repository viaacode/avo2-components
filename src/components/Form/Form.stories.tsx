import React from 'react';

import { storiesOf } from '@storybook/react';

import { Form } from './Form';
import { FormGroup } from './FormGroup';

storiesOf('Form', module)
	.addParameters({ jest: ['Form', 'FormGroup'] })
	.add('Form', () => (
		<Form>
			<FormGroup name="name" label="Name">
				<input type="text" id="name" />
			</FormGroup>
			<FormGroup name="email" label="Email address">
				<input type="email" id="email" />
			</FormGroup>
			<FormGroup name="pass" label="Password">
				<input type="password" id="pass" />
			</FormGroup>
			<FormGroup name="pref" label="Preference">
				<select id="pref">
					<option>Option A</option>
					<option>Option B</option>
					<option>Option C</option>
				</select>
			</FormGroup>
		</Form>
	))
	.add('Horizontal form', () => (
		<Form type="horizontal">
			<FormGroup name="name" label="Name">
				<input type="text" id="name" />
			</FormGroup>
			<FormGroup name="email" label="Email address">
				<input type="email" id="email" />
			</FormGroup>
			<FormGroup name="pass" label="Password">
				<input type="password" id="pass" />
			</FormGroup>
			<FormGroup name="pref" label="Preference">
				<select id="pref">
					<option>Option A</option>
					<option>Option B</option>
					<option>Option C</option>
				</select>
			</FormGroup>
		</Form>
	))
	.add('Inline form', () => (
		<Form type="inline">
			<FormGroup name="name" label="Name">
				<input type="text" id="name" />
			</FormGroup>
			<FormGroup name="email" label="Email address">
				<input type="email" id="email" />
			</FormGroup>
			<FormGroup name="pass" label="Password">
				<input type="password" id="pass" />
			</FormGroup>
			<FormGroup name="pref" label="Preference">
				<select id="pref">
					<option>Option A</option>
					<option>Option B</option>
					<option>Option C</option>
				</select>
			</FormGroup>
		</Form>
	))
	.add('Form validation', () => (
		<Form>
			<FormGroup name="name" label="Name" error="Please enter a valid name">
				<input type="text" id="name" />
			</FormGroup>
			<FormGroup name="email" label="Email address" error="Please enter a valid e-mail address">
				<input type="email" id="email" />
			</FormGroup>
			<FormGroup name="pass" label="Password" error="Please enter a valid e-mail address">
				<input type="password" id="pass" />
			</FormGroup>
			<FormGroup name="pref" label="Preference">
				<select id="pref">
					<option>Option A</option>
					<option>Option B</option>
					<option>Option C</option>
				</select>
			</FormGroup>
		</Form>
	));
