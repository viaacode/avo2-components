import React, { FunctionComponent } from 'react';

import { Container } from '../../Container/Container';

export interface BlockPageIntroProps {
	title: string;
	subtitle: string;
}

export const BlockPageIntro: FunctionComponent<BlockPageIntroProps> = ({
	title,
	subtitle,
}: BlockPageIntroProps) => (
	<div className="o-container-vertical o-container-vertical-page-intro">
		<Container mode="horizontal">
			<h1 className="o-container-vertical-title__title">{title}</h1>
			<p className="o-container-vertical-intro__intro">{subtitle}</p>
		</Container>
	</div>
);
