import classnames from 'classnames';
import { format } from 'date-fns';
// https://github.com/Hacker0x01/react-datepicker/issues/1815#issuecomment-513215416
import nl from 'date-fns/locale/nl';
import { padStart, times } from 'lodash-es';
import React, { FunctionComponent } from 'react';
import ReactDatePicker, {
	ReactDatePickerProps,
	registerLocale,
	setDefaultLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

import './DatePicker.scss';

registerLocale('nl', nl);
setDefaultLocale('nl');

export interface DatePickerPropsSchema
	extends DefaultProps,
		Omit<ReactDatePickerProps, 'onChange' | 'value'> {
	disabled?: boolean;
	required?: boolean;
	showTimeInput?: boolean;
	placeholder?: string;
	value?: Date | null;
	defaultHours?: number;
	defaultMinutes?: number;
	onChange?: (date: Date | null) => void;
}

export const DatePicker: FunctionComponent<DatePickerPropsSchema> = ({
	className,
	disabled = false,
	required = false,
	showTimeInput = false,
	placeholder,
	value,
	onChange = () => {
		// noop
	},
}) => {
	const handleChangedDate = (newDate: Date) => {
		const newOutput = new Date(
			newDate.getFullYear(),
			newDate.getMonth(),
			newDate.getDate(),
			value?.getHours(),
			value?.getMinutes()
		);
		onChange(newOutput);
	};

	const handleChangedTime = (newTime: string) => {
		const newOutput = new Date(
			value?.getFullYear() ?? new Date().getFullYear(),
			value?.getMonth() ?? new Date().getMonth(),
			value?.getDate() ?? new Date().getDate(),
			parseInt(newTime?.split(':')?.[0] || '0', 10) ?? value?.getHours(),
			parseInt(newTime?.split(':')?.[1] || '0', 10) ?? value?.getMinutes()
		);
		onChange(newOutput);
	};

	return (
		<div className={classnames(className, 'c-datepicker')}>
			<div className={classnames('c-datepicker--date c-input-with-icon-right')}>
				<ReactDatePicker
					className="c-input"
					selected={value}
					disabled={disabled}
					required={required}
					placeholderText={placeholder || 'dd/mm/yyyy'}
					onChange={handleChangedDate}
					dateFormat={'dd/MM/yyyy'}
				/>
				<Icon name="calendar" />
			</div>
			{showTimeInput && (
				<div className="c-datepicker--time c-input-with-icon-right">
					<select
						value={value ? format(value, 'HH:mm') : undefined}
						onChange={(evt) => handleChangedTime(evt.target.value)}
						className="c-input"
					>
						{[
							...times(24).map((hour) => `${padStart(String(hour), 2, '0')}:00`),
							'23:59',
						].map((time) => (
							<option value={time}>{time}</option>
						))}
					</select>
					<Icon name="clock" />
				</div>
			)}
		</div>
	);
};
