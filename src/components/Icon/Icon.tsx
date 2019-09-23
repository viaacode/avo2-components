import React, { FunctionComponent } from 'react';

import classNames from 'classnames';

import { DefaultProps } from '../../types';
import * as Icons from '../Icons';

export interface IconProps extends DefaultProps {
	name?: string;
	size?: 'small' | 'large' | 'huge';
	type?: 'arrows' | 'custom' | 'multicolor' | 'social' | 'wysiwyg';
	subtle?: boolean;
	active?: boolean;
}

export const Icon: FunctionComponent<IconProps> = ({
	className,
	name = 'slash',
	size,
	type,
	subtle = false,
	active,
}) => {
	let IconToRender = (Icons as any)[toPascalCase(name)];

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

	if (!IconToRender) {
		console.error(`Icon with name: ${name} was not found.`);
		IconToRender = (Icons as any)[toPascalCase('slash')];
	}

	return (
		<div
			className={classNames(className, 'o-svg-icon', getIconName(), {
				'o-svg-icon--action-active': active,
				'o-svg-icon-multicolor': type === 'multicolor',
				'o-svg-icon--subtle': subtle,
				[`o-svg-icon--${size}`]: size,
			})}
		>
			<IconToRender key={name} />
		</div>
	);
};
