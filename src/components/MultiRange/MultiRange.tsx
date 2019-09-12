import React, { FunctionComponent } from 'react';

import classnames from 'classnames';
import { getTrackBackground, Range } from 'react-range';

import { DefaultProps } from '../../types';
import './MultiRange.scss';

export interface MultiRangeProps extends DefaultProps {
	id?: string;
	disabled?: boolean;
	values?: number[];
	step?: number;
	min?: number;
	max?: number;
	onChange?: (values: number[]) => void;
}

export const MultiRange: FunctionComponent<MultiRangeProps> = ({
	className,
	id,
	disabled = false,
	values = [0, 100],
	step = 0.1,
	min = 0,
	max = 100,
	onChange = () => {},
}) => {
	const classes = classnames('c-input-range', className, { 'c-input-range__disabled': disabled });

	return (
		<div id={id} className={classes}>
			<Range
				step={step}
				min={min}
				max={max}
				values={values}
				onChange={onChange}
				renderTrack={({ props, children }) => (
					<div
						onMouseDown={props.onMouseDown}
						onTouchStart={props.onTouchStart}
						style={{
							...props.style,
							height: '36px',
							display: 'flex',
							width: '100%',
						}}
					>
						<div
							ref={props.ref}
							style={{
								height: '8px',
								width: '100%',
								borderRadius: '4px',
								background: getTrackBackground({
									values,
									min,
									max,
									colors:
										values.length === 1
											? ['hsl(190, 80%, 40%)', 'rgb(196, 196, 196)']
											: ['rgb(196, 196, 196)', 'hsl(190, 80%, 40%)', 'rgb(196, 196, 196)'],
								}),
								alignSelf: 'center',
							}}
						>
							{children}
						</div>
					</div>
				)}
				renderThumb={({ props }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: '40px',
							width: '40px',
						}}
					/>
				)}
			/>
		</div>
	);
};
