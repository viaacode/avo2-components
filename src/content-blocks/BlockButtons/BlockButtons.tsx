import React, { FunctionComponent } from 'react';

import { Button, ButtonProps } from '../../components/Button/Button';
import { ButtonToolbar } from '../../components/ButtonToolbar/ButtonToolbar';

import { DefaultProps } from '../../types';

export interface BlockButtonsProps extends DefaultProps {
	buttons: ButtonProps[];
}

export const BlockButtons: FunctionComponent<BlockButtonsProps> = ({ className, buttons }) => (
	<ButtonToolbar className={className}>
		{buttons.map((button, index) => (
			<Button key={`button-${index}`} type="secondary" {...button} />
		))}
	</ButtonToolbar>
);
