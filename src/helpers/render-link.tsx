import React, { ReactNode } from 'react';

import { ButtonAction, RenderLinkFunction } from '../types';

export function testRenderLink(
	testActionHandler: (info: ButtonAction) => void
): RenderLinkFunction {
	// eslint-disable-next-line react/display-name
	return (buttonAction: ButtonAction | undefined | null, children: ReactNode): ReactNode => {
		if (buttonAction) {
			return (
				<a
					href={buttonAction.value.toString()}
					onClick={() => {
						if (buttonAction) {
							testActionHandler(buttonAction);
						}
					}}
				>
					{children}
				</a>
			);
		}
		return <>{children}</>;
	};
}

export function defaultRenderLinkFunction(
	_buttonAction: ButtonAction | undefined | null,
	children: ReactNode,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_label?: string,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_title?: string
): ReactNode | null {
	return <>{children}</>;
}
