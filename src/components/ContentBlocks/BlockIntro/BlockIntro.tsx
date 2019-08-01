import React, { FunctionComponent } from 'react';

import classnames from 'classnames';
import marked from 'marked';

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
}: BlockIntroProps) => (
	<section
		className={classnames(className, 'o-container-vertical', 'o-container-vertical-page-intro')}
	>
		<Container mode="horizontal" size="medium">
			<div className="c-content u-text-center">
				{title && <h1 className="o-container-vertical-title__title">{title}</h1>}
				{subtitle && <h3>{subtitle}</h3>}
				<p
					className="o-container-vertical-intro__intro"
					dangerouslySetInnerHTML={{ __html: marked(text) }}
				/>
			</div>
		</Container>
	</section>
);
