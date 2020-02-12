import { throttle } from 'lodash-es';
import React from 'react';
import 'trumbowyg/dist/trumbowyg.min';
import 'trumbowyg/dist/ui/sass/trumbowyg.scss';

import 'trumbowyg/dist/langs/nl.min';
import 'trumbowyg/dist/plugins/table/trumbowyg.table';
import iconsPath from 'trumbowyg/dist/ui/icons.svg';

import './WYSIWYG.scss';

($ as any).trumbowyg.svgPath = iconsPath;

type TrumbowygEvent = (e: JQuery.Event) => void;

export interface WYSIWYGProps {
	id: string;
	data?: string;
	placeholder?: string;
	lang?: string;
	btns?: (string[] | string)[];
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
	onModalOpen?: TrumbowygEvent;
	onModalClose?: TrumbowygEvent;
}

const COMPARE_PROPS: (keyof WYSIWYGProps)[] = [
	'id',
	'placeholder',
	'lang',
	'btns',
	'semantic',
	'resetCss',
	'disabled',
	'autogrow',
	'removeFormatPasted',
	'shouldUseSvgIcons',
	'shouldInjectSvgIcons',
	'svgIconsPath',
	'btnsDef',
	'plugins',
	'onFocus',
	'onBlur',
	'onInit',
	'onChange',
	'onResize',
	'onPaste',
	'onOpenFullScreen',
	'onCloseFullScreen',
	'onClose',
	'onModalOpen',
	'onModalClose',
];

export class WYSIWYG extends React.Component<WYSIWYGProps> {
	private editor: (JQuery<HTMLDivElement> & { trumbowyg: Function }) | null = null;

	componentDidMount() {
		this.reInitEditor(this.props);
	}

	componentWillUnmount() {
		if (this.editor) {
			this.editor.trumbowyg('destroy');
		}
	}

	// Switched to class based component so we can use this lifecycle hook inside the component
	// so we can check the value of the Trumbowyg editor
	// to see if the sate is equal to the externally received props.data value
	shouldComponentUpdate(nextProps: WYSIWYGProps) {
		if (!this.editor) {
			return true;
		}

		const { data: prevData, ...prevRestProps } = this.props;
		const { data: nextData, ...nextNextProps } = nextProps;

		let arePropsEqual = true;
		COMPARE_PROPS.forEach(propName => {
			const prevProp = (prevRestProps as any)[propName];
			const nextProp = (nextNextProps as any)[propName];
			if (typeof prevProp === 'function' || typeof nextProp === 'function') {
				if (prevProp.toString() !== nextProp.toString()) {
					arePropsEqual = false;
				}
			} else if (prevProp !== nextProp) {
				arePropsEqual = false;
			}
		});
		if (!arePropsEqual) {
			this.reInitEditor(nextProps);
		}

		return false;
	}

	private reInitEditor(props: WYSIWYGProps) {
		if (this.editor) {
			this.editor.trumbowyg('destroy');
			this.editor.trumbowyg({
				lang: 'nl',
				defaultLinkTarget: '_self',
				...props,
				onChange: this.handleChange,
			});
			this.setEditorData(props.data || '');
			this.editor
				.trumbowyg()
				.on('tbwfocus', props.onFocus)
				.on('tbwblur', props.onBlur)
				.on('tbwinit ', props.onInit)
				.on('tbwchange ', this.handleChange)
				.on('tbwresize ', props.onResize)
				.on('tbwpaste ', props.onPaste)
				.on('tbwopenfullscreen ', props.onOpenFullScreen)
				.on('tbwclosefullscreen ', props.onCloseFullScreen)
				.on('tbwclose ', props.onClose)
				.on('tbwmodalopen ', props.onModalOpen)
				.on('tbwmodalclose ', props.onModalClose);
		}
	}

	private handleChange = throttle(
		() => {
			if (this.editor) {
				(this.props.onChange || (() => {}))(this.getEditorData());
			}
		},
		100,
		{ leading: true, trailing: true }
	);

	private getEditorData(): string {
		if (this.editor) {
			return this.editor.trumbowyg('html');
		}
		return '';
	}

	private setEditorData(data: string = '') {
		if (this.editor) {
			($(this.editor) as any).trumbowyg('html', data);
		}
	}

	render() {
		return <div ref={ref => (this.editor = $(ref as HTMLDivElement) as any)} id={this.props.id} />;
	}
}
