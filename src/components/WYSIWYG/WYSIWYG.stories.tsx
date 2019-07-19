import React from 'react';

import { storiesOf } from '@storybook/react';

import { WYSIWYG } from './WYSIWYG';

const withContent = (story: Function) => <div className="c-content">{story()}</div>;

storiesOf('WYSIWYG', module)
	.addParameters({ jest: ['WYSIWYG'] })
	.addDecorator(withContent)
	.add('WYSIWYG', () => (
		<WYSIWYG
			id="story-wysiwyg-1"
			data={'<h2>Welcome!</h2><p>This prefilled content is all <strong>editable</strong>.</p>'}
		/>
	))
	.add('WYSIWYG with limited buttons', () => (
		<WYSIWYG
			id="story-wysiwyg-2"
			buttons={[
				['strong', 'em'],
				['undo', 'redo'],
				['formatting'],
				['unorderedList', 'orderedList'],
				['removeformat'],
				['link'],
			]}
		/>
	))
	.add('WYSIWYG with table button', () => (
		<WYSIWYG
			id="story-wysiwyg-2"
			buttons={[
				['strong', 'em'],
				['undo', 'redo'],
				['formatting'],
				['unorderedList', 'orderedList'],
				['removeformat'],
				['link'],
				['table'],
			]}
			plugins={{
				table: {
					rows: 3,
					columns: 4,
					styler: 'c-table--styled',
				},
			}}
		/>
	));
