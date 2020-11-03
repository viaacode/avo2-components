import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { convertToHtml } from '../../helpers';
import { DefaultProps } from '../../types';

export interface BlockEmbedCodeProps extends DefaultProps {
	embedHtml: string;
	className?: string;
}

export const BlockEmbedCode: FunctionComponent<BlockEmbedCodeProps> = ({
	embedHtml,
	className,
}) => (
	<div
		className={classnames(className, 'c-embed-code')}
		dangerouslySetInnerHTML={{ __html: convertToHtml(embedHtml) }}
	/>
);
