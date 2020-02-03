import React, { cloneElement, Fragment, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { TagInfo, TagsInput } from './TagsInput';

const TagsInputStoryComponent = ({
	children,
	defaultValue = [] as TagInfo[],
}: {
	children: ReactElement;
	defaultValue?: TagInfo[];
}) => {
	const [value, setValue] = useState(defaultValue);

	return cloneElement(children, {
		value,
		onChange: (changedValue: TagInfo[]) => {
			action('tags input changed')(value);

			setValue([...value, ...changedValue]);
		},
	});
};

const tags = [
	{ label: 'Aluminium', value: 'aluminium' },
	{ label: 'Cadmium', value: 'cadmium' },
	{ label: 'Dubnium', value: 'dubnium' },
	{ label: 'Potassium', value: 'potassium' },
	{ label: 'Vanadium', value: 'vanadium' },
	{ label: 'Palladium', value: 'palladium' },
	{ label: 'Polonium', value: 'polonium' },
	{ label: 'Rhodium', value: 'rhodium' },
	{ label: 'Yttrium', value: 'yttrium' },
	{ label: 'Uranium', value: 'uranium' },
];

storiesOf('components/TagsInput', module)
	.addParameters({ jest: ['TagsInput'] })
	.add('TagsInput', () => (
		<Fragment>
			<TagsInputStoryComponent>
				<TagsInput options={tags} placeholder="Select elements" className="test" id="elements" />
			</TagsInputStoryComponent>
		</Fragment>
	))
	.add('TagsInput allow create', () => (
		<Fragment>
			<TagsInputStoryComponent>
				<TagsInput options={tags} allowCreate />
			</TagsInputStoryComponent>
		</Fragment>
	))
	.add('TagsInput disabled', () => (
		<Fragment>
			<TagsInputStoryComponent>
				<TagsInput options={tags} disabled />
			</TagsInputStoryComponent>
		</Fragment>
	))
	.add('TagsInput single value', () => (
		<Fragment>
			<TagsInputStoryComponent>
				<TagsInput options={tags} isMulti={false} />
			</TagsInputStoryComponent>
		</Fragment>
	));
