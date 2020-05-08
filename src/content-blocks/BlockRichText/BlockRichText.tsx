import React, { FunctionComponent } from 'react';

import { Button, ButtonPropsSchema } from '../../components/Button/Button';
import { Column, GridSizeSchema } from '../../components/Grid/Column/Column';
import { Grid } from '../../components/Grid/Grid';
import { Spacer } from '../../components/Spacer/Spacer';
import { convertToHtml } from '../../helpers';
import { DefaultProps } from '../../types';

interface BlockRichTextElement {
	content: string;
	color?: string;
}

export interface BlockRichTextProps extends DefaultProps {
	elements: BlockRichTextElement | BlockRichTextElement[];
}

interface BlockRichTextElement {
	content: string;
	buttons?: ButtonPropsSchema[];
	color?: string;
}

export interface BlockRichTextProps extends DefaultProps {
	elements: BlockRichTextElement | BlockRichTextElement[];
	navigate?: (buttonAction: any) => void;
}

export const BlockRichText: FunctionComponent<BlockRichTextProps> = ({
	className,
	elements = [
		{
			content: '',
		},
	],
	navigate,
}) => {
	const renderButtons = (columnIndex: number, buttons: any[]) =>
		buttons.map((buttonProps: any, buttonIndex: number) => (
			<Spacer key={`rich-text-column-${columnIndex}-button-${buttonIndex}`} margin="top">
				<Button
					{...buttonProps}
					onClick={navigate ? () => navigate(buttonProps.buttonAction.value) : () => null}
				/>
			</Spacer>
		));

	const renderContent = (contentElem: BlockRichTextElement, columnIndex: number = 0) => {
		const { content, color, buttons } = contentElem;

		return (
			<>
				<div
					className="c-content"
					dangerouslySetInnerHTML={{ __html: convertToHtml(content) }}
					style={color ? { color } : {}}
				/>
				{buttons && !!buttons.length && renderButtons(columnIndex, buttons)}
			</>
		);
	};

	const renderElements = (elements: BlockRichTextElement[]) => (
		<Grid className={className}>
			{elements.map((column, columnIndex) => (
				<Column
					size={(12 / elements.length).toString() as GridSizeSchema}
					key={`rich-text-column-${columnIndex}`}
				>
					{renderContent(column, columnIndex)}
				</Column>
			))}
		</Grid>
	);

	return Array.isArray(elements) ? renderElements(elements) : renderContent(elements);
};
