import React, { cloneElement, Fragment, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

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
			<DatePickerStoryComponent>
				<DatePicker onChange={action('onChange')} />
			</DatePickerStoryComponent>
			<div className="u-spacer-bottom" />
			<DatePickerStoryComponent>
				<DatePicker disabled />
			</DatePickerStoryComponent>
		</Fragment>
	));
