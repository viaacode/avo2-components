import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { TagList } from './TagList';

const tags = [
	'Aluminium',
	'Cadmium',
	'Dubnium',
	'Potassium',
	'Vanadium',
	'Paladium',
	'Polonium',
	'Rhodium',
	'Ytrium',
	'Uranium',
];

storiesOf('TagList', module)
	.addParameters({ jest: ['TagList'] })
	.add('TagList', () => <TagList tags={tags} />)
	.add('TagList with closable tags', () => (
		<TagList tags={tags} closable onTagClosed={action('Tag closed')} />
	))
	.add('TagList without swatches', () => <TagList tags={tags} swatches={false} />)
	.add('TagList with borderless tags', () => <TagList tags={tags} bordered={false} />);
