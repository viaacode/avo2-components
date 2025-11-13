import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';

import image200x200 from '../../../static/images/200x200.jpg';
import image500x200 from '../../../static/images/500x200.jpg';
import { ImageGrid } from './ImageGrid';

const images = [
	image200x200,
	image200x200,
	image200x200,
	image200x200,
	image200x200,
	image200x200,
	image200x200,
	image200x200,
	image200x200,
	image200x200,
];

const images2 = [
	image500x200,
	image500x200,
	image500x200,
	image500x200,
	image500x200,
	image500x200,
	image500x200,
	image500x200,
	image500x200,
	image500x200,
];

const ImageGroupStoryComponent = ({
	children,
	defaultValue = [],
}: {
	children: ReactElement;
	defaultValue?: string[];
}) => {
	const [value, setValue] = useState(defaultValue);
	return cloneElement(children, {
		value,
		onChange: (value: string[]) => {
			action('Image selection changed')(value);
			setValue(value);
		},
	});
};

const meta: Meta = {
	title: 'components/ImageGrid',
	parameters: { jest: ['Image'] },
};
export default meta;

type Story = StoryObj;

export const ImageGrid200x200: Story = { render: () => <ImageGrid images={images} /> };
export const ImageGrid500x200: Story = {
	render: () => <ImageGrid images={images2} width={500} height={200} />,
};
export const ImageGrid200x200Contain: Story = {
	render: () => <ImageGrid images={images2} width={200} height={200} fill="contain" />,
};
export const ImageGrid200x200Cover: Story = {
	render: () => <ImageGrid images={images2} width={200} height={200} fill="cover" />,
};
export const ImageGridSelectableSingle: Story = {
	render: () => (
		<ImageGroupStoryComponent>
			<ImageGrid images={images} allowSelect={true} />
		</ImageGroupStoryComponent>
	),
};
export const ImageGridSelectableMulti: Story = {
	render: () => (
		<ImageGroupStoryComponent>
			<ImageGrid images={images} allowSelect={true} allowMulti={true} />
		</ImageGroupStoryComponent>
	),
};
export const ImageGridSelectableMultiDefaultValue: Story = {
	render: () => (
		<ImageGroupStoryComponent defaultValue={images.slice(0, 3)}>
			<ImageGrid images={images} allowSelect={true} allowMulti={true} />
		</ImageGroupStoryComponent>
	),
};
