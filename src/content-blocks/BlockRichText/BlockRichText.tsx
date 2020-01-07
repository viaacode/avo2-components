import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { Column, GridSize } from '../../components/Grid/Column/Column';
import { Grid } from '../../components/Grid/Grid';
import { convertToHtml } from '../../helpers/convertToHtml';
import { DefaultProps } from '../../types';

export interface BlockRichTextProps extends DefaultProps {
	content: string | string[];
}

export const BlockRichText: FunctionComponent<BlockRichTextProps> = ({
	className,
	content = [''],
}) =>
	typeof content === 'string' ? (
		<div
			className={classnames(className, 'c-content')}
			dangerouslySetInnerHTML={{ __html: convertToHtml(content) }}
		/>
	) : (
		<Grid>
			{content.map((contentColumn, index) => (
				<Column
					size={(12 / content.length).toString() as GridSize}
					key={`rich-text-column-${index}`}
				>
					<div
						className="c-content"
						dangerouslySetInnerHTML={{ __html: convertToHtml(contentColumn) }}
					/>
				</Column>
			))}
		</Grid>
	);
