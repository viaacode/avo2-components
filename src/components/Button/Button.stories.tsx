import type { Meta, StoryFn } from '@storybook/react';
import { Fragment } from 'react';
import { action } from 'storybook/actions';

import { COLORS } from '../../colors/index.js';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { Spacer } from '../Spacer/Spacer.js';

import { Button, type ButtonPropsSchema } from './Button.js';

const buttonProps: Partial<ButtonPropsSchema>[] = [
	{ label: 'Primary', type: 'primary' },
	{ label: 'Secondary', type: 'secondary' },
	{ label: 'Tertiary', type: 'tertiary' },
	{ label: 'Link', type: 'link' },
	{ label: 'Inline link', type: 'inline-link' },
	{ label: 'Danger', type: 'danger' },
	{ label: 'Danger hover', type: 'danger-hover' },
	{ label: 'Borderless', type: 'borderless' },
	{ label: 'Pupil primary', type: 'pupil-primary' },
	{ label: 'Pupil Link', type: 'pupil-link' },
	{ label: 'Pupil Inline Link', type: 'pupil-inline-link' },
	{ label: 'Pupil Underlined Link', type: 'pupil-underlined-link' },
	{ label: 'Disabled', disabled: true, title: 'reason why this button is disabled' },
];

const buttonIconProps: Partial<ButtonPropsSchema>[] = [
	{ ...buttonProps[0], icon: IconNameSchema.plus },
	{ ...buttonProps[1], icon: IconNameSchema.search },
	{ ...buttonProps[2], icon: IconNameSchema.database },
	{ ...buttonProps[3], icon: IconNameSchema.link },
	{ ...buttonProps[4], icon: IconNameSchema.link },
	{ ...buttonProps[5], icon: IconNameSchema.xCircle },
	{ ...buttonProps[6], icon: IconNameSchema.xSquare },
	{ ...buttonProps[7], icon: IconNameSchema.tag },
	{ ...buttonProps[8], icon: IconNameSchema.delete },
	{ ...buttonProps[9], icon: IconNameSchema.circle },
	{ ...buttonProps[10], icon: IconNameSchema.checkSquare },
];

const buttonInverseProps: Partial<ButtonPropsSchema>[] = [
	{ ...buttonIconProps[1], type: 'secondary-i' },
	{ ...buttonIconProps[7], type: 'borderless-i' },
];

const buttonActiveProps: Partial<ButtonPropsSchema>[] = [
	{ ...buttonIconProps[1], label: 'Active', active: true },
	{ ...buttonIconProps[1], label: 'Inctive' },
];

const autoHeightChildren = (
	<div>
		Content exceeding <br />
		Button <br />
		Height
	</div>
);
const buttonAutoHeightProps: Partial<ButtonPropsSchema>[] = [
	{ ...buttonIconProps[1], children: autoHeightChildren, autoHeight: true },
	{ ...buttonIconProps[1], children: autoHeightChildren },
];

const renderButtonStories = (
	propsArray: Partial<ButtonPropsSchema>[],
	hasLabel = true,
	extraProps = {}
) => (
	<Fragment>
		{propsArray.map(({ label, children = null, ...rest }, i) => {
			const labelProp = `${label} button`;

			return (
				<Spacer key={`button-${i}`} margin="bottom">
					<Button
						ariaLabel={labelProp}
						onClick={action('Button clicked')}
						title={labelProp}
						{...(hasLabel && { label: labelProp })}
						{...rest}
						{...extraProps}
					>
						{children}
					</Button>
				</Spacer>
			);
		})}
	</Fragment>
);

export default {
	title: 'components/Button',
	component: Button,
} as Meta;

const Template: StoryFn<Partial<ButtonPropsSchema>> = ({
	label,
	ariaLabel,
	title,
	children = null,
	...rest
}: ButtonPropsSchema) => {
	return (
		<Spacer margin="extra-large">
			<Button
				ariaLabel={ariaLabel}
				onClick={action('Button clicked')}
				title={title}
				label={label}
				{...rest}
			>
				{children}
			</Button>
		</Spacer>
	);
};

export const Buttons = Template.bind({});

Buttons.args = {
	label: 'Label',
	ariaLabel: 'Button description for screen readers',
	title: 'Tooltip title',
	type: 'primary',
	icon: 'book' as IconNameSchema,
	tooltip: 'test',
};

export const ButtonsDefault = () => renderButtonStories(buttonProps);

export const ButtonWithIcon = () => renderButtonStories(buttonIconProps);

export const IconOnlyButton = () => renderButtonStories(buttonIconProps, false);

export const ButtonWithArrow = () => renderButtonStories(buttonIconProps, true, { arrow: true });

export const SmallButtons = () => renderButtonStories(buttonIconProps, true, { size: 'small' });

export const LargeButtons = () => renderButtonStories(buttonIconProps, true, { size: 'large' });

export const BlockButtons = () => renderButtonStories(buttonIconProps, true, { block: true });

export const MulticolorIconButtons = () =>
	renderButtonStories(buttonIconProps, true, { icon: 'itsme', iconType: 'multicolor' });

export const InverseButtons = () => (
	<div
		style={{
			display: 'inline-block',
			padding: '20px',
			backgroundColor: COLORS.GRAYSCALE.G800,
		}}
	>
		{renderButtonStories(buttonInverseProps)}
	</div>
);

export const ActiveButtons = () => renderButtonStories(buttonActiveProps);

export const AutoHeightButtons = () => renderButtonStories(buttonAutoHeightProps, false);

export const ButtonWithTooltip = () =>
	renderButtonStories(buttonProps, true, { tooltip: 'Dit is een download button' });
