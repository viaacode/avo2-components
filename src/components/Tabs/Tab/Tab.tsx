import clsx from 'clsx';
import type React from 'react';
import type { FunctionComponent, ReactNode } from 'react';

import { noop } from '../../../helpers/noop.js';
import type { DefaultProps } from '../../../types/index.js';
import { Icon } from '../../Icon/Icon.js';
import type { IconNameSchema } from '../../Icon/Icon.types.js';

import './Tab.scss';
import { handleEnterOrSpace } from '../../../utils/index.js';

export interface TabPropsSchema extends DefaultProps {
	children?: React.ReactNode;
	label: ReactNode;
	id: string | number;
	icon?: IconNameSchema;
	active?: boolean;
	dark?: boolean;
	onClick?: () => void;
}

export const Tab: FunctionComponent<TabPropsSchema> = ({
	className,
	id,
	label,
	icon,
	active,
	dark = false,
	onClick = noop,
}) => (
	// biome-ignore lint/a11y/noStaticElementInteractions: TODO fix
	<div
		className={clsx(className, 'c-tab-item', {
			'c-tab-item__active': active,
			'c-tab-item__dark': dark,
		})}
		style={{ cursor: 'pointer' }}
		onClick={onClick}
		onKeyUp={handleEnterOrSpace(onClick)}
		data-id={id}
	>
		{icon && <Icon name={icon} />}
		<span>{label}</span>
	</div>
);
