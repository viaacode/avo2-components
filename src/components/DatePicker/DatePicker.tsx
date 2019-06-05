import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { isDate } from 'lodash-es';
import React, { ChangeEvent, Component } from 'react';
import { Icon } from '../Icon/Icon';

dayjs.extend(customParseFormat);

export interface DatePickerProps {
	id: string;
	disabled?: boolean;
	placeholder?: string;
	defaultValue?: string;
	onChange?: (date: Date, id: string) => void;
}

export interface DatePickerState {
	date: Date;
}

export class DatePicker extends Component<DatePickerProps, DatePickerState> {
	constructor(props: DatePickerProps) {
		super(props);
		this.state = {
			date: this.getDefaultDateAsDate(),
		};
	}

	onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target) {
			const cleanedDateString: string = event.target.value.replace(/[^0-9]+/g, '/');
			console.log('cleaned date string: ', cleanedDateString);
			const date: Date = dayjs(cleanedDateString, 'DD/MM/YYYY').toDate();
			this.setState({
				date,
			});
			if (this.props.onChange) {
				this.props.onChange(date, this.props.id);
			}
		}
	};

	getDefaultDateAsDate = (): Date => {
		if (isDate(this.props.defaultValue)) {
			return this.props.defaultValue;
		}
		return this.props.defaultValue
			? dayjs(this.props.defaultValue, 'DD/MM/YYYY').toDate()
			: new Date();
	};

	getDefaultDateAsString = (): string => {
		if (isDate(this.props.defaultValue)) {
			return dayjs(this.props.defaultValue).format('YYYY-MM-DD');
		}
		return dayjs(this.props.defaultValue, 'DD/MM/YYYY').format('YYYY-MM-DD') || '';
	};

	render() {
		const { id, disabled, placeholder } = this.props;

		return (
			<div className="o-form-group__controls">
				<div className="c-input-with-icon">
					<input
						className="c-input"
						type="date"
						id={id}
						defaultValue={this.getDefaultDateAsString()}
						disabled={disabled}
						placeholder={placeholder}
						onChange={this.onValueChange}
					/>
					<Icon name="calendar" />
				</div>
			</div>
		);
	}
}
