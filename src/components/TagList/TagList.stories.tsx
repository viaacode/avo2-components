import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '../../helpers/action';

import { TagList } from './TagList';

const tags = [
	{ label: 'Aluminium', id: 'aluminium' },
	{ label: 'Cadmium', id: 'cadmium' },
	{ label: 'Dubnium', id: 'dubnium' },
	{ label: 'Potassium', id: 'potassium' },
	{ label: 'Vanadium', id: 'vanadium' },
	{ label: 'Palladium', id: 'palladium' },
	{ label: 'Polonium', id: 'polonium' },
	{ label: 'Rhodium', id: 'rhodium' },
	{ label: 'Yttrium', id: 'yttrium' },
	{ label: 'Uranium', id: 'uranium' },
];

storiesOf('TagList', module)
	.addParameters({ jest: ['TagList'] })
	.add('TagList', () => <TagList tags={tags} />)
	.add('TagList with closable tags', () => (
		<TagList
			tags={tags}
			closable
			swatches={false}
			onTagClosed={action('Tag closed')}
			onTagClicked={action('Tag clicked')}
		/>
	))
	.add('TagList without swatches', () => <TagList tags={tags} swatches={false} />)
	.add('TagList with borderless tags', () => <TagList tags={tags} bordered={false} />)
	.add('Minimalist TagList', () => <TagList tags={tags} swatches={false} bordered={false} />);
