import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import iconList from '../../icons/icons.json' with { type: 'json' };
import { Spacer } from '../Spacer/Spacer';
import { Icon } from './Icon';
import { IconNameSchema } from './Icon.types';

const baseIcons = iconList.filter((i) => i.type === '');
const arrowsIcons = iconList.filter((i) => i.type === 'arrows');
const customIcons = iconList.filter((i) => i.type === 'custom');
const multicolorIcons = iconList.filter((i) => i.type === 'multicolor');
const socialIcons = iconList.filter((i) => i.type === 'social');
const wysiwygIcons = iconList.filter((i) => i.type === 'wysiwyg');

const meta: Meta = {
	title: 'components/Icons',
	parameters: { jest: ['Icon'] },
};
export default meta;

type Story = StoryObj;

const renderIconCategory = (icons: any[]) => (
	<Fragment>
		<div className="c-styleguide-svg-icons__category">
			<div className="c-styleguide-svg-icons__type">
				{icons.map(({ name, type }: { name: IconNameSchema; type: any }, index: number) => (
					<div className="c-styleguide-svg-icon" key={index}>
						<Icon className="o-svg-icon--red" name={name} type={type} />
						<code>{name}</code>
					</div>
				))}
			</div>
		</div>
	</Fragment>
);

export const Base: Story = { render: () => renderIconCategory(baseIcons) };
export const Arrows: Story = { render: () => renderIconCategory(arrowsIcons) };
export const Custom: Story = { render: () => renderIconCategory(customIcons) };
export const Multicolor: Story = { render: () => renderIconCategory(multicolorIcons) };
export const Social: Story = { render: () => renderIconCategory(socialIcons) };
export const WYSIWYG: Story = { render: () => renderIconCategory(wysiwygIcons) };
export const AllIcons: Story = { render: () => renderIconCategory(iconList) };

export const IconSizes: Story = {
	render: () => (
		<Fragment>
			<Spacer margin="bottom-large">
				<h2>Huge</h2>
				<Icon name={IconNameSchema.thumbsUp} size="huge" />
				<Icon name={IconNameSchema.flag} size="huge" />
				<Icon name={IconNameSchema.printer} size="huge" />
				<Icon name={IconNameSchema.messageCircle} size="huge" />
				<Icon name={IconNameSchema.clipboard} size="huge" />
			</Spacer>
			<Spacer margin="bottom-large">
				<h2>Large</h2>
				<Icon name={IconNameSchema.thumbsUp} size="large" />
				<Icon name={IconNameSchema.flag} size="large" />
				<Icon name={IconNameSchema.printer} size="large" />
				<Icon name={IconNameSchema.messageCircle} size="large" />
				<Icon name={IconNameSchema.clipboard} size="large" />
			</Spacer>
			<Spacer margin="bottom-large">
				<h2>Default</h2>
				<Icon name={IconNameSchema.thumbsUp} />
				<Icon name={IconNameSchema.flag} />
				<Icon name={IconNameSchema.printer} />
				<Icon name={IconNameSchema.messageCircle} />
				<Icon name={IconNameSchema.clipboard} />
			</Spacer>
			<Spacer margin="bottom-large">
				<h2>Small</h2>
				<Icon name={IconNameSchema.thumbsUp} size="small" />
				<Icon name={IconNameSchema.flag} size="small" />
				<Icon name={IconNameSchema.printer} size="small" />
				<Icon name={IconNameSchema.messageCircle} size="small" />
				<Icon name={IconNameSchema.clipboard} size="small" />
			</Spacer>
		</Fragment>
	),
};

export const UnknownIcon: Story = {
	render: () => <Icon name={'does-not-exist' as IconNameSchema} size="large" />,
};
