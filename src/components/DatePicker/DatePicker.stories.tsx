import React, { cloneElement, Fragment, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { Spacer } from '../Spacer/Spacer';
import { DatePicker } from './DatePicker';

const DatePickerStoryComponent = ({
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

storiesOf('DatePicker', module)
	.addParameters({ jest: ['DatePicker'] })
	.add('DatePicker', () => (
		<Fragment>
			<Spacer margin="bottom">
				<DatePickerStoryComponent>
					<DatePicker onChange={action('onChange')} />
				</DatePickerStoryComponent>
			</Spacer>
			<DatePickerStoryComponent>
				<DatePicker disabled />
			</DatePickerStoryComponent>
		</Fragment>
	))
	.add('DatePicker placeholder', () => (
		<Fragment>
			<DatePickerStoryComponent>
				<DatePicker placeholder="dd mm yy" onChange={action('onChange')} />
			</DatePickerStoryComponent>
		</Fragment>
	))
	.add('DateTimePicker', () => (
		<Fragment>
			<Spacer margin="bottom">
				<DatePickerStoryComponent>
					<DatePicker showTimeInput onChange={action('onChange')} />
				</DatePickerStoryComponent>
			</Spacer>
		</Fragment>
	));
