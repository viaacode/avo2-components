import type { ReactNode } from 'react';

import type { ButtonAction, RenderLinkFunction } from '../types/index.js';

export function testRenderLink(
	testActionHandler: (info: ButtonAction) => void
): RenderLinkFunction {
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
	_label?: string,
	_title?: string
): ReactNode | null {
	return <>{children}</>;
}
