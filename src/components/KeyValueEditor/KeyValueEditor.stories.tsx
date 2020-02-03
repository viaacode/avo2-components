import React, { cloneElement, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';
import { KeyValueEditor } from './KeyValueEditor';
import { DATA_ARRAY_MOCK, DATA_OBJ_MOCK } from './KeyValueEditor.mock';

const KeyValueEditorStoryComponent = ({
	children,
	initialData,
}: {
	children: ReactElement;
	initialData: [string, string][];
}) => {
	const [data, setData] = useState(initialData);

	return cloneElement(children, {
		data,
		onChange: (newData: [string, string][]) => {
			action('Data changed')(newData);
			setData(newData);
		},
	});
};

storiesOf('KeyValueEditor', module)
	.addParameters({ jest: ['KeyValueEditor'] })
	.add('KeyValueEditor dataArray', () => (
		<KeyValueEditorStoryComponent initialData={DATA_ARRAY_MOCK}>
			<KeyValueEditor
				data={[]}
				onChange={action('dataChanged')}
				keyProp="myKey"
				valueProp="myValue"
			/>
		</KeyValueEditorStoryComponent>
	))
	.add('KeyValueEditor dataObject', () => (
		<KeyValueEditorStoryComponent initialData={Object.entries(DATA_OBJ_MOCK)}>
			<KeyValueEditor data={[]} onChange={action('dataChanged')} />
		</KeyValueEditorStoryComponent>
	))
	.add('KeyValueEditor readonly', () => (
		<KeyValueEditorStoryComponent initialData={DATA_ARRAY_MOCK}>
			<KeyValueEditor data={[]} readonly />
		</KeyValueEditorStoryComponent>
	))
	.add('KeyValueEditor empty data', () => (
		<KeyValueEditorStoryComponent initialData={[]}>
			<KeyValueEditor data={[]} />
		</KeyValueEditorStoryComponent>
	));
