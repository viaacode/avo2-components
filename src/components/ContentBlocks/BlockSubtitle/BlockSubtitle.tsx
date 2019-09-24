import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';

import './BlockSubtitle.scss';

export interface BlockSubtitleProps extends DefaultProps {
	subtitle: string;
}

export const BlockSubtitle: FunctionComponent<BlockSubtitleProps> = ({ className, subtitle }) => (
	<Container className={classnames(className, 'o-container-vertical-subtitle')} mode="vertical">
		<div className="u-text-center">
			<h2 className="o-container-vertical-subtitle__title">{subtitle}</h2>
		</div>
	</Container>
);
