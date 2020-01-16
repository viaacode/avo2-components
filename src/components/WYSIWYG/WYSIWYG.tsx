import React, { FunctionComponent, MutableRefObject, useRef } from 'react';

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

const WYSIWYGInternal: FunctionComponent<WYSIWYGProps> = ({
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
	const ref: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

	const handleChange = () => {
		if (ref.current) {
			const textArea: HTMLTextAreaElement | null = ref.current.querySelector('.trumbowyg-textarea');
			if (textArea) {
				onChange(textArea.value);
			}
		}
	};

	console.log('rerender');
	return (
		<div ref={ref}>
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
				onBlur={onBlur}
				onInit={onInit}
				onChange={handleChange}
				onResize={onResize}
				onPaste={onPaste}
				onOpenFullScreen={onOpenFullScreen}
				onCloseFullScreen={onCloseFullScreen}
				onClose={onClose}
			/>
		</div>
	);
};

function propsAreEqual(prevProps: WYSIWYGProps, nextProps: WYSIWYGProps) {
	const { data: prevData, ...prevPropsWithoutData } = prevProps;
	const { data: nextData, ...nextPropsWithoutData } = nextProps;
	return JSON.stringify(prevPropsWithoutData) === JSON.stringify(nextPropsWithoutData);
}

// Do not rerender the component if the only thing that changed is the data value (html string)
export const WYSIWYG = React.memo(WYSIWYGInternal, propsAreEqual);
