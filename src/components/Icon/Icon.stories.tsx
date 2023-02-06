import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import iconList from '../../icons/icons.json';
import { Spacer } from '../Spacer/Spacer';

import { Icon } from './Icon';
import { IconNameSchema } from './Icon.types';

const baseIcons = iconList.filter((i) => i.type === '');
const arrowsIcons = iconList.filter((i) => i.type === 'arrows');
const customIcons = iconList.filter((i) => i.type === 'custom');
const multicolorIcons = iconList.filter((i) => i.type === 'multicolor');
const socialIcons = iconList.filter((i) => i.type === 'social');
const wysiwygIcons = iconList.filter((i) => i.type === 'wysiwyg');

const stories = [
	['Base', baseIcons],
	['Arrows', arrowsIcons],
	['Custom', customIcons],
	['Multicolor', multicolorIcons],
	['Social', socialIcons],
	['WYSIWYG', wysiwygIcons],
	['All icons', iconList],
];

const story = storiesOf('components/Icons', module);

story.addParameters({ jest: ['Icon'] });

stories.forEach(([title, icons]: any) =>
	story.add(title, () => (
		<Fragment>
			<div className="c-styleguide-svg-icons__category">
				<div className="c-styleguide-svg-icons__type">
					{icons.map(
						({ name, type }: { name: IconNameSchema; type: any }, index: number) => (
							<div className="c-styleguide-svg-icon" key={index}>
								<Fragment>
									<Icon className="o-svg-icon--red" name={name} type={type} />
									<code>{name}</code>
								</Fragment>
							</div>
						)
					)}
				</div>
			</div>
		</Fragment>
	))
);

story.add('Icon sizes', () => (
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
));

story.add('Unknown icon', () => <Icon name={'does-not-exist' as IconNameSchema} size="large" />);
