import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '../../helpers/action';

import { WYSIWYG } from './WYSIWYG';

const withContent = (story: Function) => <div className="c-content">{story()}</div>;

const WYSIWYG_OPTIONS = [
	['bold', 'italic'],
	['undo', 'redo'],
	['formatting'],
	['unorderedList', 'orderedList'],
	['removeformat'],
	['link'],
];

storiesOf('WYSIWYG', module)
	.addParameters({ jest: ['WYSIWYG'] })
	.addDecorator(withContent)
	.add('WYSIWYG', () => (
		<WYSIWYG
			id="story-wysiwyg-1"
			data={'<h2>Welcome!</h2><p>This prefilled content is all <strong>editable</strong>.</p>'}
			onChange={action(`editor changed value`)}
		/>
	))
	.add('WYSIWYG disabled', () => (
		<WYSIWYG
			id="story-wysiwyg-2"
			data={'<h2>Welcome!</h2><p>This prefilled content is all <strong>editable</strong>.</p>'}
			disabled
		/>
	))
	.add('WYSIWYG with limited buttons', () => (
		<WYSIWYG id="story-wysiwyg-3" btns={WYSIWYG_OPTIONS} />
	))
	.add('WYSIWYG with table button', () => (
		<WYSIWYG
			id="story-wysiwyg-4"
			btns={[...WYSIWYG_OPTIONS, ['table']]}
			plugins={{
				table: {
					rows: 3,
					columns: 4,
					styler: 'c-table--styled',
				},
			}}
		/>
	));
