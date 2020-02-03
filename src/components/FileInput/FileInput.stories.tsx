import React, { cloneElement, Fragment, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { FileInput } from './FileInput';

const FileInputStoryComponent = ({
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

storiesOf('components/FileInput', module)
	.addParameters({ jest: ['FileInput'] })
	.add('FileInput', () => (
		<FileInputStoryComponent>
			<FileInput placeholder="Profielfoto uploaden" onChange={action('onChange')} />
		</FileInputStoryComponent>
	))
	.add('FileInput disabled', () => (
		<FileInputStoryComponent>
			<FileInput disabled placeholder="Profielfoto uploaden" onChange={action('onChange')} />
		</FileInputStoryComponent>
	))
	.add('FileInput without placeholder', () => (
		<Fragment>
			<FileInputStoryComponent>
				<FileInput onChange={action('onChange')} />
			</FileInputStoryComponent>
		</Fragment>
	));
