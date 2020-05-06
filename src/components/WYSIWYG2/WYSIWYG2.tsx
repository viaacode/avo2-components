import BraftEditor from 'braft-editor';
import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';

import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';

import Table from 'braft-extensions/dist/table';

import './WYSIWYG2.scss';

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

export interface RichEditorStateSchema {
	toHTML: () => string;
}

export interface WYSIWYG2PropsSchema {
	id: string;
	initialHtml?: string;
	state?: RichEditorStateSchema;
	placeholder?: string;
	controls?: (string[] | string)[];
	disabled?: boolean;
	onFocus?: () => void;
	onBlur?: (editorState: RichEditorStateSchema | undefined) => void;
	onChange?: (editorState: RichEditorStateSchema) => void;
	onTab?: () => void;
	onDelete?: () => void;
	onSave?: () => void;
}

export const WYSIWYG2: FunctionComponent<WYSIWYG2PropsSchema> = ({
	id,
	initialHtml,
	state,
	placeholder,
	controls,
	disabled,
	onFocus,
	onBlur,
	onChange,
	onTab,
	onDelete,
	onSave,
}) => {
	const [editorState, setEditorState] = useState<RichEditorStateSchema>(
		state || BraftEditor.createEditorState(initialHtml || '')
	);

	const getLanguage = (languages: any, context: string): any => {
		if (context === 'braft-table') {
			return {
				rows: 'Rijen',
				columns: 'Kolommen',
				cancel: 'Annuleer',
				insertTable: 'Tabel invoegen',
				removeTable: 'Verwijder Tabel',
				insertColumn: 'Voeg kolom in',
				removeColumn: 'Verwijder kolom',
				insertRow: 'Voeg rij in',
				removeRow: 'Verwijder rij',
				mergeCells: 'Samenvoegen cellen',
				splitCell: 'Split cell',
			};
		}
		if (context === 'braft-editor') {
			return {
				base: {
					remove: 'Verwijder',
					cancel: 'Annuleer',
					confirm: 'Bevestig',
					inert: 'Invoegen',
					width: 'Breedte',
					height: 'Hoogte',
				},
				controls: {
					clear: 'Wis',
					undo: 'Ongedaan maken',
					redo: 'Opnieuw doen',
					fontSize: 'Font grootte',
					color: 'Kleur',
					textColor: 'Tekst',
					tempColors: 'Tijdelijke Kleuren',
					backgroundColor: 'Achtergrond',
					bold: 'Vet',
					lineHeight: 'Regel hoogte',
					letterSpacing: 'Letterafstand',
					textIndent: 'Tekst inspringen',
					increaseIndent: 'Inspringing vergroten',
					decreaseIndent: 'Inspringing verkleinen',
					italic: 'Cursief',
					underline: 'Onderstreept',
					strikeThrough: 'Doorstreept',
					fontFamily: 'Font Familie',
					textAlign: 'Tekstuitlijning',
					alignLeft: 'Uitlijning links',
					alignCenter: 'Uitlijning midden',
					alignRight: 'Uitlijning rechts',
					alignJustify: 'Uitvullen',
					floatLeft: 'Links zwevend',
					floatRight: 'Rechts zwevend',
					superScript: 'Superscript',
					subScript: 'Subscript',
					removeStyles: 'Verwijder stijl',
					headings: 'Koppen',
					header: 'Koptekst',
					normal: 'Normaal',
					orderedList: 'Geordende lijst',
					unorderedList: 'Ongeordende lijst',
					blockQuote: 'Quote',
					code: 'Code',
					link: 'Link',
					unlink: 'Unlink',
					hr: 'Horizontale regel',
					media: 'Media',
					mediaLibirary: 'Media bibliotheek',
					emoji: 'Emoji',
					fullscreen: 'Fullscreen',
					exitFullscreen: 'Fullscreen sluiten',
				},
				linkEditor: {
					textInputPlaceHolder: 'Link tekst invoeren',
					linkInputPlaceHolder: 'Link URL invoeren',
					inputWithEnterPlaceHolder: 'Voeg link URL in en druk op enter',
					openInNewWindow: 'Openen in een nieuw venster',
					removeLink: 'Verwijder link',
				},
				audioPlayer: {
					title: 'Audio afspelen',
				},
				videoPlayer: {
					title: 'Video afspelen',
					embedTitle: 'Embed media',
				},
				media: {
					image: 'Afbeelding',
					video: 'Video',
					audio: 'Audio',
					embed: 'Embed',
				},
			};
		}
		return languages['nl'] || languages['en'];
	};

	return (
		<div className={classnames('c-rich-text-editor c-content', { disabled })}>
			<BraftEditor
				id={id}
				editorId="editor-1"
				value={state || BraftEditor.createEditorState(initialHtml || '')}
				placeholder={placeholder}
				readonly={disabled}
				language={getLanguage}
				controls={controls}
				onChange={(newState: RichEditorStateSchema) => {
					setEditorState(newState); // used to pass editor state with onBlur handler, when onchange cannot be used
					if (onChange) {
						onChange(newState);
					}
				}}
				onBlur={() => {
					if (onBlur) {
						onBlur(editorState);
					}
				}}
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
