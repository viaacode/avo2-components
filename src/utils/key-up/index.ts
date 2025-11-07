import type { KeyboardEvent, MouseEvent } from 'react';

export const keysSpacebar = ['Spacebar', 'Space', ' '];
export const keysEnter = ['Enter'];
export const keysEscape = ['Esc', 'Escape'];

export const onKey = (e: { key: string }, keys: string[], callback?: () => void): void => {
	if (!keys.includes(e.key)) {
		return;
	}

	callback?.();
};

export function handleEnterOrSpace(
	clickHandler:
		| ((evt: MouseEvent<HTMLElement>) => void)
		| ((evt: KeyboardEvent<HTMLElement>) => void)
		| undefined
		| null
) {
	return (event: KeyboardEvent<HTMLElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			clickHandler?.(event as any);
		}
	};
}
