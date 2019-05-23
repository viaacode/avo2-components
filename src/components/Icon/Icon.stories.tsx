import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import iconList from '../../icons/icons.json';

import { Icon } from './Icon';

const baseIcons = iconList.filter(i => i.type === '');
const arrowsIcons = iconList.filter(i => i.type === 'arrows');
const customIcons = iconList.filter(i => i.type === 'custom');
const multicolorIcons = iconList.filter(i => i.type === 'multicolor');
const socialIcons = iconList.filter(i => i.type === 'social');
const wysiwygIcons = iconList.filter(i => i.type === 'wysiwyg');

const stories = [
	['Base', baseIcons],
	['Arrows', arrowsIcons],
	['Custom', customIcons],
	['Multicolor', multicolorIcons],
	['social', socialIcons],
	['WYSIWYG', wysiwygIcons],
	['All icons', iconList],
];

const story = storiesOf('Icons', module);

story.addParameters({ jest: ['Icon'] });

stories.forEach(([title, icons]: any) =>
	story.add(title, () => (
		<Fragment>
			<h1>{title}</h1>
			<div className="c-styleguide-svg-icons__category">
				<div className="c-styleguide-svg-icons__type">
					{icons.map(({ name, type }: { name: string; type: any }, index: number) => (
						<div className="c-styleguide-svg-icon" key={index}>
							<Fragment>
								<Icon name={name} type={type} />
								<code>{name}</code>
							</Fragment>
						</div>
					))}
				</div>
			</div>
		</Fragment>
	))
);
