import { storiesOf } from '@storybook/react';
import React, { cloneElement, ReactElement, useState } from 'react';

import { Spacer } from '../Spacer/Spacer';
import { Select } from '../Select/Select';
import { SELECT_MOCK_OPTIONS } from '../Select/Select.mock';
import { action } from '../../helpers';

import { WYSIWYG2 } from './WYSIWYG2';
import { WYSIWYG2Control } from '../index';

const withContent = (story: Function) => <div className="c-content">{story()}</div>;

export const WYSIWYG2_OPTIONS: WYSIWYG2Control[] = [
	'undo',
	'redo',
	'separator',
	'bold',
	'italic',
	'underline',
	'separator',
	'list-ul',
	'list-ol',
	'separator',
	'link',
];

const WYSIWYG2StoryComponent = ({ children }: { children: ReactElement }) => {
	const [state, setState] = useState(null);

	return cloneElement(children, {
		state,
		onChange: (newState: any) => {
			action('onChange')(newState.toHTML());
			setState(newState);
		},
	});
};

storiesOf('components/WYSIWYG2', module)
	.addParameters({ jest: ['WYSIWYG2'] })
	.addDecorator(withContent)
	.add('WYSIWYG2', () => (
		<WYSIWYG2StoryComponent>
			<WYSIWYG2
				initialHtml={
					'<h2>Welcome!</h2><p>This prefilled content is all <strong>editable</strong>.</p>'
				}
			/>
		</WYSIWYG2StoryComponent>
	))
	.add('WYSIWYG2 disabled', () => (
		<WYSIWYG2StoryComponent>
			<WYSIWYG2
				initialHtml={
					'<h2>Welcome!</h2><p>This prefilled content is all <strong>editable</strong>.</p>'
				}
				disabled
			/>
		</WYSIWYG2StoryComponent>
	))
	.add('WYSIWYG2 with limited buttons', () => (
		<WYSIWYG2StoryComponent>
			<WYSIWYG2 controls={WYSIWYG2_OPTIONS} />
		</WYSIWYG2StoryComponent>
	))
	.add('WYSIWYG2 with table button', () => (
		<WYSIWYG2StoryComponent>
			<WYSIWYG2 controls={[...WYSIWYG2_OPTIONS, 'separator', 'table']} />
		</WYSIWYG2StoryComponent>
	))
	.add('WYSIWYG2 with initial table html', () => (
		<WYSIWYG2StoryComponent>
			<WYSIWYG2
				controls={[...WYSIWYG2_OPTIONS, 'separator', 'table']}
				initialHtml={
					'<p></p><p></p><table class="c-editor-table"><tr><td colSpan="1" rowSpan="1"><u>dit is een test</u></td><td colSpan="1" rowSpan="1"><u>dit ook</u></td><td colSpan="1" rowSpan="1"><u>ook dit</u></td></tr><tr><td colSpan="1" rowSpan="1">test</td><td colSpan="1" rowSpan="1"><strong>test</strong></td><td colSpan="1" rowSpan="1">test</td></tr><tr><td colSpan="1" rowSpan="1"></td><td colSpan="1" rowSpan="1"></td><td colSpan="1" rowSpan="1"></td></tr></table><p></p>'
				}
			/>
		</WYSIWYG2StoryComponent>
	))
	.add('WYSIWYG2 with select above it (z-index)', () => (
		<>
			<Spacer margin="bottom-small">
				<Select options={SELECT_MOCK_OPTIONS} />
			</Spacer>

			<WYSIWYG2StoryComponent>
				<WYSIWYG2 controls={[...WYSIWYG2_OPTIONS, 'separator', 'table']} />
			</WYSIWYG2StoryComponent>
		</>
	));
