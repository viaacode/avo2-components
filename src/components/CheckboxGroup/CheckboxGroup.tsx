import { compact, fromPairs, map } from 'lodash-es';
import React, { Component } from 'react';
import { setPartialState } from '../../helpers/setPartialState';
import { Checkbox } from '../Checkbox/Checkbox';

export interface CheckboxOption {
	label: string;
	id: string;
	checked: boolean;
}

export interface CheckboxGroupProps {
	label: string;
	id: string;
	options: CheckboxOption[];
	collapsedItemCount?: number;
	onChanged?: (checkedOptions: string[], id: string) => void;
}

export interface CheckboxGroupState {
	checkedStates: { [checkboxId: string]: boolean };
	showCollapsed: boolean;
}

export class CheckboxGroup extends Component<CheckboxGroupProps, CheckboxGroupState> {
	constructor(props: CheckboxGroupProps, state: CheckboxGroupState) {
		super(props, state);
		this.state = {
			checkedStates: fromPairs(
				props.options.map((option: CheckboxOption) => [option.id, option.checked])
			),
			showCollapsed: false,
		};
	}

	handleToggle = async (checked: boolean, id: string) => {
		await setPartialState(this, `checkedStates.${id}`, checked);
		if (this.props.onChanged) {
			this.props.onChanged(
				compact(map(this.state.checkedStates, (value: boolean, key: string) => value && key)),
				this.props.id
			);
		}
	};

	handleShowCollapsedClick = () => {
		this.setState({
			showCollapsed: !this.state.showCollapsed,
		});
	};

	render() {
		const { options, label } = this.props;
		const splitCount = this.props.collapsedItemCount || Math.min(options.length, 10);
		const showExpandToggle = splitCount < options.length;

		return (
			<div className="o-form-group-layout o-form-group-layout--standard">
				<div className="o-form-group">
					{label ? <label className="o-form-group__label">{label}</label> : null}
					<div className="o-form-group__controls">
						<div className="c-checkbox-group">
							{options.map(
								(option: CheckboxOption, index: number) =>
									(index < splitCount || this.state.showCollapsed) && (
										<Checkbox
											key={option.id}
											id={option.id}
											label={option.label}
											defaultChecked={option.checked}
											onChanged={this.handleToggle}
										/>
									)
							)}
							{showExpandToggle && (
								<a className="c-link-toggle" onClick={this.handleShowCollapsedClick}>
									<div className="c-link-toggle__label u-spacer-bottom">
										{this.state.showCollapsed ? 'Toon minder' : 'Toon meer'}
									</div>
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
