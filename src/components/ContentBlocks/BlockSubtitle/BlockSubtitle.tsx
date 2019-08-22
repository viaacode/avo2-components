import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { DefaultProps } from '../../../types';

export interface BlockSubtitleProps extends DefaultProps {
	subtitle: string;
}

export const BlockSubtitle: FunctionComponent<BlockSubtitleProps> = ({
	className,
	subtitle,
}: BlockSubtitleProps) => (
	<section
		className={classnames(className, 'o-container-vertical', 'o-container-vertical-subtitle')}
	>
		<div className="u-text-center">
			<h2 className="o-container-vertical-subtitle__title">{subtitle}</h2>
		</div>
	</section>
);
