import type { Meta, StoryFn } from '@storybook/react';
import { cloneElement, Fragment, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';
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

export default {
	title: 'components/DatePicker',
	parameters: {
		jest: ['DatePicker'],
	},
} as Meta;

export const DatePickerDefault: StoryFn = () => (
	<Fragment>
		<DatePickerStoryComponent>
			<DatePicker onChange={action('onChange')} />
		</DatePickerStoryComponent>
	</Fragment>
);

export const DatePickerDisabled: StoryFn = () => (
	<Fragment>
		<DatePickerStoryComponent>
			<DatePicker disabled />
		</DatePickerStoryComponent>
	</Fragment>
);

export const DatePickerPlaceholder: StoryFn = () => (
	<Fragment>
		<DatePickerStoryComponent>
			<DatePicker placeholder="dd mm yy" onChange={action('onChange')} />
		</DatePickerStoryComponent>
	</Fragment>
);

export const DateTimePicker: StoryFn = () => (
	<Fragment>
		<Spacer margin="bottom">
			<DatePickerStoryComponent>
				<DatePicker showTimeInput onChange={action('onChange')} />
			</DatePickerStoryComponent>
		</Spacer>
	</Fragment>
);

export const DateTimePickerDisabled: StoryFn = () => (
	<Fragment>
		<Spacer margin="bottom">
			<DatePickerStoryComponent>
				<DatePicker showTimeInput onChange={action('onChange')} disabled />
			</DatePickerStoryComponent>
		</Spacer>
	</Fragment>
);

export const DateTimePickerDefaultValue: StoryFn = () => (
	<Fragment>
		<Spacer margin="bottom">
			<DatePickerStoryComponent defaultValue={new Date(2022, 7, 12, 23, 59)}>
				<DatePicker showTimeInput onChange={action('onChange')} />
			</DatePickerStoryComponent>
		</Spacer>
	</Fragment>
);

export const DatePickerMinValue: StoryFn = () => (
	<Fragment>
		<DatePickerStoryComponent>
			<DatePicker showTimeInput onChange={action('onChange')} minDate={new Date()} />
		</DatePickerStoryComponent>
	</Fragment>
);
