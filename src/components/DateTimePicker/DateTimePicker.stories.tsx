import React, { cloneElement, Fragment, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { DateTimePicker } from './DateTimePicker';

const DateTimePickerStoryComponent = ({
	children,
	defaultValue,
}: {
	children: ReactElement;
	defaultValue?: Date;
}) => {
	const [value, setValue] = useState(defaultValue);

	return cloneElement(children, {
		value,
		onChange: (value: Date) => {
			action('Date changed')(value);
			setValue(value);
		},
	});
};

storiesOf('DateTimePicker', module)
	.addParameters({ jest: ['DateTimePicker'] })
	.add('DateTimePicker', () => (
		<Fragment>
			<DateTimePickerStoryComponent>
				<DateTimePicker id="deadline" onChange={action('onChange')} />
			</DateTimePickerStoryComponent>
			<div className="u-spacer-bottom" />
			<DateTimePickerStoryComponent>
				<DateTimePicker disabled onChange={action('onChange')} />
			</DateTimePickerStoryComponent>
		</Fragment>
	))
	.add('DateTimePicker default time', () => (
		<Fragment>
			<label>Deadline:</label>
			<DateTimePickerStoryComponent>
				<DateTimePicker onChange={action('onChange')} defaultHours={23} defaultMinutes={59} />
			</DateTimePickerStoryComponent>
			<div className="u-spacer-bottom" />
		</Fragment>
	));