import type { Meta, StoryFn } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';

import { type TagInfoSchema, TagsInput } from './TagsInput.js';

const TagsInputStoryComponent = ({
	children,
	defaultValue = [] as TagInfoSchema[],
}: {
	children: ReactElement;
	defaultValue?: TagInfoSchema[];
}) => {
	const [value, setValue] = useState(defaultValue);

	return cloneElement(children, {
		value,
		onChange: (changedValues: TagInfoSchema[]) => {
			action('tags input changed')(changedValues);
			setValue(changedValues);
		},
		onCreate: (tagToBeCreated: TagInfoSchema) => {
			action('creating tag')(tagToBeCreated);
			setValue([...value, tagToBeCreated]);
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

export default {
	title: 'components/TagsInput',
	component: TagsInput,
	parameters: {
		jest: ['TagsInput'],
	},
} as Meta;

const Template: StoryFn = (args) => (
	<TagsInputStoryComponent>
		<TagsInput options={[]} {...args} />
	</TagsInputStoryComponent>
);

export const Default = Template.bind({});
Default.args = {
	options: tags,
	placeholder: 'Select elements',
	className: 'test',
	id: 'elements',
};

export const AllowCreate = Template.bind({});
AllowCreate.args = {
	options: tags,
	allowCreate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	options: tags,
	disabled: true,
};

export const SingleValue = Template.bind({});
SingleValue.args = {
	options: tags,
	allowMulti: false,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
	options: [],
	isLoading: true,
};
