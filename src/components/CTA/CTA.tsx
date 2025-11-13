import clsx from 'clsx';
import type { FunctionComponent } from 'react';

import { convertToHtml, defaultRenderLinkFunction } from '../../helpers';
import type { ButtonAction, DefaultProps, HeadingType, RenderLinkFunction } from '../../types';
import { Button, type ButtonPropsSchema } from '../Button/Button';
import type { ButtonTypeSchema } from '../Button/Button.types';
import type { IconNameSchema } from '../Icon/Icon.types';

import './CTA.scss';

export interface CTAPropsSchema extends DefaultProps {
	heading: string;
	headingType: HeadingType;
	headingColor?: string;
	content: string;
	contentColor?: string;
	buttonLabel: string;
	buttonAltTitle?: string;
	buttonIcon?: IconNameSchema;
	buttonType?: ButtonTypeSchema;
	buttonAction?: ButtonAction;
	width?: string;
	backgroundColor?: string;
	renderLink?: RenderLinkFunction;
}

export const CTA: FunctionComponent<CTAPropsSchema> = ({
	className,
	headingType: HeadingType = 'h3',
	headingColor,
	heading,
	content,
	contentColor,
	buttonLabel,
	buttonAltTitle,
	buttonIcon,
	buttonType = 'secondary',
	buttonAction,
	width = '50%',
	backgroundColor = '#EDEFF2',
	renderLink = defaultRenderLinkFunction,
}) => {
	const buttonProps: ButtonPropsSchema = {
		label: buttonLabel,
		title: buttonLabel,
		ariaLabel: buttonLabel,
		icon: buttonIcon,
		type: buttonType,
	};

	return (
		<div className={clsx(className, 'c-cta-item')} style={{ width, backgroundColor }}>
			<div className="c-cta__content">
				<div className="c-content">
					<HeadingType
						className={clsx(className, `c-heading c-${HeadingType}`, `u-text-left`)}
						style={headingColor ? { color: headingColor } : {}}
					>
						{heading}
					</HeadingType>
					<div
						className="c-content"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: this content html is converted from markdown
						dangerouslySetInnerHTML={{ __html: convertToHtml(content) }}
						style={{
							...(contentColor ? { color: contentColor } : {}),
						}}
					/>
					{renderLink(
						buttonAction,
						<Button {...buttonProps} />,
						buttonProps.label || buttonProps.ariaLabel || buttonProps.tooltip,
						buttonAltTitle || buttonProps.label || buttonProps.ariaLabel || buttonProps.tooltip
					)}
				</div>
			</div>
		</div>
	);
};
