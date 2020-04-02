import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Button } from '../../components/Button/Button';
import { ButtonType } from '../../components/Button/Button.types';
import { ButtonToolbar } from '../../components/ButtonToolbar/ButtonToolbar';
import { IconName } from '../../components/Icon/Icon.types';
import { AlignOptions, DefaultProps } from '../../types';

import './BlockButtons.scss';

export interface ButtonProps extends DefaultProps {
	active?: boolean;
	ariaLabel?: string;
	arrow?: boolean;
	autoHeight?: boolean;
	block?: boolean;
	disabled?: boolean;
	icon?: IconName;
	label?: string;
	size?: 'small';
	title?: string;
	type?: ButtonType;
	navigate: () => void;
}

export interface BlockButtonsProps extends DefaultProps {
	elements: ButtonProps[];
	align?: AlignOptions;
	hasDividers?: boolean;
}

export const BlockButtons: FunctionComponent<BlockButtonsProps> = ({
	className,
	elements,
	align = 'left',
	hasDividers = false,
}) => (
	<ButtonToolbar className={classnames(className, 'c-block-buttons', `u-content-flex--${align}`)}>
		{elements.map((button, index) => (
			<>
				<Button key={`button-${index}`} type="secondary" {...button} onClick={button.navigate} />
				{hasDividers && index !== elements.length - 1 && (
					<span className="c-block-buttons__divider" />
				)}
			</>
		))}
	</ButtonToolbar>
);
