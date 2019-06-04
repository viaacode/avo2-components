import React, { Component } from 'react';

export interface CheckboxProps {
	label: string;
	id: string;
	defaultChecked?: boolean;
	onChanged?: (checked: boolean, id: string) => void;
	className?: string;
}

export interface CheckboxState {
	checked: boolean;
}

export class Checkbox extends Component<CheckboxProps, CheckboxState> {
	constructor(props: CheckboxProps, state: CheckboxState) {
		super(props, state);
		this.state = {
			checked: props.defaultChecked || false,
		};
	}

	onChange = () => {
		const checked = !this.state.checked;
		this.setState({ checked });
		if (this.props.onChanged) {
			this.props.onChanged(checked, this.props.id);
		}
	};

	render() {
		const { defaultChecked, id, label, className } = this.props;

		return (
			<div className={`c-checkbox ${className}`}>
				<label>
					<input
						type="checkbox"
						defaultChecked={defaultChecked}
						key={id}
						name={id}
						id={id}
						onClick={this.onChange}
					/>
					{label}
				</label>
			</div>
		);
	}
}
