import type { Meta, StoryFn } from '@storybook/react';
import { cloneElement, type ReactElement, useState } from 'react';

import { MultiRange } from './MultiRange.js';

const MultiRangeStoryComponent = ({
	children,
	defaultValues = [0, 100],
}: {
	children: ReactElement;
	defaultValues?: number[];
}) => {
	const [values, setValues] = useState(defaultValues);

	return cloneElement(children, {
		values,
		onChange: (values: number[]) => {
			console.log('Input changed', values);
			setValues(values);
		},
	});
};

export default {
	title: 'components/MultiRange',
	component: MultiRange,
	parameters: {
		jest: ['MultiRange'],
	},
} as Meta;

export const Default: StoryFn = () => (
	<MultiRangeStoryComponent>
		<MultiRange />
	</MultiRangeStoryComponent>
);

export const Disabled: StoryFn = () => (
	<MultiRangeStoryComponent>
		<MultiRange disabled />
	</MultiRangeStoryComponent>
);

export const AllowOverlap: StoryFn = () => (
	<MultiRangeStoryComponent>
		<MultiRange allowOverlap={true} onChange={(values) => console.log('Value changed', values)} />
	</MultiRangeStoryComponent>
);

export const WithDefaultValues: StoryFn = () => (
	<MultiRangeStoryComponent defaultValues={[20, 60]}>
		<MultiRange />
	</MultiRangeStoryComponent>
);

export const WithSingleValue: StoryFn = () => (
	<MultiRangeStoryComponent defaultValues={[20]}>
		<MultiRange />
	</MultiRangeStoryComponent>
);

export const WithNumberField: StoryFn = () => (
	<MultiRangeStoryComponent defaultValues={[20]}>
		<MultiRange showNumber />
	</MultiRangeStoryComponent>
);
