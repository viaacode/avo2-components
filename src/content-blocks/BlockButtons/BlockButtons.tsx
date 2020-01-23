import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Button, ButtonProps } from '../../components/Button/Button';
import { ButtonToolbar } from '../../components/ButtonToolbar/ButtonToolbar';
import { AlignOptions, DefaultProps } from '../../types';

export interface BlockButtonsProps extends DefaultProps {
	elements: ButtonProps[];
	align?: AlignOptions;
}

export const BlockButtons: FunctionComponent<BlockButtonsProps> = ({
	className,
	elements,
	align = 'left',
}) => (
	<ButtonToolbar className={classnames(className, `u-content-flex--${align} `)}>
		{elements.map((button, index) => (
			<Button key={`button-${index}`} type="secondary" {...button} />
		))}
	</ButtonToolbar>
);
