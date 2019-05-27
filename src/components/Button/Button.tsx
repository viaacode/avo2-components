import React, { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
	onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => (
	<button onClick={onClick}>{children}</button>
);
