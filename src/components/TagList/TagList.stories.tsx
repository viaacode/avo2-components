import type { Meta, StoryFn } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import { cloneElement, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';
import { TagList } from './TagList.js';

const tags = [
	{ label: 'Aluminium', id: 'aluminium' },
	{ label: 'Cadmium', id: 'cadmium' },
	{ label: 'Dubnium', id: 'dubnium' },
	{ label: 'Potassium', id: 'potassium' },
	{ label: 'Vanadium', id: 'vanadium' },
	{ label: 'Palladium', id: 'palladium' },
	{ label: 'Polonium', id: 'polonium' },
	{ label: 'Rhodium', id: 'rhodium' },
	{ label: 'Yttrium', id: 'yttrium' },
	{ label: 'Uranium', id: 'uranium' },
];

const colorTags = [
	{ label: 'Aluminium', id: 'aluminium', color: '#FF0000' },
	{ label: 'Cadmium', id: 'cadmium', color: '#FF7F00' },
	{ label: 'Dubnium', id: 'dubnium', color: '#FFFF00' },
	{ label: 'Potassium', id: 'potassium', color: '#00FF00' },
	{ label: 'Vanadium', id: 'vanadium', color: '#0000FF' },
	{ label: 'Palladium', id: 'palladium', color: '#4B0082' },
	{ label: 'Polonium', id: 'polonium', color: '#8B00FF' },
	// Tags without a color will get a default swatch color
	{ label: 'Rhodium', id: 'rhodium' },
	{ label: 'Yttrium', id: 'yttrium' },
	{ label: 'Uranium', id: 'uranium' },
];

const TagListStoryComponent = ({
	children,
}: {
	children: ReactElement;
	initialPageIndex?: number;
}) => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	return cloneElement(children, {
		tags: tags.map((tag) => ({ ...tag, active: selectedTags.includes(tag.id) })),
		onTagClicked: (tagId: string) => {
			action('tag toggled')(tagId);
			const indexOf = selectedTags.indexOf(tagId);
			if (indexOf !== -1) {
				// already in the selected tags => remove the tag
				const newTabs = [...selectedTags];
				newTabs.splice(indexOf, 1);
				setSelectedTags(newTabs);
			} else {
				// add the tag
				setSelectedTags([...selectedTags, tagId]);
			}
		},
	});
};

export default {
	title: 'components/TagList',
	parameters: { jest: ['TagList'] },
} as Meta;

export const Default: StoryFn = () => <TagList tags={tags} />;

export const ClosableTags: StoryFn = () => (
	<TagList
		tags={tags}
		closable
		swatches={false}
		onTagClosed={action('Tag closed')}
		onTagClicked={action('Tag clicked')}
	/>
);

export const MultilineTags: StoryFn = () => (
	<div style={{ width: '300px' }}>
		<TagList tags={[{ label: loremIpsum({ count: 1 }), id: 'test' }]} closable swatches={false} />
	</div>
);

export const SelectableTags: StoryFn = () => (
	<TagListStoryComponent>
		<TagList
			tags={tags}
			closable={false}
			swatches={false}
			selectable={true}
			onTagClicked={action('selected a tag')}
		/>
	</TagListStoryComponent>
);

export const CustomColorSwatches: StoryFn = () => <TagList tags={colorTags} swatches />;

export const WithoutSwatches: StoryFn = () => <TagList tags={tags} swatches={false} />;

export const BorderlessTags: StoryFn = () => <TagList tags={tags} bordered={false} />;

export const Minimalist: StoryFn = () => <TagList tags={tags} swatches={false} bordered={false} />;
