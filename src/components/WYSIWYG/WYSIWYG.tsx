import React, { FunctionComponent } from 'react';

import Trumbowyg from 'react-trumbowyg';
import 'trumbowyg/dist/plugins/table/trumbowyg.table';

import './WYSIWYG.scss';

type TrumbowygEvent = (e: JQuery.Event) => void;

export interface WYSIWYGProps {
	id: string;
	data?: string;
	placeholder?: string;
	lang?: string;
	buttons?: (string[] | string)[];
	semantic?: boolean;
	resetCss?: boolean;
	autogrow?: boolean;
	disabled?: boolean;
	removeFormatPasted?: boolean;
	shouldUseSvgIcons?: boolean;
	shouldInjectSvgIcons?: boolean;
	svgIconsPath?: string;
	btnsDef?: Object;
	plugins?: Object;
	onFocus?: TrumbowygEvent;
	onBlur?: TrumbowygEvent;
	onInit?: TrumbowygEvent;
	onChange?: (html: string) => void;
	onResize?: TrumbowygEvent;
	onPaste?: TrumbowygEvent;
	onOpenFullScreen?: TrumbowygEvent;
	onCloseFullScreen?: TrumbowygEvent;
	onClose?: TrumbowygEvent;
}

export const WYSIWYG: FunctionComponent<WYSIWYGProps> = ({
	id,
	data = '',
	placeholder,
	lang,
	buttons,
	semantic,
	resetCss,
	autogrow,
	disabled,
	removeFormatPasted = true,
	shouldUseSvgIcons,
	shouldInjectSvgIcons,
	svgIconsPath,
	btnsDef,
	plugins,
	onFocus = () => {},
	onBlur = () => {},
	onInit = () => {},
	onChange = () => {},
	onResize = () => {},
	onPaste = () => {},
	onOpenFullScreen = () => {},
	onCloseFullScreen = () => {},
	onClose = () => {},
}) => {
	let html: string;

	/**
	 * Only trigger onChange events when the component loses focus
	 * Otherwise we get a bug where the caret jumpt to the front of the editor on every keystroke
	 * https://github.com/RD17/react-trumbowyg/issues/1
	 * We need to cache the current editor value onChange en onPaste
	 * and then emit the value onBlur as if it was an onChange event
	 * @param event
	 */
	const handleBlur = (event: JQuery.Event) => {
		onChange(html);
		onBlur(event);
	};

	const handleChange = (event: any) => {
		html = event.target.innerHTML;
	};

	const handlePaste = (event: any) => {
		html = event.target.innerHTML;
		onPaste(event);
	};

	return (
		<Trumbowyg
			id={id}
			data={data}
			placeholder={placeholder}
			lang={lang}
			buttons={buttons}
			semantic={semantic}
			resetCss={resetCss}
			autogrow={autogrow}
			disabled={disabled}
			removeformatPasted={removeFormatPasted}
			shouldUseSvgIcons={shouldUseSvgIcons}
			shouldInjectSvgIcons={shouldInjectSvgIcons}
			svgIconsPath={svgIconsPath}
			btnsDef={btnsDef}
			plugins={plugins}
			onFocus={onFocus}
			onBlur={handleBlur}
			onInit={onInit}
			onChange={handleChange}
			onResize={onResize}
			onPaste={handlePaste}
			onOpenFullScreen={onOpenFullScreen}
			onCloseFullScreen={onCloseFullScreen}
			onClose={onClose}
		/>
	);
};
