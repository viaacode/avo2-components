import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { convertToHtml } from '../../../helpers/convertToHtml';
import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';

export interface BlockTextProps extends DefaultProps {
	text: string; // Markdown or html code or combination
}

export const BlockText: FunctionComponent<BlockTextProps> = ({ className, text = '' }) => (
	<Container className={classnames(className, 'o-container-vertical-rich-text')} mode="vertical">
		<Container mode="horizontal" size="small">
			{/* TODO escape markdown in backend */}
			<div className="c-content" dangerouslySetInnerHTML={{ __html: convertToHtml(text) }} />
		</Container>
	</Container>
);
