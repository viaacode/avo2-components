import { shallow } from 'enzyme';
import React from 'react';

import Trumbowyg from 'react-trumbowyg';

import { WYSIWYG } from './WYSIWYG';

describe('<WYSIWYG />', () => {
	it('Should be able to render', () => {
		shallow(<WYSIWYG id="test" />);
	});

	it('Should correctly pass on `id`', () => {
		const id = 'id';

		const wysiwygComponent = shallow(<WYSIWYG id={id} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('id')).toEqual(id);
	});

	it('Should correctly pass on `data`', () => {
		const data = '<h1>foo bar baz</h1>';

		const wysiwygComponent = shallow(<WYSIWYG id="test" data={data} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('data')).toEqual(data);
	});

	it('Should correctly pass on `lang`', () => {
		const lang = 'nl';

		const wysiwygComponent = shallow(<WYSIWYG id="test" lang={lang} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('lang')).toEqual(lang);
	});

	it('Should correctly pass on `buttons`', () => {
		const buttons = ['link', ['strong', 'em'], 'undo', 'redo'];

		const wysiwygComponent = shallow(<WYSIWYG id="test" buttons={buttons} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('buttons')).toEqual(buttons);
	});

	it('Should correctly pass on `semantic`', () => {
		const semantic = true;

		const wysiwygComponent = shallow(<WYSIWYG id="test" semantic={semantic} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('semantic')).toEqual(semantic);
	});

	it('Should correctly pass on `resetCss`', () => {
		const resetCss = true;

		const wysiwygComponent = shallow(<WYSIWYG id="test" resetCss={resetCss} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('resetCss')).toEqual(resetCss);
	});

	it('Should correctly pass on `autogrow`', () => {
		const autogrow = true;

		const wysiwygComponent = shallow(<WYSIWYG id="test" autogrow={autogrow} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('autogrow')).toEqual(autogrow);
	});

	it('Should correctly pass on `disabled`', () => {
		const disabled = true;

		const wysiwygComponent = shallow(<WYSIWYG id="test" disabled={disabled} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('disabled')).toEqual(disabled);
	});

	it('Should correctly pass on `removeformatPasted`', () => {
		const removeformatPasted = true;

		const wysiwygComponent = shallow(
			<WYSIWYG id="test" removeformatPasted={removeformatPasted} />
		).find(Trumbowyg);

		expect(wysiwygComponent.prop('removeformatPasted')).toEqual(removeformatPasted);
	});

	it('Should correctly pass on `shouldUseSvgIcons`', () => {
		const shouldUseSvgIcons = true;

		const wysiwygComponent = shallow(
			<WYSIWYG id="test" shouldUseSvgIcons={shouldUseSvgIcons} />
		).find(Trumbowyg);

		expect(wysiwygComponent.prop('shouldUseSvgIcons')).toEqual(shouldUseSvgIcons);
	});

	it('Should correctly pass on `shouldInjectSvgIcons`', () => {
		const shouldInjectSvgIcons = true;

		const wysiwygComponent = shallow(
			<WYSIWYG id="test" shouldInjectSvgIcons={shouldInjectSvgIcons} />
		).find(Trumbowyg);

		expect(wysiwygComponent.prop('shouldInjectSvgIcons')).toEqual(shouldInjectSvgIcons);
	});

	it('Should correctly pass on `svgIconsPath`', () => {
		const svgIconsPath = './fake/path/to/svg/icons';

		const wysiwygComponent = shallow(<WYSIWYG id="test" svgIconsPath={svgIconsPath} />).find(
			Trumbowyg
		);

		expect(wysiwygComponent.prop('svgIconsPath')).toEqual(svgIconsPath);
	});

	it('Should correctly pass on `btnsDef`', () => {
		const btnsDef = {
			buttonName: {
				fn: 'functionName',
				tag: 'tagName',
				title: 'Button tooltip',
				text: 'Displayed button name',
				isSupported: () => true,
				key: 'K',
				param: '',
				forceCSS: false,
				class: '',
				hasIcon: true,
			},
		};

		const wysiwygComponent = shallow(<WYSIWYG id="test" btnsDef={btnsDef} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('btnsDef')).toEqual(btnsDef);
	});

	it('Should correctly pass on `plugins`', () => {
		const plugins = {
			myplugin: {
				init: () => {},
				tagHandler: () => [],
				destroy: () => {},
			},
		};

		const wysiwygComponent = shallow(<WYSIWYG id="test" plugins={plugins} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('plugins')).toEqual(plugins);
	});

	it('Should correctly pass on `onFocus`', () => {
		const onFocus = () => {};

		const wysiwygComponent = shallow(<WYSIWYG id="test" onFocus={onFocus} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('onFocus')).toEqual(onFocus);
	});

	it('Should correctly pass on `onBlur`', () => {
		const onBlur = () => {};

		const wysiwygComponent = shallow(<WYSIWYG id="test" onBlur={onBlur} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('onBlur')).toEqual(onBlur);
	});

	it('Should correctly pass on `onInit`', () => {
		const onInit = () => {};

		const wysiwygComponent = shallow(<WYSIWYG id="test" onInit={onInit} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('onInit')).toEqual(onInit);
	});

	it('Should correctly pass on `onChange`', () => {
		const onChange = () => {};

		const wysiwygComponent = shallow(<WYSIWYG id="test" onChange={onChange} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('onChange')).toEqual(onChange);
	});

	it('Should correctly pass on `onResize`', () => {
		const onResize = () => {};

		const wysiwygComponent = shallow(<WYSIWYG id="test" onResize={onResize} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('onResize')).toEqual(onResize);
	});

	it('Should correctly pass on `onPaste`', () => {
		const onPaste = () => {};

		const wysiwygComponent = shallow(<WYSIWYG id="test" onPaste={onPaste} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('onPaste')).toEqual(onPaste);
	});

	it('Should correctly pass on `onOpenFullScreen`', () => {
		const onOpenFullScreen = () => {};

		const wysiwygComponent = shallow(
			<WYSIWYG id="test" onOpenFullScreen={onOpenFullScreen} />
		).find(Trumbowyg);

		expect(wysiwygComponent.prop('onOpenFullScreen')).toEqual(onOpenFullScreen);
	});

	it('Should correctly pass on `onCloseFullScreen`', () => {
		const onCloseFullScreen = () => {};

		const wysiwygComponent = shallow(
			<WYSIWYG id="test" onCloseFullScreen={onCloseFullScreen} />
		).find(Trumbowyg);

		expect(wysiwygComponent.prop('onCloseFullScreen')).toEqual(onCloseFullScreen);
	});

	it('Should correctly pass on `onClose`', () => {
		const onClose = () => {};

		const wysiwygComponent = shallow(<WYSIWYG id="test" onClose={onClose} />).find(Trumbowyg);

		expect(wysiwygComponent.prop('onClose')).toEqual(onClose);
	});
});
