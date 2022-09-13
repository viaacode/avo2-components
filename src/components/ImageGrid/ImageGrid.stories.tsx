import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

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

storiesOf('components/ImageGrid', module)
	.addParameters({ jest: ['Image'] })
	.add('ImageGrid 200x200', () => <ImageGrid images={images} />)
	.add('ImageGrid 500x200', () => <ImageGrid images={images2} width={500} height={200} />)
	.add('ImageGrid 200x200 fill contain', () => (
		<ImageGrid images={images2} width={200} height={200} fill="contain" />
	))
	.add('ImageGrid 200x200 fill cover', () => (
		<ImageGrid images={images2} width={200} height={200} fill="cover" />
	))
	.add('ImageGrid selectable single', () => (
		<ImageGroupStoryComponent>
			<ImageGrid images={images} allowSelect={true} />
		</ImageGroupStoryComponent>
	))
	.add('ImageGrid selectable multi', () => (
		<ImageGroupStoryComponent>
			<ImageGrid images={images} allowSelect={true} allowMulti={true} />
		</ImageGroupStoryComponent>
	))
	.add('ImageGrid selectable multi default value', () => (
		<ImageGroupStoryComponent defaultValue={images.slice(0, 3)}>
			<ImageGrid images={images} allowSelect={true} allowMulti={true} />
		</ImageGroupStoryComponent>
	));
