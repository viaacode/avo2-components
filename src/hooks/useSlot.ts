import { ReactElement, ReactNode, ReactNodeArray } from 'react';

export function useSlot<T>(type: T, children: ReactNode): ReactNode {
	const slots: ReactNodeArray = Array.isArray(children) ? children : [children];
	const element: ReactElement = slots.find(
		(slot: ReactNode) => slot && (slot as { type: T }).type === type
	) as ReactElement;

	if (element && element.props.children) {
		return element.props.children;
	}

	return null;
}
