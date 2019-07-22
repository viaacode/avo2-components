import { FC, ReactElement } from 'react';

interface TooltipSlotProps {
	children: ReactElement;
}

export const TooltipContent: FC<TooltipSlotProps> = ({ children }) => children;
export const TooltipTrigger: FC<TooltipSlotProps> = ({ children }) => children;
