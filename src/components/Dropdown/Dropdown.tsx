import { get, isUndefined } from 'lodash-es';
import PopperJS, { Data, ModifierFn } from 'popper.js';
import React, { Component, ReactNode } from 'react';
import { Manager, Popper, Reference } from 'react-popper';

export interface DropdownProps {
	label: string;
	placement?:
		| 'auto'
		| 'auto-start'
		| 'auto-end'
		| 'top'
		| 'top-start'
		| 'top-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'left'
		| 'left-start'
		| 'left-end';
	autoSize?: boolean; // defaults to false, meaning: the flyout with will be the same as the reference element
	children: ReactNode;
}

export interface DropdownState {
	isOpen: boolean;
}

/**
 * This component provides a button that can show a flyout with some children inside of it.
 * The PopperJS library is used to provide the positioning logic for the flyout element.
 *
 * The nomenclature within this library is as follows:
 * - The button with down arrow is called the "reference"
 * - The flyout element that contains the children is called the "popper"
 */
export class Dropdown extends Component<DropdownProps, DropdownState> {
	private dropdownButton: HTMLButtonElement | null = null;
	private dropdownFlyout: HTMLDivElement | null = null;

	constructor(props: DropdownProps) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
		document.addEventListener('keyup', this.handleKeyUp);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
		document.removeEventListener('keyup', this.handleKeyUp);
	}

	/**
	 * Close the flyout when we click outside of the dropdown component
	 * @param event
	 */
	handleClickOutside = (event: Event) => {
		if (
			event.target &&
			(!this.dropdownButton || !this.dropdownButton.contains(event.target as Node)) &&
			(!this.dropdownFlyout || !this.dropdownFlyout.contains(event.target as Node))
		) {
			this.toggleOpen(false);
		}
	};

	/**
	 * Close flyout when user presses the escape key
	 * @param event
	 */
	handleKeyUp = (event: KeyboardEvent) => {
		const key = event.key || event.keyCode;

		if (key === 'Escape' || key === 'Esc' || key === 27) {
			this.toggleOpen(false);
		}
	};

	/**
	 * Toggles the flyout elements visibility if no boolean is passed
	 * If you pass "true", the flyout will be set to visible, even if it was visible before the call
	 * If you pass "false" the flyout will be hidden, even if it was hidden before the call
	 * @param shouldOpen
	 */
	toggleOpen = (shouldOpen?: boolean) => {
		this.setState({
			isOpen: !isUndefined(shouldOpen) ? shouldOpen : !this.state.isOpen,
		});
	};

	/**
	 * We let popper calculate all the required styles, then we modify them a little based on the autoSize settings
	 * @param data
	 * @param options
	 */
	computeStyle = (data: Data, options: Object) => {
		const computeStylesFn: ModifierFn = get(PopperJS, 'Defaults.modifiers.computeStyle.fn');
		if (!computeStylesFn) {
			// TODO show error
			return data;
		}
		const newData = computeStylesFn(data, options);
		if (!this.props.autoSize) {
			// Make the width off the popper the same size as the reference element
			newData.styles.width = `${newData.offsets.reference.width}px`;
		}
		newData.styles.overflow = 'hidden';
		return newData;
	};

	render() {
		const { label, children } = this.props;
		const { isOpen } = this.state;

		const placement = this.props.placement || 'top-start';
		const modifiers = {
			computeStyle: {
				fn: this.computeStyle,
			},
		};

		return (
			<Manager>
				<Reference>
					{({ ref }) => (
						<button
							className="c-button c-button--secondary"
							ref={reference => {
								this.dropdownButton = reference;
								ref(reference);
							}}
							onClick={() => this.toggleOpen()}
						>
							<div className="c-button__content">
								<div className="c-button__label">{label}</div>
								<div className="o-svg-icon o-svg-icon-arrows-caret-down  ">
									<svg
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<g id="caret-down" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<polygon id="Icon" fill="#000000" points="7 10 12 15 17 10" />
										</g>
									</svg>
								</div>
							</div>
						</button>
					)}
				</Reference>
				<Popper placement={placement} modifiers={modifiers}>
					{({ ref, style, placement }) => (
						<div
							className={`c-menu${isOpen ? ' c-menu--visible' : ''}`}
							ref={reference => {
								this.dropdownFlyout = reference;
								ref(reference);
							}}
							data-placement={placement}
							style={style}
						>
							{children}
						</div>
					)}
				</Popper>
			</Manager>
		);
	}
}
