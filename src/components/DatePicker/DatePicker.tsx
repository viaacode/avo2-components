import classnames from 'classnames';
import { isValid, parse, setHours, setMinutes } from 'date-fns';
// https://github.com/Hacker0x01/react-datepicker/issues/1815#issuecomment-513215416
import nl from 'date-fns/locale/nl';
import React, { FunctionComponent } from 'react';
import ReactDatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

import './DatePicker.scss';

registerLocale('nl', nl);
setDefaultLocale('nl');

export interface DatePickerPropsSchema extends DefaultProps {
	disabled?: boolean;
	required?: boolean;
	showTimeInput?: boolean;
	placeholder?: string;
	value?: Date | null;
	onChange?: (date: Date | null) => void;
}

export const DatePicker: FunctionComponent<DatePickerPropsSchema> = ({
	className,
	disabled = false,
	required = false,
	showTimeInput = false,
	placeholder,
	value,
	onChange = () => {},
}) => {
	return (
		<div className={classnames(className, 'c-input-with-icon')}>
			<ReactDatePicker
				className="c-input"
				selected={value}
				disabled={disabled}
				required={required}
				placeholderText={placeholder || (showTimeInput ? 'dd/mm/yyyy uu:mm' : 'dd/mm/yyyy')}
				onChange={onChange}
				dateFormat={showTimeInput ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy'}
				timeFormat="HH:mm"
				timeIntervals={60}
				timeCaption="tijd"
				showTimeSelect={showTimeInput}
				injectTimes={[setHours(setMinutes(new Date(), 59), 23)]}
				strictParsing
				onChangeRaw={(event) => {
					const rawInput = (event.target.value || '').trim().replace(/[^0-9]+/g, '/');
					const newDate = parse(rawInput, 'dd/MM/yyyy', new Date(), { locale: nl });
					if (isValid(newDate)) {
						onChange(newDate);
					}
				}}
			/>
			<Icon name="calendar" />
		</div>
	);
};
