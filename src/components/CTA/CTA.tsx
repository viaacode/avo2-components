import React, { FunctionComponent } from 'react';

import classnames from 'classnames';

import { BlockHeading } from '../../content-blocks/BlockHeading/BlockHeading';
import { BlockRichText } from '../../content-blocks/BlockRichText/BlockRichText';
import { DefaultProps, HeadingType } from '../../types';
import { Button, ButtonProps } from '../Button/Button';
import { ButtonType } from '../Button/Button.types';
import { IconName } from '../Icon/Icon.types';

import './CTA.scss';

export interface CTAProps extends DefaultProps {
	heading: string;
	headingType: HeadingType;
	content: string;
	buttonLabel: string;
	buttonIcon?: IconName;
	buttonType?: ButtonType;
	width?: string;
	navigate: () => void;
}

export const CTA: FunctionComponent<CTAProps> = ({
	className,
	headingType = 'h3',
	heading,
	content,
	buttonLabel,
	buttonIcon,
	buttonType = 'secondary',
	width = '50%',
	navigate,
}) => {
	const buttonProps: ButtonProps = {
		label: buttonLabel,
		title: buttonLabel,
		ariaLabel: buttonLabel,
		onClick: navigate,
		icon: buttonIcon,
		type: buttonType,
	};

	return (
		<div className={classnames(className, 'c-cta-item')} style={{ width }}>
			<div className="c-cta__content">
				<div className="c-content">
					<BlockHeading type={headingType}>{heading}</BlockHeading>
					<BlockRichText elements={{ content }} />
					<Button {...buttonProps} />
				</div>
			</div>
		</div>
	);
};
