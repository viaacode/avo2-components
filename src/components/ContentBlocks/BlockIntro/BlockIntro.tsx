import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { convertToHtml } from '../../../helpers/convertToHtml';
import { DefaultProps } from '../../../types';
import { Container } from '../../Container/Container';

export interface BlockIntroProps extends DefaultProps {
	text: string;
	title?: string;
	subtitle?: string;
}

export const BlockIntro: FunctionComponent<BlockIntroProps> = ({
	className,
	text = '',
	title,
	subtitle,
}) => (
	<Container className={classnames(className, 'o-container-vertical-page-intro')} mode="vertical">
		<Container mode="horizontal" size="medium">
			<div className="c-content u-text-center">
				{title && <h1 className="o-container-vertical-title__title">{title}</h1>}
				{subtitle && <h3>{subtitle}</h3>}
				<p
					className="o-container-vertical-intro__intro"
					dangerouslySetInnerHTML={{ __html: convertToHtml(text) }}
				/>
			</div>
		</Container>
	</Container>
);
