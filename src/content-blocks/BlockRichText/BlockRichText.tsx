import React, { FunctionComponent } from 'react';

import { Column, GridSizeSchema } from '../../components/Grid/Column/Column';
import { Grid } from '../../components/Grid/Grid';
import { convertToHtml } from '../../helpers';
import { DefaultProps } from '../../types';

import './BlockRichText.scss';

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
			className="c-content c-rich-text-block"
			dangerouslySetInnerHTML={{ __html: convertToHtml(contentElem.content) }}
			style={contentElem.color ? { color: contentElem.color } : {}}
		/>
	);

	return Array.isArray(elements) ? (
		<Grid className={className}>
			{(elements as BlockRichTextElement[]).map((column, index) => (
				<Column
					size={(12 / elements.length).toString() as GridSizeSchema}
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
