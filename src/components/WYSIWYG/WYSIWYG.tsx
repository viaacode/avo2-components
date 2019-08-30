import React, { FunctionComponent } from 'react';

import Trumbowyg from 'react-trumbowyg';
import 'react-trumbowyg/dist/trumbowyg.min.css';
import 'trumbowyg/dist/plugins/table/trumbowyg.table';

import './WYSIWYG.css';

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
	removeformatPasted?: boolean;
	shouldUseSvgIcons?: boolean;
	shouldInjectSvgIcons?: boolean;
	svgIconsPath?: string;
	btnsDef?: Object;
	plugins?: Object;
	onFocus?: TrumbowygEvent;
	onBlur?: TrumbowygEvent;
	onInit?: TrumbowygEvent;
	onChange?: TrumbowygEvent;
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
	removeformatPasted,
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
}: WYSIWYGProps) => (
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
		removeformatPasted={removeformatPasted}
		shouldUseSvgIcons={shouldUseSvgIcons}
		shouldInjectSvgIcons={shouldInjectSvgIcons}
		svgIconsPath={svgIconsPath}
		btnsDef={btnsDef}
		plugins={plugins}
		onFocus={onFocus}
		onBlur={onBlur}
		onInit={onInit}
		onChange={onChange}
		onResize={onResize}
		onPaste={onPaste}
		onOpenFullScreen={onOpenFullScreen}
		onCloseFullScreen={onCloseFullScreen}
		onClose={onClose}
	/>
);
