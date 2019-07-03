import React, { FunctionComponent } from 'react';

import { Container } from '../../Container/Container';

export interface BlockIntroProps {
	text: string;
	title?: string;
}

export const BlockIntro: FunctionComponent<BlockIntroProps> = ({
	text,
	title,
}: BlockIntroProps) => (
	<section className="o-container-vertical o-container-vertical-page-intro">
		<Container mode="horizontal" size="medium">
			{title && <h1 className="o-container-vertical-title__title">{title}</h1>}
			<p className="o-container-vertical-intro__intro">{text}</p>
		</Container>
	</section>
);
