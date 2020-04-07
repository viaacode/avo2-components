import React, { FunctionComponent } from 'react';

import { Column, Grid, GridSize } from '../../components';
import { convertToHtml } from '../../helpers';
import { DefaultProps } from '../../types';

interface BlockRichTextElement {
	content: string;
	color?: string;
}

export interface BlockRichTextProps extends DefaultProps {
	elements: BlockRichTextElement | BlockRichTextElement[];
}

export const BlockRichText: FunctionComponent<BlockRichTextProps> = ({
	className,
	elements = [
		{
			content: '',
		},
	],
}) => {
	const renderContent = (contentElem: BlockRichTextElement) => (
		<div
			className="c-content"
			dangerouslySetInnerHTML={{ __html: convertToHtml(contentElem.content) }}
			style={contentElem.color ? { color: contentElem.color } : {}}
		/>
	);

	return Array.isArray(elements) ? (
		<Grid className={className}>
			{(elements as BlockRichTextElement[]).map((column, index) => (
				<Column
					size={(12 / elements.length).toString() as GridSize}
					key={`rich-text-column-${index}`}
				>
					{renderContent(column)}
				</Column>
			))}
		</Grid>
	) : (
		renderContent(elements)
	);
};
