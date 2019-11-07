import classnames from 'classnames';
// https://github.com/Hacker0x01/react-datepicker/issues/1815#issuecomment-513215416
import nl from 'date-fns/locale/nl';
import React, { FunctionComponent } from 'react';
import ReactDatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';

import { DefaultProps } from '../../types';
import { Icon } from '../Icon/Icon';

import { setHours, setMinutes } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

registerLocale('nl', nl);
setDefaultLocale('nl');

export interface DatePickerProps extends DefaultProps {
	id?: string;
	disabled?: boolean;
	required?: boolean;
	showTimeInput?: boolean;
	placeholder?: string;
	value?: Date | null;
	onChange?: (date: Date | null) => void;
}

export const DatePicker: FunctionComponent<DatePickerProps> = ({
	className,
	id,
	disabled = false,
	required = false,
	showTimeInput = false,
	placeholder = 'dd/mm/yyyy',
	value,
	onChange = () => {},
}) => {
	return (
		<div className={classnames(className, 'c-input-with-icon')}>
			<ReactDatePicker
				className="c-input"
				id={id}
				selected={value}
				disabled={disabled}
				required={required}
				placeholderText={placeholder || showTimeInput ? 'dd/mm/yyyy uu:mm' : 'dd/mm/yyyy'}
				onChange={onChange}
				dateFormat={showTimeInput ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy'}
				timeFormat="HH:mm"
				timeIntervals={60}
				timeCaption="tijd"
				showTimeSelect={showTimeInput}
				injectTimes={[setHours(setMinutes(new Date(), 59), 59)]}
			/>
			<Icon name="calendar" />
		</div>
	);
};
