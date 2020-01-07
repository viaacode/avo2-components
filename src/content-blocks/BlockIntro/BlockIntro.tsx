import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { Container } from '../../components/Container/Container';
import { DefaultProps } from '../../types';
import { BlockHeading } from '../BlockHeading/BlockHeading';
import { BlockRichText } from '../BlockRichText/BlockRichText';

export interface BlockIntroProps extends DefaultProps {
	text: string;
	title: string;
}

export const BlockIntro: FunctionComponent<BlockIntroProps> = ({ className, text = '', title }) => (
	<Container className={classnames(className, 'o-container-vertical-page-intro')} mode="vertical">
		<Container mode="horizontal" size="medium">
			<div className="c-content u-text-center">
				{title && (
					<BlockHeading className="o-container-vertical-title__title" type="h1">
						{title}
					</BlockHeading>
				)}
				{text && <BlockRichText className="o-container-vertical-intro__intro" content={text} />}
			</div>
		</Container>
	</Container>
);
