import type { Meta, StoryObj } from '@storybook/react';
import { cloneElement, Fragment, type ReactElement, useState } from 'react';
import { action } from 'storybook/actions';
import { IconNameSchema } from '../Icon/Icon.types.js';
import { Spacer } from '../Spacer/Spacer.js';
import { TextInput } from './TextInput.js';

const TextInputStoryComponent = ({
	children,
	defaultValue = '',
}: {
	children: ReactElement;
	defaultValue?: string;
}) => {
	const [value, setValue] = useState(defaultValue);

	return cloneElement(children, {
		value,
		onChange: (value: string) => {
			action('Input changed')(value);
			setValue(value);
		},
	});
};

const meta: Meta<typeof TextInput> = {
	title: 'components/TextInput',
	component: TextInput,
	parameters: {
		jest: ['TextInput'],
	},
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
	render: () => (
		<Fragment>
			<Spacer margin="bottom">
				<TextInputStoryComponent>
					<TextInput
						type="email"
						placeholder="Enter your email..."
						onChange={action('onChange')}
						onBlur={action('onBlur')}
						onKeyUp={action('onkeyup')}
					/>
				</TextInputStoryComponent>
			</Spacer>
			<Spacer margin="bottom">
				<TextInputStoryComponent>
					<TextInput
						type="password"
						placeholder="Enter your password..."
						onChange={action('onChange')}
					/>
				</TextInputStoryComponent>
			</Spacer>
			<TextInputStoryComponent>
				<TextInput disabled placeholder="No typing here..." />
			</TextInputStoryComponent>
		</Fragment>
	),
};

export const WithoutPlaceholder: Story = {
	render: () => (
		<Fragment>
			<Spacer margin="bottom">
				<TextInputStoryComponent>
					<TextInput onChange={action('onChange')} />
				</TextInputStoryComponent>
			</Spacer>
			<TextInputStoryComponent>
				<TextInput disabled />
			</TextInputStoryComponent>
		</Fragment>
	),
};

export const WithDefaultValue: Story = {
	render: () => (
		<Fragment>
			<Spacer margin="bottom">
				<TextInputStoryComponent>
					<TextInput
						placeholder="And this is the placeholder"
						value="This is the default value"
						onChange={action('onChange')}
					/>
				</TextInputStoryComponent>
			</Spacer>
			<TextInputStoryComponent defaultValue="This is the default value">
				<TextInput disabled />
			</TextInputStoryComponent>
		</Fragment>
	),
};

export const WithIcon: Story = {
	render: () => (
		<Fragment>
			<Spacer margin="bottom">
				<TextInputStoryComponent>
					<TextInput
						icon={IconNameSchema.search}
						placeholder="Type something here..."
						onChange={action('onChange')}
					/>
				</TextInputStoryComponent>
			</Spacer>
			<TextInputStoryComponent>
				<TextInput icon={IconNameSchema.x} disabled placeholder="No typing here..." />
			</TextInputStoryComponent>
		</Fragment>
	),
};
