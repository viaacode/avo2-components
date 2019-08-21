import React, { FunctionComponent } from 'react';

import classnames from 'classnames';
import marked from 'marked';

import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';

export interface BlockTextProps extends DefaultProps {
	text: string; // Markdown or html code or combination
}

export const BlockText: FunctionComponent<BlockTextProps> = ({
	className,
	text = '',
}: BlockTextProps) => (
	<div className={classnames(className, 'o-container-vertical', 'o-container-vertical-rich-text')}>
		<Container mode="horizontal" size="small">
			{/* TODO escape markdown in backend */}
			<div className="c-content" dangerouslySetInnerHTML={{ __html: marked(text) }} />
		</Container>
	</div>
);
