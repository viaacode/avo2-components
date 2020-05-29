import classnames from 'classnames';
import React, { FunctionComponent } from 'react';

import { BlockHeading } from '../../content-blocks/BlockHeading/BlockHeading';
import { BlockRichText } from '../../content-blocks/BlockRichText/BlockRichText';
import { ButtonAction, DefaultProps, HeadingType } from '../../types';
import { Button, ButtonPropsSchema } from '../Button/Button';
import { ButtonTypeSchema } from '../Button/Button.types';
import { IconNameSchema } from '../Icon/Icon.types';

import './CTA.scss';

export interface CTAPropsSchema extends DefaultProps {
	heading: string;
	headingType: HeadingType;
	headingColor?: string;
	content: string;
	contentColor?: string;
	buttonLabel: string;
	buttonIcon?: IconNameSchema;
	buttonType?: ButtonTypeSchema;
	buttonAction?: ButtonAction;
	width?: string;
	backgroundColor?: string;
	navigate: (buttonAction: ButtonAction) => void;
}

export const CTA: FunctionComponent<CTAPropsSchema> = ({
	className,
	headingType = 'h3',
	headingColor,
	heading,
	content,
	contentColor,
	buttonLabel,
	buttonIcon,
	buttonType = 'secondary',
	buttonAction,
	width = '50%',
	backgroundColor = '#EDEFF2',
	navigate,
}) => {
	const buttonProps: ButtonPropsSchema = {
		label: buttonLabel,
		title: buttonLabel,
		ariaLabel: buttonLabel,
		onClick: () => buttonAction && navigate(buttonAction),
		icon: buttonIcon,
		type: buttonType,
	};

	return (
		<div className={classnames(className, 'c-cta-item')} style={{ width, backgroundColor }}>
			<div className="c-cta__content">
				<div className="c-content">
					<BlockHeading type={headingType} color={headingColor}>
						{heading}
					</BlockHeading>
					<BlockRichText elements={{ content, color: contentColor }} />
					<Button {...buttonProps} />
				</div>
			</div>
		</div>
	);
};
