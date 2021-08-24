import React, { ReactElement, ReactNode } from 'react';

import { ButtonAction, RenderLinkFunction } from '../types';

export function testRenderLink(testActionHandler: (info: any) => void): RenderLinkFunction {
	return (buttonAction: ButtonAction | undefined | null, children: ReactNode) => {
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
	// @ts-ignore
	buttonAction: ButtonAction | undefined | null,
	children: ReactNode,
	// @ts-ignore
	label?: string,
	// @ts-ignore
	title?: string
): ReactElement<any, any> | null {
	return <>{children}</>;
}
