/* tslint:disable */
import React, { RefObject } from 'react';

export const noop = (): void => {
	// Ignore empty function
};

export function getElementHeight(el: RefObject<HTMLElement | null>): number | 'auto' {
	if (!el || !el.current) {
		return 'auto';
	}
	return el.current.scrollHeight;
}

// Helper function for render props. Sets a function to be called, plus any additional functions passed in
export const callAll =
	(...fns: ((...args: any[]) => void)[]) =>
	(...args: any[]): void =>
		fns.forEach((fn: (...args: any[]) => void) => fn && fn(...args));

export const defaultTransitionStyles: React.CSSProperties = {
	transitionDuration: '500ms',
	transitionTimingFunction: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
};

export function joinTransitionProperties(string: string | undefined): string {
	if (string) {
		const styles = ['height'];
		styles.push(...string.split(', '));
		return styles.join(', ');
	}
	return 'height';
}

export function makeTransitionStyles({
	expandStyles = defaultTransitionStyles,
	collapseStyles = defaultTransitionStyles,
}: {
	expandStyles: React.CSSProperties;
	collapseStyles: React.CSSProperties;
}): { expandStyles: React.CSSProperties; collapseStyles: React.CSSProperties } {
	return {
		expandStyles: {
			...expandStyles,
			transitionProperty: joinTransitionProperties(expandStyles.transitionProperty),
		},
		collapseStyles: {
			...collapseStyles,
			transitionProperty: joinTransitionProperties(collapseStyles.transitionProperty),
		},
	};
}
