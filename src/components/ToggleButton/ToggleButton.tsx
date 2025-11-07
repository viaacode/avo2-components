import type React from 'react';
import { type FunctionComponent, useEffect, useState } from 'react';

import { noop } from '../../helpers/noop.js';
import type { DefaultProps } from '../../types/index.js';
import { Button } from '../Button/Button.js';
import type { ButtonTypeSchema } from '../Button/Button.types.js';
import type { IconNameSchema } from '../Icon/Icon.types.js';

export interface ToggleButtonPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	icon: IconNameSchema.heart | IconNameSchema.bookmark;
	active: boolean;
	ariaLabel: string;
	title?: string;
	type?: ButtonTypeSchema;
	onClick?: (active: boolean) => void;
}

export const ToggleButton: FunctionComponent<ToggleButtonPropsSchema> = ({
	className,
	icon,
	active,
	ariaLabel,
	title,
	type = 'borderless',
	onClick = noop,
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

	function getIcon(): IconNameSchema {
		if (filled) {
			return `${icon}-filled` as IconNameSchema;
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
