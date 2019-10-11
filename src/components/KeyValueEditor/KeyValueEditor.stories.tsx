import React, { cloneElement, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { KeyValueEditor } from './KeyValueEditor';

const dataArray = [
	{
		myKey: 'setting1',
		myValue: 'value1',
		extraValue: 'test',
	},
	{
		myKey: 'setting2',
		myValue: 'value2',
		extraValue: 'test',
	},
	{
		myKey: 'setting3',
		myValue: 'value3',
		extraValue: 'test',
	},
];

const dataObj = {
	setting1: 'value1',
	setting2: 'value2',
	setting3: 'value3',
};

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

storiesOf('KeyValueEditor', module)
	.addParameters({ jest: ['KeyValueEditor'] })
	.add('KeyValueEditor dataArray', () => (
		<KeyValueEditorStoryComponent initialData={dataArray}>
			<KeyValueEditor
				data={[]}
				onChange={action('dataChanged')}
				keyProp="myKey"
				valueProp="myValue"
			/>
		</KeyValueEditorStoryComponent>
	))
	.add('KeyValueEditor dataObject', () => (
		<KeyValueEditorStoryComponent initialData={dataObj}>
			<KeyValueEditor data={{}} onChange={action('dataChanged')} />
		</KeyValueEditorStoryComponent>
	))
	.add('KeyValueEditor readonly', () => (
		<KeyValueEditorStoryComponent initialData={dataObj}>
			<KeyValueEditor data={{}} readonly />
		</KeyValueEditorStoryComponent>
	))
	.add('KeyValueEditor empty data', () => (
		<KeyValueEditorStoryComponent initialData={{}}>
			<KeyValueEditor data={{}} />
		</KeyValueEditorStoryComponent>
	));
