import React, { cloneElement, Fragment, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { TextArea } from './TextArea';

const TextAreaStoryComponent = ({
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
			action('TextArea changed')(value);
			setValue(value);
		},
	});
};

storiesOf('TextArea', module)
	.addParameters({ jest: ['TextArea'] })
	.add('TextArea', () => (
		<Fragment>
			<TextAreaStoryComponent>
				<TextArea placeholder="Type something here..." />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea disabled placeholder="No typing here..." />
			</TextAreaStoryComponent>
		</Fragment>
	))
	.add('TextArea sizes', () => (
		<Fragment>
			<TextAreaStoryComponent>
				<TextArea placeholder="A small TextArea" size="small" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="A medium TextArea" size="medium" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="A large TextArea" size="large" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="A TextArea with 10 rows" rows={10} />
			</TextAreaStoryComponent>
		</Fragment>
	))
	.add('TextArea autosize', () => (
		<Fragment>
			<TextAreaStoryComponent>
				<TextArea placeholder="An autosizing TextArea" autosize={true} />
			</TextAreaStoryComponent>
		</Fragment>
	));
