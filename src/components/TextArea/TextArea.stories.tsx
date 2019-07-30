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
	.add('TextArea heights', () => (
		<Fragment>
			<TextAreaStoryComponent>
				<TextArea placeholder="An autosizing TextArea" height="auto" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="A small TextArea" height="small" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="A medium TextArea" height="medium" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="A large TextArea" height="large" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="A TextArea with 10 rows" rows={10} />
			</TextAreaStoryComponent>
		</Fragment>
	))
	.add('TextArea widths', () => (
		<Fragment>
			<TextAreaStoryComponent>
				<TextArea placeholder="An xsmall TextArea" width="xsmall" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="An small TextArea" width="small" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="An medium TextArea" width="medium" />
			</TextAreaStoryComponent>
			<div className="u-spacer-bottom" />
			<TextAreaStoryComponent>
				<TextArea placeholder="An large TextArea" width="large" />
			</TextAreaStoryComponent>
		</Fragment>
	));
