import React, { FunctionComponent, MouseEvent } from 'react';

import classnames from 'classnames';

import { BlockHeading } from '../../content-blocks/BlockHeading/BlockHeading';
import { BlockRichText } from '../../content-blocks/BlockRichText/BlockRichText';
import { DefaultProps, HeadingType } from '../../types';
import { Button, ButtonProps } from '../Button/Button';
import { ButtonType } from '../Button/Button.types';
import { IconName } from '../Icon/types';

import './CTA.scss';

export interface CTAProps extends DefaultProps {
	heading: string;
	headingType: HeadingType;
	content: string;
	buttonLabel: string;
	buttonOnClick: (event: MouseEvent<HTMLElement>) => void;
	buttonIcon?: string;
	buttonType?: string;
}

export const CTA: FunctionComponent<CTAProps> = ({
	className,
	headingType = 'h3',
	heading,
	content,
	buttonLabel,
	buttonIcon,
	buttonOnClick,
	buttonType,
}) => {
	const buttonProps: ButtonProps = {
		label: buttonLabel,
		title: buttonLabel,
		ariaLabel: buttonLabel,
		onClick: buttonOnClick,
		icon: buttonIcon as IconName,
		type: buttonType as ButtonType,
	};

	return (
		<div className={classnames(className, 'c-cta-item')}>
			<div className="c-cta__content">
				<div className="c-content">
					<BlockHeading type={headingType}>{heading}</BlockHeading>
					<BlockRichText elements={{ content }} />
					<Button type="secondary" {...buttonProps} />
				</div>
			</div>
		</div>
	);
};
