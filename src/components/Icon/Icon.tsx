import React, { FunctionComponent, ReactComponentElement } from 'react';

import classNames from 'classnames';

import * as Icons from '../Icons';

export interface IconProps {
	name: string;
	type?: 'arrows' | 'custom' | 'multicolor' | 'social' | 'wysiwyg';
}

export const Icon: FunctionComponent<IconProps> = ({ name, type }: IconProps) => {
	const NamedIcon = (Icons as any)[name];

	function getIconName() {
		const base = 'o-svg-icon';
		const iconName = toKebabCase(name);

		return `${base}-${type}-${iconName}`;
	}

	function toKebabCase(string: string) {
		return string
			.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
			.replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
			.toLowerCase();
	}

	return (
		<div
			className={classNames('o-svg-icon', getIconName(), {
				'o-svg-icon-multicolor': type === 'multicolor',
			})}
		>
			<NamedIcon />
		</div>
	);
};
