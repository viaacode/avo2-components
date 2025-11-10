import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import ContentInput from './ContentInput.js';
import type { ContentInputPropsSchema } from './ContentInput.types.js';

const meta: Meta<typeof ContentInput> = {
	title: 'Components/ContentInput',
	component: ContentInput,
};
export default meta;

const Template: StoryFn<typeof ContentInput> = (props: ContentInputPropsSchema) => {
	const [value, setValue] = useState(props.value || '');

	return (
		<ContentInput
			{...props}
			onChange={(value) => {
				setValue(value);
			}}
			value={value}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	iconStart: () => '+',
	onCancel: () => console.info('cancel'),
	onConfirm: (v: string | number | readonly string[]) => console.info('confirm', v),
};

export const CustomButtons = Template.bind({});
CustomButtons.args = {
	iconEnd: (onOpenHandler: (...params: any[]) => void) => (
		<>
			<button>1</button>
			<button onClick={onOpenHandler}>2</button>
			<button>3</button>
		</>
	),
	onCancel: () => console.info('cancel'),
	onConfirm: (v: string | number | readonly string[]) => console.info('confirm', v),
	value: 'banaan',
};
