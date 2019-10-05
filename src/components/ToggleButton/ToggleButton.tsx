import React, { FunctionComponent, useEffect, useState } from 'react';

import { DefaultProps } from '../../types';
import { Button } from '../Button/Button';
import { IconName } from '../Icon/types';

export interface ToggleButtonProps extends DefaultProps {
	icon: 'heart' | 'bookmark';
	active: boolean;
	ariaLabel: string;
	title?: string;
	type?:
		| 'primary'
		| 'secondary'
		| 'secondary-i'
		| 'tertiary'
		| 'borderless'
		| 'borderless-i'
		| 'danger'
		| 'danger-hover'
		| 'link';
	onClick?: (active: boolean) => void;
}

export const ToggleButton: FunctionComponent<ToggleButtonProps> = ({
	className,
	icon,
	active,
	ariaLabel,
	title,
	type = 'borderless',
	onClick = () => {},
}) => {
	const [filled, setFilled] = useState(active);

	useEffect(() => {
		// sync up `active`-prop with filled-state
		setFilled(active);
	}, [active]);

	function onButtonClick() {
		setFilled(!filled);
		if (onClick) {
			onClick(!filled);
		}
	}

	function getIcon(): IconName {
		if (filled) {
			return `${icon}-filled` as IconName;
		}

		return icon;
	}

	return (
		<Button
			className={className}
			icon={getIcon()}
			type={type}
			active={filled}
			onClick={onButtonClick}
			ariaLabel={`${ariaLabel} (currently ${active ? 'active' : 'not active'})`}
			title={title}
		/>
	);
};
