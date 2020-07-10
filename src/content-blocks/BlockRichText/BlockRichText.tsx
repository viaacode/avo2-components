import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Button, ButtonPropsSchema } from '../../components/Button/Button';
import { Column, GridSizeSchema } from '../../components/Grid/Column/Column';
import { Grid } from '../../components/Grid/Grid';
import { Spacer } from '../../components/Spacer/Spacer';
import { convertToHtml } from '../../helpers';
import { ButtonAction, DefaultProps } from '../../types';

import './BlockRichText.scss';

interface BlockRichTextElement {
	content: string;
	buttons?: (ButtonPropsSchema & { buttonAction: ButtonAction })[];
	color?: string;
}

export interface BlockRichTextProps extends DefaultProps {
	elements: BlockRichTextElement | BlockRichTextElement[];
}

export interface BlockRichTextProps extends DefaultProps {
	elements: BlockRichTextElement | BlockRichTextElement[];
	maxTextWidth?: string;
	navigate?: (buttonAction: any) => void;
}

export const BlockRichText: FunctionComponent<BlockRichTextProps> = ({
	className,
	elements = [
		{
			content: '',
		},
	],
	maxTextWidth,
	navigate,
}) => {
	const renderButtons = (columnIndex: number, buttons: any[]) =>
		buttons.map((buttonProps: any, buttonIndex: number) => (
			<Spacer key={`rich-text-column-${columnIndex}-button-${buttonIndex}`} margin="top">
				<Button
					{...buttonProps}
					onClick={navigate ? () => navigate(buttonProps.buttonAction) : () => null}
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
					style={{
						...(color ? { color } : {}),
						...(maxTextWidth ? { maxWidth: maxTextWidth } : {}),
					}}
				/>
				{buttons && !!buttons.length && renderButtons(columnIndex, buttons)}
			</>
		);
	};

	const renderElements = (elements: BlockRichTextElement[]) => (
		<Grid>
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

	return (
		<div className={classnames('c-rich-text-block', className)}>
			{Array.isArray(elements) ? renderElements(elements) : renderContent(elements)}
		</div>
	);
};
