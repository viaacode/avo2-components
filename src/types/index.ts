export * from './content-type';

export type DefaultProps = {
	className?: string;
};

export type VideoAspectRatio = '3:2' | '16:9';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';

export type AlignOptions = 'left' | 'center' | 'right';

export type ContentPickerType =
	| 'CONTENT_PAGE'
	| 'COLLECTION'
	| 'ITEM'
	| 'DROPDOWN'
	| 'INTERNAL_LINK'
	| 'EXTERNAL_LINK';

export interface ButtonAction {
	type: ContentPickerType;
	value: string | number;
}
