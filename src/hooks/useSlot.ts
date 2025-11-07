import type { ReactElement, ReactNode, ReactNodeArray, ReactPortal } from 'react';

export function useSlot<T>(type: T, children: ReactNode): ReactNode {
	const slots: ReactNodeArray = Array.isArray(children) ? children : [children];
	const element: ReactElement = slots.find(
		(slot: ReactNode) => slot && (slot as ReactPortal).type === type
	) as ReactElement;

	if (element?.props.children) {
		return element.props.children;
	}

	return null;
}
