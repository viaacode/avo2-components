import React, { cloneElement, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers';
import { KeyValueEditor } from './KeyValueEditor';
import { DATA_ARRAY_MOCK, DATA_OBJ_MOCK } from './KeyValueEditor.mock';

const KeyValueEditorStoryComponent = ({
	children,
	initialData,
}: {
	children: ReactElement;
	initialData: any[] | { [key: string]: string };
}) => {
	const [data, setData] = useState(initialData);

	return cloneElement(children, {
		data,
		onChange: (newData: any[] | { [key: string]: string }) => {
			action('Data changed')(newData);
			setData(newData);
		},
	});
};

storiesOf('components/KeyValueEditor', module)
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
		<KeyValueEditorStoryComponent initialData={DATA_OBJ_MOCK}>
			<KeyValueEditor data={{}} onChange={action('dataChanged')} />
		</KeyValueEditorStoryComponent>
	))
	.add('KeyValueEditor readonly', () => (
		<KeyValueEditorStoryComponent initialData={DATA_OBJ_MOCK}>
			<KeyValueEditor data={{}} readonly />
		</KeyValueEditorStoryComponent>
	))
	.add('KeyValueEditor empty data', () => (
		<KeyValueEditorStoryComponent initialData={{}}>
			<KeyValueEditor data={{}} />
		</KeyValueEditorStoryComponent>
	));
