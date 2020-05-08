import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Container } from '../../components/Container/Container';
import { AlignOptions, DefaultProps } from '../../types';
import { BlockHeading } from '../BlockHeading/BlockHeading';
import { BlockRichText } from '../BlockRichText/BlockRichText';

export interface BlockIntroProps extends DefaultProps {
	title: string;
	content: string;
	align?: AlignOptions;
}

export const BlockIntro: FunctionComponent<BlockIntroProps> = ({
	className,
	title,
	content = '',
	align = 'left',
}) => (
	<Container className={classnames(className, 'o-container-vertical-page-intro')} mode="vertical">
		<Container mode="horizontal" size="medium">
			<div className={classnames(className, 'c-content', `u-text-${align}`)}>
				{title && (
					<BlockHeading className="o-container-vertical-title__title" type="h1">
						{title}
					</BlockHeading>
				)}
				{content && (
					<BlockRichText className="o-container-vertical-intro__intro" elements={{ content }} />
				)}
			</div>
		</Container>
	</Container>
);
