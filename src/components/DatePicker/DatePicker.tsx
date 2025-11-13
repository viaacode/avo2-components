import clsx from 'clsx';
import { format, isValid } from 'date-fns';
// https://github.com/Hacker0x01/react-datepicker/issues/1815#issuecomment-513215416
import nlBe from 'date-fns/locale/nl-BE';
import type React from 'react';
import type { FunctionComponent } from 'react';
import ReactDatePicker, {
	type DatePicker as ReactDatePickerType,
	registerLocale,
	setDefaultLocale,
} from 'react-datepicker';

import { noop } from '../../helpers/noop';
import type { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

import './DatePicker.scss';

registerLocale('nl', nlBe);
setDefaultLocale('nl');

const ReactDatePickerGlobal = ReactDatePicker as unknown as typeof ReactDatePickerType;

export const getMaxDate = () => new Date(9999, 11, 31, 23, 59, 59); // https://meemoo.atlassian.net/browse/AVO-1828

export interface DatePickerPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	disabled?: boolean;
	required?: boolean;
	showTimeInput?: boolean;
	placeholder?: string;
	value?: Date | null;
	defaultTime?: string;
	onChange?: (date: Date | null) => void;
	minDate?: Date;
	maxDate?: Date;
}

export const DatePicker: FunctionComponent<DatePickerPropsSchema> = ({
	className,
	disabled = false,
	required = false,
	showTimeInput = false,
	defaultTime = '00:00',
	placeholder,
	value,
	minDate,
	maxDate = getMaxDate(),
	onChange = noop,
}) => {
	const handleChangedDate = (newDate: Date | null) => {
		try {
			if (!newDate) {
				onChange(null);
				return;
			}
			const newOutput = new Date(
				newDate.getFullYear(),
				newDate.getMonth(),
				newDate.getDate(),
				value?.getHours() ?? parseInt(defaultTime?.split(':')?.[0] || '0', 10),
				value?.getMinutes() ?? parseInt(defaultTime?.split(':')?.[1] || '0', 10)
			);
			if (isValid(newOutput)) {
				onChange(newOutput);
			}
		} catch (_err) {
			// ignore invalid dates
		}
	};

	const handleChangedTime = (newTime: string) => {
		try {
			const newOutput = new Date(
				value?.getFullYear() ?? new Date().getFullYear(),
				value?.getMonth() ?? new Date().getMonth(),
				value?.getDate() ?? new Date().getDate(),
				parseInt(newTime?.split(':')?.[0] || '0', 10) ?? value?.getHours(),
				parseInt(newTime?.split(':')?.[1] || '0', 10) ?? value?.getMinutes()
			);
			if (isValid(newOutput)) {
				onChange(newOutput);
			}
		} catch (_err) {
			// ignore invalid dates
		}
	};

	return (
		<div className={clsx(className, 'avo__c-datepicker')}>
			<div className={clsx('avo__c-datepicker--date c-input-with-icon-right')}>
				<ReactDatePickerGlobal
					className="c-input"
					selected={value}
					disabled={disabled}
					required={required}
					placeholderText={placeholder || 'dd/mm/yyyy'}
					onChange={(newDate) => handleChangedDate(newDate)}
					dateFormat={'dd/MM/yyyy'}
					minDate={minDate}
					maxDate={
						// https://meemoo.atlassian.net/browse/AVO-1828
						getMaxDate().valueOf() <= new Date(maxDate).valueOf() ? getMaxDate() : maxDate
					}
				/>
				<Icon name={IconNameSchema.calendar} />
			</div>
			{showTimeInput && (
				<div className="avo__c-datepicker--time">
					<input
						type="time"
						value={value ? format(value, 'HH:mm') : undefined}
						onChange={(evt) => handleChangedTime(evt.target.value)}
						className="c-input"
						placeholder="uu:mm"
						disabled={disabled}
					/>
				</div>
			)}
		</div>
	);
};
