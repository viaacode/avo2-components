import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { COLORS } from '../../colors';
import { action } from '../../helpers/action';
import { Spacer } from '../Spacer/Spacer';
import { Button, ButtonProps } from './Button';

const buttonProps: Partial<ButtonProps>[] = [
	{ label: 'Primary', type: 'primary' },
	{ label: 'Secondary', type: 'secondary' },
	{ label: 'Tertiary', type: 'tertiary' },
	{ label: 'Link', type: 'link' },
	{ label: 'Inline link', type: 'inline-link' },
	{ label: 'Danger', type: 'danger' },
	{ label: 'Danger hover', type: 'danger-hover' },
	{ label: 'Borderless', type: 'borderless' },
	{ label: 'Disabled', disabled: true, title: 'reason why this button is disabled' },
];

const buttonIconProps: Partial<ButtonProps>[] = [
	{ ...buttonProps[0], icon: 'plus' },
	{ ...buttonProps[1], icon: 'search' },
	{ ...buttonProps[2], icon: 'database' },
	{ ...buttonProps[3], icon: 'link' },
	{ ...buttonProps[4], icon: 'link' },
	{ ...buttonProps[5], icon: 'x-circle' },
	{ ...buttonProps[6], icon: 'x-square' },
	{ ...buttonProps[7], icon: 'tag' },
];

const buttonInverseProps: Partial<ButtonProps>[] = [
	{ ...buttonIconProps[1], type: 'secondary-i' },
	{ ...buttonIconProps[7], type: 'borderless-i' },
];

const buttonActiveProps: Partial<ButtonProps>[] = [
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
const buttonAutoHeightProps: Partial<ButtonProps>[] = [
	{ ...buttonIconProps[1], children: autoHeightChildren, autoHeight: true },
	{ ...buttonIconProps[1], children: autoHeightChildren },
];

const renderButtonStories = (
	propsArray: Partial<ButtonProps>[],
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
						{...hasLabel && { label: labelProp }}
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

storiesOf('Button', module)
	.addParameters({ jest: ['Button'] })
	.add('Buttons', () => renderButtonStories(buttonProps))
	.add('Button with icon', () => renderButtonStories(buttonIconProps))
	.add('Icon only button', () => renderButtonStories(buttonIconProps, false))
	.add('Button with arrow', () => renderButtonStories(buttonIconProps, true, { arrow: true }))
	.add('Small buttons', () => renderButtonStories(buttonIconProps, true, { size: 'small' }))
	.add('Block buttons', () => renderButtonStories(buttonIconProps, true, { block: true }))
	.add('Inverse buttons', () => (
		<div style={{ display: 'inline-block', padding: '20px', background: COLORS.GRAYSCALE.G800 }}>
			{renderButtonStories(buttonInverseProps)}
		</div>
	))
	.add('Active buttons', () => renderButtonStories(buttonActiveProps))
	.add('Auto height buttons', () => renderButtonStories(buttonAutoHeightProps, false));
