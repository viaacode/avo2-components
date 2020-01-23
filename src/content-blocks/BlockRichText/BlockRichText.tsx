import { get } from 'lodash-es';
import React, { FunctionComponent } from 'react';

import { Column, GridSize } from '../../components/Grid/Column/Column';
import { Grid } from '../../components/Grid/Grid';
import { convertToHtml } from '../../helpers/convertToHtml';
import { DefaultProps } from '../../types';

interface BlockRichTextElements {
	content: string;
}

export interface BlockRichTextProps extends DefaultProps {
	elements: BlockRichTextElements | BlockRichTextElements[];
}

export const BlockRichText: FunctionComponent<BlockRichTextProps> = ({
	className,
	elements = [
		{
			content: '',
		},
	],
}) => {
	const renderContent = (content: string) => (
		<div className="c-content" dangerouslySetInnerHTML={{ __html: convertToHtml(content) }} />
	);

	return Array.isArray(elements) ? (
		<Grid className={className}>
			{elements.map((column, index) => (
				<Column
					size={(12 / elements.length).toString() as GridSize}
					key={`rich-text-column-${index}`}
				>
					{renderContent(column.content)}
				</Column>
			))}
		</Grid>
	) : (
		renderContent(elements.content)
	);
};
