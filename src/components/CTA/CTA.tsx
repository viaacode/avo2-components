import React, { FunctionComponent, MouseEvent } from 'react';

import classnames from 'classnames';

import { BlockHeading } from '../../content-blocks/BlockHeading/BlockHeading';
import { BlockRichText } from '../../content-blocks/BlockRichText/BlockRichText';
import { DefaultProps } from '../../types';
import { HeadingType } from '../../types/index';
import { Button } from '../Button/Button';
import { IconName } from '../Icon/types';

import './CTA.scss';

export interface CTAProps extends DefaultProps {
	heading: string;
	headingType: HeadingType;
	content: string | string[];
	buttonLabel: string;
	buttonIcon?: IconName;
	buttonOnClick(event: MouseEvent<HTMLElement>): void;
}

// TODO: Replace Button by BlockButtons
export const CTA: FunctionComponent<CTAProps> = ({
	className,
	headingType = 'h3',
	heading,
	content,
	buttonLabel,
	buttonOnClick,
}) => (
	<div className={classnames(className, 'c-cta-item')}>
		<div className="c-cta__content">
			<div className="c-content">
				<BlockHeading type={headingType}>{heading}</BlockHeading>
				<BlockRichText content={content} />
				<Button onClick={buttonOnClick} type="secondary" label={buttonLabel} />
			</div>
		</div>
	</div>
);
