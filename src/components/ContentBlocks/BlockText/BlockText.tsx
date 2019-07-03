import React, { FunctionComponent } from 'react';

import marked from 'marked';

import { Container } from '../../Container/Container';

export interface BlockTextProps {
	text: string; // Markdown or html code or combination
}

export const BlockText: FunctionComponent<BlockTextProps> = ({ text = '' }: BlockTextProps) => (
	<div className="o-container-vertical o-container-vertical-rich-text">
		<Container mode="horizontal" size="small">
			{/* TODO escape markdown in backend */}
			<div className="c-content" dangerouslySetInnerHTML={{ __html: marked(text) }} />
		</Container>
	</div>
);
