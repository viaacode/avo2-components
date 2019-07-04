import React, { FunctionComponent } from 'react';

export interface BlockSubtitleProps {
	subtitle: string;
}

export const BlockSubtitle: FunctionComponent<BlockSubtitleProps> = ({
	subtitle,
}: BlockSubtitleProps) => (
	<section className="o-container-vertical o-container-vertical-subtitle">
		<div className="u-text-center">
			<h2 className="o-container-vertical-subtitle__title">{subtitle}</h2>
		</div>
	</section>
);
