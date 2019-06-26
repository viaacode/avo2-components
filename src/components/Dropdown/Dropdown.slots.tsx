import { FunctionComponent, ReactElement } from 'react';

export interface DropdownSlotProps {
	children: ReactElement;
}

export const DropdownButton: FunctionComponent<DropdownSlotProps> = ({
	children,
}: DropdownSlotProps) => children;

export const DropdownContent: FunctionComponent<DropdownSlotProps> = ({
	children,
}: DropdownSlotProps) => children;
