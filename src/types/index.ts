import type { AvoCoreContentPickerType } from '@viaa/avo2-types';
import type { CSSProperties, ReactNode } from 'react';

export * from './content-type';

export type DefaultProps = {
	className?: string;
	style?: CSSProperties;
};

export type VideoAspectRatio = '3:2' | '16:9';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';

export type AlignOptions = 'left' | 'center' | 'right';

export enum LinkTarget {
	Self = '_self',
	Blank = '_blank',
}

export interface ButtonAction {
	type: AvoCoreContentPickerType;
	value: string | number;
	target?: LinkTarget;
}

export type Orientation = 'horizontal' | 'vertical';

export type RenderLinkFunction = (
	buttonAction: ButtonAction | null | undefined,
	children: ReactNode,
	label?: string
) => ReactNode | null;
