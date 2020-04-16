import classnames from 'classnames';
import { flatten } from 'lodash-es';
import React, { FunctionComponent } from 'react';

import { Button, ButtonType, ButtonToolbar, IconName } from '../../components';
import { AlignOptions, ButtonAction, DefaultProps } from '../../types';

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
	buttonAction: ButtonAction;
}

export interface BlockButtonsProps extends DefaultProps {
	elements: ButtonProps[];
	align?: AlignOptions;
	hasDividers?: boolean;
	navigate: (buttonAction: ButtonAction) => void;
}

export const BlockButtons: FunctionComponent<BlockButtonsProps> = ({
	className,
	elements,
	align = 'left',
	hasDividers = false,
	navigate,
}) => (
	<ButtonToolbar className={classnames(className, 'c-block-buttons', `u-content-flex--${align}`)}>
		{flatten(
			elements.map((button, index) => {
				const nodes = [
					<div key={`buttons_block_${button.label}`}>
						<Button
							key={`button-${index}`}
							type="secondary"
							{...button}
							onClick={() => navigate(button.buttonAction)}
						/>
					</div>,
				];
				if (hasDividers && index !== elements.length - 1) {
					nodes.push(
						<span
							className="c-block-buttons__divider"
							key={`buttons_block_${button.label}_divider`}
						/>
					);
				}
				return nodes;
			})
		)}
	</ButtonToolbar>
);
