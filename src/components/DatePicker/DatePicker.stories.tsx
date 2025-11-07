import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { cloneElement, Fragment, type ReactElement, useState } from 'react';

import { Spacer } from '../Spacer/Spacer.js';

import { DatePicker } from './DatePicker.js';

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

storiesOf('components/DatePicker', module)
	.addParameters({ jest: ['DatePicker'] })
	.add('DatePicker', () => (
		<Fragment>
			<DatePickerStoryComponent>
				<DatePicker onChange={action('onChange')} />
			</DatePickerStoryComponent>
		</Fragment>
	))
	.add('DatePicker disabled', () => (
		<Fragment>
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
	))
	.add('DateTimePicker disabled', () => (
		<Fragment>
			<Spacer margin="bottom">
				<DatePickerStoryComponent>
					<DatePicker showTimeInput onChange={action('onChange')} disabled />
				</DatePickerStoryComponent>
			</Spacer>
		</Fragment>
	))
	.add('DateTimePicker default value', () => (
		<Fragment>
			<Spacer margin="bottom">
				<DatePickerStoryComponent defaultValue={new Date(2022, 7, 12, 23, 59)}>
					<DatePicker showTimeInput onChange={action('onChange')} />
				</DatePickerStoryComponent>
			</Spacer>
		</Fragment>
	))
	.add('DatePicker min value', () => (
		<Fragment>
			<DatePickerStoryComponent>
				<DatePicker showTimeInput onChange={action('onChange')} minDate={new Date()} />
			</DatePickerStoryComponent>
		</Fragment>
	));
