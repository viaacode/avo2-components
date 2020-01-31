import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Button } from '../../components/Button/Button';
import { ButtonType } from '../../components/Button/Button.types';
import { ButtonToolbar } from '../../components/ButtonToolbar/ButtonToolbar';
import { AlignOptions, ButtonAction, DefaultProps, IconName } from '../../types';

export interface ButtonProps extends DefaultProps {
	active?: boolean;
	ariaLabel?: string;
	arrow?: boolean;
	autoHeight?: boolean;
	block?: boolean;
	disabled?: boolean;
	icon?: IconName;
	label?: string;
	action: ButtonAction;
	size?: 'small';
	title?: string;
	type?: ButtonType;
}

export interface BlockButtonsProps extends DefaultProps {
	elements: ButtonProps[];
	align?: AlignOptions;
	buildAndNavigate: (buttonAction: ButtonAction) => void;
}

export const BlockButtons: FunctionComponent<BlockButtonsProps> = ({
	className,
	elements,
	align = 'left',
	buildAndNavigate,
}) => (
	<ButtonToolbar className={classnames(className, `u-content-flex--${align} `)}>
		{elements.map((button, index) => (
			<Button
				key={`button-${index}`}
				type="secondary"
				{...button}
				onClick={() => buildAndNavigate(button.action)}
			/>
		))}
	</ButtonToolbar>
);
