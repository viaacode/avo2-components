import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import * as icons from '../Icons';
import { Icon } from './Icon';

storiesOf('Icons', module)
	.add('multicolor', () => (
		<Fragment>
			<h1>Multicolor</h1>
			<div className="c-styleguide-svg-icons__category">
				{Object.keys(icons).map(name => (
					<div className="c-styleguide-svg-icon">
						<Fragment>
							<Icon name={name} />
							<code>{name}</code>
						</Fragment>
					</div>
				))}
			</div>
		</Fragment>
	))
	.add('All icons', () => (
		<Fragment>
			<h1>All icons</h1>
			<div className="c-styleguide-svg-icons__category">
				{Object.keys(icons).map(name => (
					<div className="c-styleguide-svg-icon">
						<Fragment>
							<Icon name={name} />
							<code>{name}</code>
						</Fragment>
					</div>
				))}
			</div>
		</Fragment>
	));
