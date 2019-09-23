import { ReactElement } from 'react';

export type DefaultProps = {
	className?: string;
};

export interface SlotProps {
	children: ReactElement;
}

export type ContentType = 'collection' | 'bundle' | 'video' | 'audio';

export type VideoAspectRatio = '3:2' | '16:9';
