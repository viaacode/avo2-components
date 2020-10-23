import React, { ReactElement, ReactNode } from 'react';

import { ButtonAction, RenderLinkFunction } from '../types';

export function testRenderLink(testActionHandler: (info: any) => void): RenderLinkFunction {
	return (buttonAction: ButtonAction | undefined | null, children: ReactNode) => {
		return (
			<div
				onClick={() => {
					if (buttonAction) {
						testActionHandler(buttonAction);
					}
				}}
			>
				{children}
			</div>
		);
	};
}

export function defaultRenderLinkFunction(
	// @ts-ignore
	buttonAction: ButtonAction | undefined | null,
	children: ReactNode
): ReactElement<any, any> | null {
	return <>{children}</>;
}
