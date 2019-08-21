import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';

export interface BlockTitleProps extends DefaultProps {
	title: string;
}

export const BlockTitle: FunctionComponent<BlockTitleProps> = ({
	className,
	title,
}: BlockTitleProps) => (
	<section className={classnames(className, 'o-container-vertical', 'o-container-vertical-title')}>
		<h1 className="o-container-vertical-title__title">{title}</h1>
	</section>
);
