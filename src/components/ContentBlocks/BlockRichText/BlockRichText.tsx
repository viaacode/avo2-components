import React, { FunctionComponent } from 'react';

import marked from 'marked';

import { Container } from '../../Container/Container';

export interface BlockRichTextProps {
	content: string; // Markdown or html code or combination
}

export const BlockRichText: FunctionComponent<BlockRichTextProps> = ({
	content,
}: BlockRichTextProps) => (
	<div className="o-container-vertical o-container-vertical-rich-text">
		<Container mode="horizontal" size="small">
			{/* TODO escape markdown in backend */}
			<div className="c-content" dangerouslySetInnerHTML={{ __html: marked(content) }} />
		</Container>
	</div>
);
