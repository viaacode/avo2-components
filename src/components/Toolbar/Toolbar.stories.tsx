import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { Button } from '../Button/Button';

import { Icon } from '../..';
import { Toolbar } from './Toolbar';
import { ToolbarCenter, ToolbarLeft, ToolbarRight } from './Toolbar.slots';

storiesOf('Toolbar', module)
	.addParameters({ jest: ['Toolbar', 'ToolbarBackdrop'] })
	.add('Toolbar', () => (
		<Fragment>
			<Toolbar>
				<ToolbarLeft>
					<Icon name="chevron-left" />
				</ToolbarLeft>
				<ToolbarCenter>
					<p>Regular toolbar</p>
				</ToolbarCenter>
				<ToolbarRight>
					<Button type="primary" label="Save" />
				</ToolbarRight>
			</Toolbar>
			<br />
			<Toolbar size="medium">
				<ToolbarLeft>
					<Icon name="chevron-left" />
				</ToolbarLeft>
				<ToolbarCenter>
					<p>Toolbar medium</p>
				</ToolbarCenter>
				<ToolbarRight>
					<Button type="primary" label="Save" />
				</ToolbarRight>
			</Toolbar>
			<br />
			<Toolbar spaced={true}>
				<ToolbarLeft>
					<Icon name="chevron-left" />
				</ToolbarLeft>
				<ToolbarCenter>
					<p>Toolbar spaced</p>
				</ToolbarCenter>
				<ToolbarRight>
					<Button type="primary" label="Save" />
				</ToolbarRight>
			</Toolbar>
			<br />
			<Toolbar autoHeight={true}>
				<ToolbarLeft>
					<Icon name="chevron-left" />
				</ToolbarLeft>
				<ToolbarCenter>
					<p>Toolbar autoheight</p>
				</ToolbarCenter>
				<ToolbarRight>
					<Button type="primary" label="Save" />
				</ToolbarRight>
			</Toolbar>
			<br />
			<Toolbar alignTop={true}>
				<ToolbarLeft>
					<Icon name="chevron-left" />
				</ToolbarLeft>
				<ToolbarCenter>
					<p>Toolbar alignTop</p>
				</ToolbarCenter>
				<ToolbarRight>
					<Button type="primary" label="Save" />
				</ToolbarRight>
			</Toolbar>
			<br />
			<Toolbar interactiveCenter={true}>
				<ToolbarLeft>
					<Icon name="chevron-left" />
				</ToolbarLeft>
				<ToolbarCenter>
					<p>Toolbar interactiveCenter</p>
				</ToolbarCenter>
				<ToolbarRight>
					<Button type="primary" label="Save" />
				</ToolbarRight>
			</Toolbar>
			<br />
			<Toolbar altCenter={true}>
				<ToolbarLeft>
					<Icon name="chevron-left" />
				</ToolbarLeft>
				<ToolbarCenter>
					<p>Toolbar altCenter</p>
				</ToolbarCenter>
				<ToolbarRight>
					<Button type="primary" label="Save" />
				</ToolbarRight>
			</Toolbar>
			<br />
			<Toolbar justified={true}>
				<ToolbarLeft>
					<Icon name="chevron-left" />
				</ToolbarLeft>
				<ToolbarCenter>
					<p>Toolbar justified</p>
				</ToolbarCenter>
				<ToolbarRight>
					<Button type="primary" label="Save" />
				</ToolbarRight>
			</Toolbar>
			<br />
		</Fragment>
	))
	.add('Left toolbar', () => (
		<Toolbar>
			<ToolbarLeft>
				<Icon name="chevron-left" />
			</ToolbarLeft>
		</Toolbar>
	))
	.add('Center toolbar', () => (
		<Toolbar>
			<ToolbarCenter>
				<p>Only stuff in the center</p>
			</ToolbarCenter>
		</Toolbar>
	))
	.add('Right toolbar', () => (
		<Toolbar>
			<ToolbarRight>
				<Button type="primary" label="Only right" />
			</ToolbarRight>
		</Toolbar>
	));
