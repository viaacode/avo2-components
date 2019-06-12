import React from 'react';

import { storiesOf } from '@storybook/react';

import { Thumbnail } from './Thumbnail';

storiesOf('Thumbnail', module)
	.addParameters({ jest: ['Thumbnail'] })
	.add('Thumbnail (image)', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail src="images/thumbnail.jpg" href="#" count="4" icon="video" label="collectie" />
		</div>
	))
	.add('Thumbnail (placeholder)', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail href="#" count="4" icon="video" label="collectie" />
		</div>
	))
	.add('Thumbnail with label', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail src="images/thumbnail.jpg" href="#" count="4" icon="video" label="collectie" />
		</div>
	))
	.add('Thumbnail without label', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail src="images/thumbnail.jpg" href="#" count="4" icon="video" />
		</div>
	))
	.add('Thumbnail without count', () => (
		<div className="o-grid-col-bp3-4">
			<Thumbnail src="images/thumbnail.jpg" href="#" icon="video" label="collectie" />
		</div>
	));
