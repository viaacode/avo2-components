import React, { FunctionComponent } from 'react';

export interface BlockIntroProps {
	text: string;
}

export const BlockIntro: FunctionComponent<BlockIntroProps> = ({ text }: BlockIntroProps) => (
	<section className="o-container-vertical o-container-vertical-intro">
		<div className="o-container o-container--medium">
			<p className="o-container-vertical-intro__intro">{text}</p>
		</div>
	</section>
);
