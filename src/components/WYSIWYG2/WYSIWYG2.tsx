import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import Table from 'braft-extensions/dist/table';
import 'braft-extensions/dist/table.css';
import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import './WYSIWYG2.scss';

const options = {
	defaultColumns: 3, //  default number of columns
	defaultRows: 3, //  default number of rows
	withDropdown: true, //  Whether a drop-down menu pops up before inserting a table
	columnResizable: false, //  Whether to allow drag to adjust the column width, default false
	exportAttrString: 'class="c-editor-table"', //  Specify the attribute string attached to the table tag when outputting HTML
	includeEditors: ['editor-1'], //  Specify which CraftEditor this module is valid for, and if not pass this property, it will be valid for all CraftEditors
	// excludeEditors: [' editor-id-2 '], //  Specify which CraftEditor this module is invalid
};

BraftEditor.use(Table(options));

export interface RichEditorStateSchema {
	toHTML: () => string;
}

export interface WYSIWYG2UploadInfoSchema {
	file: File;
	progress: (progress: number) => void;
	libraryId: string;
	success: (res: { url: string; meta?: any }) => void;
	error: (err: Error) => void;
}

export interface WYSIWYG2MediaSchema {
	uploadFn: (uploadInfo: WYSIWYG2UploadInfoSchema) => void;
	validateFn?: (file: File) => boolean | Promise<boolean>;
	/**
	 * defaults to:
	 *  {
	 *  	image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
	 *		video: 'video/mp4',
	 *		audio : 'audio / mp3'
	 *	}
	 */
	accepts?: { [type: string]: string };
}

export type WYSIWYG2ControlSchema =
	| 'font-size' // Text size selector
	| 'font-family' // Text font selector
	| 'line-height' // Text line height selector
	| 'letter-spacing' // Text pitch selector
	| 'text-color' // Text color selector, including text background color settings
	| 'bold' // Set text bold
	| 'italic' // Italicize text
	| 'underline' // Underline text
	| 'strike-through' // Set Strikethrough
	| 'superscript' // Set text as superscript
	| 'subscript' // Set text as subscript
	| 'remove-styles' // Clear text style
	| 'emoji' // Emoji emoticon selector
	| 'text-align' // Text alignment tool, you can use the textAligns property to specify which alignment can be used
	| 'text-indent' // Paragraph indent tool, indent up to 6 levels
	| 'link' // Link insertion tool
	| 'headings' // Paragraph type (Title 1-6, General)
	| 'list-ul' // Unordered list
	| 'list-ol' // Ordered list
	| 'blockquote' // Quoted paragraph
	| 'code' // Code block
	| 'hr' // Horizontal line tool
	| 'media' // Multimedia insertion tool
	| 'clear' // Content removal tool
	| 'undo' // Undo operation
	| 'redo' // Redo operation
	| 'separator'; // Split line, continuous multiple separators will only be displayed as 1

export interface WYSIWYG2PropsSchema {
	id: string;
	initialHtml?: string;
	state?: RichEditorStateSchema;
	placeholder?: string;
	controls?: (WYSIWYG2ControlSchema[] | WYSIWYG2ControlSchema)[];
	disabled?: boolean;
	media?: WYSIWYG2MediaSchema;
	onFocus?: () => void;
	onBlur?: () => void;
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
	media,
	onFocus,
	onBlur,
	onChange,
	onTab,
	onDelete,
	onSave,
}) => {
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
		if (context === 'braft-finder') {
			return {
				remove: 'Verwijder',
				cancel: 'Annueer',
				confirm: 'Bevestig',
				insert: 'Voeg selectie in',
				width: 'Breedte',
				height: 'Hoogte',
				image: 'Afbeelding',
				video: 'Video',
				audio: 'Audio',
				embed: 'Embed',
				caption: 'Media Bibliotheek',
				dragTip: 'Klik of sleep bestanden hier',
				dropTip: 'Drop om te uploaden',
				selectAll: 'Selecteer alle',
				deselect: 'Deselecteren',
				removeSelected: 'Verwijder selectie',
				externalInputPlaceHolder: 'Bron naam|Bron URL',
				externalInputTip: 'Splits bron naam en brond URL met "|", bevestig met enter.',
				addLocalFile: 'Voeg lokale bestanden toe',
				addExternalSource: 'Voeg bestanden toe van internet',
				unnamedItem: 'Naamloos item',
				confirmInsert: 'Voeg selectie in',
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
				media={media}
				onChange={(newState: RichEditorStateSchema) => {
					if (onChange) {
						onChange(newState);
					}
				}}
				onBlur={() => {
					if (onBlur) {
						onBlur();
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
