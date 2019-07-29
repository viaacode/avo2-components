import { FunctionComponent, ReactElement } from 'react';

interface TooltipSlotProps {
	children: ReactElement;
}

export const TooltipContent: FunctionComponent<TooltipSlotProps> = ({ children }) => children;
export const TooltipTrigger: FunctionComponent<TooltipSlotProps> = ({ children }) => children;
