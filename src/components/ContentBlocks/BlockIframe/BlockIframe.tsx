import React, { FunctionComponent, IframeHTMLAttributes } from 'react';

import classNames from 'classnames';

export interface BlockIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
	ratio?: '3:2' | '16:9';
}

export const BlockIframe: FunctionComponent<BlockIframeProps> = ({
	ratio,
	...iframeProps
}: BlockIframeProps) => {
	return (
		<div
			className={classNames('c-video-wrapper', {
				'c-video-wrapper--aspect-2-3': ratio === '3:2',
				'c-video-wrapper--aspect-16-9': ratio === '16:9',
			})}
		>
			<iframe {...iframeProps} />
		</div>
	);
};
