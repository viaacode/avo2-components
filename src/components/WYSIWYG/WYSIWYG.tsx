import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import React from 'react';

import './WYSIWYG.scss';

export type BraftEditorState = any & {
	toHTML: () => string;
};

export interface WYSIWYGPropsSchema {
	id: string;
	initialHtml?: string;
	state?: BraftEditorState;
	placeholder?: string;
	language?: string;
	controls?: (string[] | string)[];
	disabled?: boolean;
	minimalLinks?: boolean;
	removeFormatPasted?: boolean;
	onFocus?: () => void;
	onBlur?: () => void;
	onChange?: (editorState: BraftEditorState) => void;
	onTab?: () => void;
	onDelete?: () => void;
	onSave?: () => void;
}

export class WYSIWYG extends React.Component<WYSIWYGPropsSchema> {
	render() {
		return (
			<div className="my-component">
				<BraftEditor
					value={this.props.state || BraftEditor.createEditorState(this.props.initialHtml || '')}
					placeholder={this.props.placeholder}
					readonly={this.props.disabled}
					language={this.props.language || 'en'}
					controls={this.props.controls}
					onChange={this.props.onChange}
					onBlur={this.props.onBlur}
					onFocus={this.props.onFocus}
					onTab={this.props.onTab}
					onDelete={this.props.onDelete}
					onSave={this.props.onSave}
				/>
			</div>
		);
	}
}
