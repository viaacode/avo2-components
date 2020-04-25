import BraftEditor from 'braft-editor';
import React, { FunctionComponent } from 'react';

import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';

import Table from 'braft-extensions/dist/table';

import './WYSIWYG.scss';

const options = {
	defaultColumns: 3, //  default number of columns
	defaultRows: 3, //  default number of rows
	withDropdown: true, //  Whether a drop-down menu pops up before inserting a table
	columnResizable: true, //  Whether to allow drag to adjust the column width, default false
	exportAttrString: 'class="c-editor-table"', //  Specify the attribute string attached to the table tag when outputting HTML
	includeEditors: ['editor-1'], //  Specify which CraftEditor this module is valid for, and if not pass this property, it will be valid for all CraftEditors
	// excludeEditors: [' editor-id-2 '], //  Specify which CraftEditor this module is invalid
};

BraftEditor.use(Table(options));

export interface WYSIWYGPropsSchema {
	id: string;
	initialHtml?: string;
	state?: any;
	placeholder?: string;
	language?: string;
	controls?: (string[] | string)[];
	disabled?: boolean;
	minimalLinks?: boolean;
	removeFormatPasted?: boolean;
	onFocus?: () => void;
	onBlur?: () => void;
	onChange?: (editorState: any) => void;
	onTab?: () => void;
	onDelete?: () => void;
	onSave?: () => void;
}

export const WYSIWYG: FunctionComponent<WYSIWYGPropsSchema> = ({
	// id,
	initialHtml,
	state,
	placeholder,
	language,
	controls,
	disabled,
	// minimalLinks,
	// removeFormatPasted,
	onFocus,
	onBlur,
	onChange,
	onTab,
	onDelete,
	onSave,
}) => {
	return (
		<div className="my-component">
			<BraftEditor
				editorId="editor-1"
				value={state || BraftEditor.createEditorState(initialHtml || '')}
				placeholder={placeholder}
				readonly={disabled}
				language={language || 'en'}
				controls={controls}
				onChange={onChange}
				onBlur={onBlur}
				onFocus={onFocus}
				onTab={onTab}
				onDelete={onDelete}
				onSave={() => {
					if (!state) {
						return;
					}
					if (onSave) {
						onSave();
					}
				}}
			/>
		</div>
	);
};
