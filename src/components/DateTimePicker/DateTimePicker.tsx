import classNames from 'classnames';
import React, { FormEvent, FunctionComponent, useEffect, useState } from 'react';
import { pad } from '../../helpers/pad';
import { DefaultProps } from '../../types';
import { DatePicker } from '../DatePicker/DatePicker';
import { Flex } from '../Flex/Flex';
import { Spacer } from '../Spacer/Spacer';

export interface DateTimePickerProps extends DefaultProps {
	value?: Date | null;
	onChange: (value: Date | null) => void;
	disabled?: boolean;
	defaultHours?: number;
	defaultMinutes?: number;
	id?: string;
}

export const DateTimePicker: FunctionComponent<DateTimePickerProps> = ({
	value,
	onChange,
	id,
	defaultHours,
	defaultMinutes,
	className,
	disabled = false,
}) => {
	const getDatePart = (): Date | null => {
		if (typeof year !== 'undefined' && typeof month !== 'undefined' && typeof day !== 'undefined') {
			const zeroHourTimeszoneDate = new Date();
			zeroHourTimeszoneDate.setHours(0);
			zeroHourTimeszoneDate.setMinutes(0);
			return new Date(year, month, day, 12, 0);
		}
		return null;
	};

	const getTimePart = (hours?: number, minutes?: number): string | '' => {
		return typeof hours !== 'undefined' && typeof minutes !== 'undefined'
			? `${pad(hours, 2)}:${pad(minutes, 2)}`
			: '';
	};

	const [year, setYear] = useState<number | undefined>(value ? value.getFullYear() : undefined);
	const [month, setMonth] = useState<number | undefined>(value ? value.getMonth() : undefined);
	const [day, setDay] = useState<number | undefined>(value ? value.getDate() : undefined);
	const [hours, setHours] = useState<number | undefined>(value ? value.getHours() : undefined);
	const [minutes, setMinutes] = useState<number | undefined>(
		value ? value.getMinutes() : undefined
	);
	const [time, setTime] = useState<string>(getTimePart(defaultHours, defaultMinutes));

	useEffect(() => {
		if (
			typeof year !== 'undefined' &&
			typeof month !== 'undefined' &&
			typeof day !== 'undefined' &&
			typeof hours !== 'undefined' &&
			typeof minutes !== 'undefined' &&
			time.includes(':') &&
			time.split(':').length === 2
		) {
			const newDate = new Date(year, month, day, hours, minutes, 0);
			if (!value || newDate.getTime() !== value.getTime()) {
				onChange(newDate);
			}
		}
	}, [year, month, day, hours, minutes]);

	const handleChange = (changedDate: Date | null, changedTime: string | null) => {
		// let tempYear: number = year;
		// let tempMonth: number = month;
		// let tempDay: number = day;
		// let tempHours: number = hours;
		// let tempMinutes: number = minutes;
		if (changedDate) {
			// Update the date part of the date object
			setYear(changedDate.getFullYear());
			setMonth(changedDate.getMonth());
			setDay(changedDate.getDate());
			if (
				(typeof defaultHours !== 'undefined' || typeof defaultMinutes !== 'undefined') &&
				!changedTime &&
				!hours &&
				!minutes
			) {
				// If a default time was passed and the user changes the date and the time is not set yet,
				// then set the time to the default time
				setHours(defaultHours);
				setMinutes(defaultMinutes);
			}
		} else if (
			changedTime &&
			/^([01][0-9]|2[0-4])?:([0-5][0-9])/g.test(changedTime.replace(/[^0-9:]+/, ''))
		) {
			// Update the time part of the date object
			try {
				const hours = parseInt(changedTime.split(':')[0], 10);
				const minutes = parseInt(changedTime.split(':')[1], 10);
				setHours(hours);
				setMinutes(minutes);
			} catch (err) {
				// Ignore parse errors => value just won't update
			}
		}
	};

	return (
		<Flex className={classNames('c-datetimepicker', className)}>
			<Spacer margin="right-small">
				<DatePicker
					value={getDatePart()}
					onChange={(date: Date | null) => handleChange(date, null)}
					disabled={disabled}
					id={`${id}-date`}
				/>
			</Spacer>
			<input
				className="c-input c-input--w-small"
				id={`${id}-time`}
				type="text"
				value={time || getTimePart(hours, minutes)}
				placeholder="hh:mm"
				disabled={disabled}
				onChange={(evt: FormEvent<HTMLInputElement>) => setTime(evt.currentTarget.value)}
				onBlur={() => setTimeout(() => handleChange(null, time), 0)}
			/>
		</Flex>
	);
};
