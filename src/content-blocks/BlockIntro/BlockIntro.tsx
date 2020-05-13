import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { Container } from '../../components/Container/Container';
import { AlignOptions, DefaultProps, HeadingType } from '../../types';
import { BlockHeading } from '../BlockHeading/BlockHeading';
import { BlockRichText } from '../BlockRichText/BlockRichText';

export interface BlockIntroProps extends DefaultProps {
	title: string;
	content: string;
	align?: AlignOptions;
	headingType?: HeadingType;
}

export const BlockIntro: FunctionComponent<BlockIntroProps> = ({
	className,
	title,
	content = '',
	align = 'left',
	headingType = 'h1',
}) => (
	<Container className={classnames(className, 'o-container-vertical-page-intro')} mode="vertical">
		<Container mode="horizontal" size="medium">
			<div className={classnames(className, 'c-content', `u-text-${align}`)}>
				{title && (
					<BlockHeading className="o-container-vertical-title__title" type={headingType}>
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
