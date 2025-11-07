import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

import type { DefaultProps } from '../../../types/index.js';

import './FormGroup.scss';

export interface FormGroupPropsSchema extends DefaultProps {
	label?: string;
	labelFor?: string;
	required?: boolean;
	error?: (string | ReactNode) | (string | ReactNode)[];
	inlineMode?: 'grow' | 'shrink';
	children: ReactNode;
}

export const FormGroup: FunctionComponent<FormGroupPropsSchema> = ({
	className,
	label,
	labelFor,
	required = false,
	error,
	inlineMode,
	children,
}) => {
	const errorArray = (Array.isArray(error) ? error : [error]) as (string | ReactNode)[];

	return (
		<div
			className={clsx(className, 'o-form-group', {
				'o-form-group--error': error,
				[`o-form-group--inline-${inlineMode}`]: inlineMode,
			})}
		>
			{label && (
				<label className="o-form-group__label" htmlFor={labelFor}>
					{label}
					{required ? (
						<abbr className="required" title="Verplicht veld">
							*
						</abbr>
					) : null}
				</label>
			)}
			<div className="o-form-group__controls">
				{children}
				{(errorArray || []).map((err: string | ReactNode, index: number) => {
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: no guaranteed that all error strings are unique
						<div key={`${err}-${index}`} className="c-form-help-text c-form-help-text--error">
							{err}
						</div>
					);
				})}
			</div>
		</div>
	);
};
