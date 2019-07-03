import React, { FunctionComponent } from 'react';

export interface BlockTitleProps {
	title: string;
}

export const BlockTitle: FunctionComponent<BlockTitleProps> = ({ title }: BlockTitleProps) => (
	<section className="o-container-vertical o-container-vertical-title">
		<h1 className="o-container-vertical-title__title">{title}</h1>
	</section>
);
