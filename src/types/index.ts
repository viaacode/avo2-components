import { ReactElement } from 'react';
export * from './content-type';

export type DefaultProps = {
	className?: string;
};

export interface SlotProps {
	children: ReactElement;
}

export type VideoAspectRatio = '3:2' | '16:9';
