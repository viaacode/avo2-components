import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import * as Icons from '../Icons';

export interface IconProps {
	name: string;
	type?: 'arrows' | 'custom' | 'multicolor' | 'social' | 'wysiwyg';
}

export const Icon: FunctionComponent<IconProps> = ({ name, type }: IconProps) => {
	const IconToRender = (Icons as any)[toPascalCase(name)];

	function getIconName() {
		const base = 'o-svg-icon';
		const iconName = toKebabCase(name);

		return `${base}-${type || ''}-${iconName}`;
	}

	// converts kebab-case to PascalCase
	function toPascalCase(string: string) {
		return string
			.replace(/(^\w)/, first => first.toUpperCase())
			.replace(/(-\w)/g, match => match[1].toUpperCase());
	}

	// converts PascalCase to kebab-case
	function toKebabCase(string: string) {
		return string
			.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
			.replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
			.toLowerCase();
	}

	return (
		IconToRender && (
			<div
				className={classNames('o-svg-icon', getIconName(), {
					'o-svg-icon-multicolor': type === 'multicolor',
				})}
			>
				<IconToRender />
			</div>
		)
	);
};
