import React, { cloneElement, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers';

import { BraftEditorState, WYSIWYG } from './WYSIWYG';

const withContent = (story: Function) => <div className="c-content">{story()}</div>;

// const WYSIWYG_OPTIONS = [
// 	['bold', 'italic'],
// 	['undo', 'redo'],
// 	['formatting'],
// 	['unorderedList', 'orderedList'],
// 	['removeformat'],
// 	['link'],
// ];

const WYSIWYGStoryComponent = ({ children }: { children: ReactElement }) => {
	const [state, setState] = useState(null);

	return cloneElement(children, {
		state,
		onChange: (newState: BraftEditorState) => {
			action('html changes')(newState.toHTML());
			setState(newState);
		},
	});
};

storiesOf('components/WYSIWYG', module)
	.addParameters({ jest: ['WYSIWYG'] })
	.addDecorator(withContent)
	.add('WYSIWYG', () => (
		<WYSIWYGStoryComponent>
			<WYSIWYG
				id="story-wysiwyg-1"
				initialHtml={
					'<h2>Welcome!</h2><p>This prefilled content is all <strong>editable</strong>.</p>'
				}
			/>
		</WYSIWYGStoryComponent>
	));
// .add('WYSIWYG disabled', () => (
// 	<WYSIWYG
// 		id="story-wysiwyg-2"
// 		data={'<h2>Welcome!</h2><p>This prefilled content is all <strong>editable</strong>.</p>'}
// 		disabled
// 	/>
// ))
// .add('WYSIWYG with limited buttons', () => (
// 	<WYSIWYG id="story-wysiwyg-3" btns={WYSIWYG_OPTIONS} />
// ))
// .add('WYSIWYG with simple links', () => <WYSIWYG id="story-wysiwyg-4" minimalLinks />)
// .add('WYSIWYG with table button', () => (
// 	<WYSIWYG
// 		id="story-wysiwyg-5"
// 		btns={[...WYSIWYG_OPTIONS, ['table']]}
// 		plugins={{
// 			table: {
// 				rows: 3,
// 				columns: 4,
// 				styler: 'c-table--styled',
// 			},
// 		}}
// 	/>
// ))
// .add('WYSIWYG with select above it (z-index)', () => (
// 	<>
// 		<Select options={SELECT_MOCK_OPTIONS} />
// 		<WYSIWYG
// 			id="story-wysiwyg-6"
// 			btns={[...WYSIWYG_OPTIONS, ['table']]}
// 			plugins={{
// 				table: {
// 					rows: 3,
// 					columns: 4,
// 					styler: 'c-table--styled',
// 				},
// 			}}
// 		/>
// 	</>
// ));
