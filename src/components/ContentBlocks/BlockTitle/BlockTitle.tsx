import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';

export interface BlockTitleProps extends DefaultProps {
	title: string;
}

export const BlockTitle: FunctionComponent<BlockTitleProps> = ({ className, title }) => (
	<Container className={classnames(className, 'o-container-vertical-title')} mode="vertical">
		<h1 className="o-container-vertical-title__title">{title}</h1>
	</Container>
);
