import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { BlockHeading } from '../../content-blocks/BlockHeading/BlockHeading';
import { BlockRichText } from '../../content-blocks/BlockRichText/BlockRichText';
import { DefaultProps, HeadingType } from '../../types';
import { Button, ButtonProps } from '../Button/Button';

import './CTA.scss';

export interface CTAProps extends DefaultProps {
	heading: string;
	headingType: HeadingType;
	content: string | string[];
	button: Partial<ButtonProps>;
}

// TODO: Replace Button by BlockButtons
export const CTA: FunctionComponent<CTAProps> = ({
	className,
	headingType = 'h3',
	heading,
	content,
	button,
}) => (
	<div className={classnames(className, 'c-cta-item')}>
		<div className="c-cta__content">
			<div className="c-content">
				<BlockHeading type={headingType}>{heading}</BlockHeading>
				<BlockRichText content={content} />
				<Button {...button} />
			</div>
		</div>
	</div>
);
