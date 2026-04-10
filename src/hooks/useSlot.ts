import { Children, isValidElement, type ReactNode } from 'react';

export const useSlot = (slotComponent: unknown, children: ReactNode): ReactNode | null => {
    let slot: ReactNode | null = null;

    Children.forEach(children, (child) => {
        if (!isValidElement<{ children?: ReactNode }>(child)) {
            return;
        }
        if (child.type === slotComponent) {
            slot = child.props.children ?? null;
        }
    });

    return slot;
};