import React, { FunctionComponent, useEffect, useState } from 'react';

import { DefaultProps } from '../../types';
import { Button } from '../Button/Button';

export interface ToggleButtonProps extends DefaultProps {
	icon: 'heart' | 'bookmark';
	active: boolean;
	ariaLabel: string;
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

	function getIcon() {
		if (filled) {
			return `${icon}-filled`;
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
		/>
	);
};
