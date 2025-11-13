import { Fragment } from 'react';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { IconNameSchema } from '../Icon/Icon.types';

import { Toolbar } from './Toolbar';
import { ToolbarCenter, ToolbarLeft, ToolbarRight } from './Toolbar.slots';
import { ToolbarItem } from './ToolbarItem/ToolbarItem';
import { ToolbarTitle } from './ToolbarTitle/ToolbarTitle';

export default {
	title: 'components/Toolbar',

	parameters: {
		jest: ['Toolbar', 'ToolbarItem', 'ToolbarTitle'],
	},
};

export const _Toolbar = () => (
	<Fragment>
		<Toolbar>
			<ToolbarLeft>
				<ToolbarItem>
					<Icon name={IconNameSchema.chevronLeft} />
				</ToolbarItem>
			</ToolbarLeft>
			<ToolbarCenter>
				<ToolbarItem>
					<ToolbarTitle>Regular toolbar</ToolbarTitle>
				</ToolbarItem>
			</ToolbarCenter>
			<ToolbarRight>
				<ToolbarItem>
					<Button type="primary" label="Save" ariaLabel="Save" />
				</ToolbarItem>
			</ToolbarRight>
		</Toolbar>
		<br />
		<Toolbar size="medium">
			<ToolbarLeft>
				<ToolbarItem>
					<Icon name={IconNameSchema.chevronLeft} />
				</ToolbarItem>
			</ToolbarLeft>
			<ToolbarCenter>
				<ToolbarItem>
					<p>Toolbar medium</p>
				</ToolbarItem>
			</ToolbarCenter>
			<ToolbarRight>
				<ToolbarItem>
					<Button type="primary" label="Save" ariaLabel="Save" />
				</ToolbarItem>
			</ToolbarRight>
		</Toolbar>
		<br />
		<Toolbar spaced>
			<ToolbarLeft>
				<ToolbarItem>
					<Icon name={IconNameSchema.chevronLeft} />
				</ToolbarItem>
			</ToolbarLeft>
			<ToolbarCenter>
				<ToolbarItem>
					<p>Toolbar spaced</p>
				</ToolbarItem>
			</ToolbarCenter>
			<ToolbarRight>
				<ToolbarItem>
					<Button type="primary" label="Save" ariaLabel="Save" />
				</ToolbarItem>
			</ToolbarRight>
		</Toolbar>
		<br />
		<Toolbar justify>
			<ToolbarLeft>
				<ToolbarItem>
					<Icon name={IconNameSchema.chevronLeft} />
				</ToolbarItem>
			</ToolbarLeft>
			<ToolbarCenter>
				<ToolbarItem>
					<p>Toolbar justified</p>
				</ToolbarItem>
			</ToolbarCenter>
			<ToolbarRight>
				<ToolbarItem>
					<Button type="primary" label="Save" ariaLabel="Save" />
				</ToolbarItem>
			</ToolbarRight>
		</Toolbar>
		<br />
		<Toolbar autoHeight>
			<ToolbarLeft>
				<ToolbarItem>
					<Icon name={IconNameSchema.chevronLeft} />
				</ToolbarItem>
			</ToolbarLeft>
			<ToolbarCenter>
				<ToolbarItem>
					<p>Toolbar autoheight</p>
				</ToolbarItem>
			</ToolbarCenter>
			<ToolbarRight>
				<ToolbarItem>
					<Button type="primary" label="Save" ariaLabel="Save" />
				</ToolbarItem>
			</ToolbarRight>
		</Toolbar>
		<br />
		<Toolbar alignTop>
			<ToolbarLeft>
				<ToolbarItem>
					<Icon name={IconNameSchema.chevronLeft} />
				</ToolbarItem>
			</ToolbarLeft>
			<ToolbarCenter>
				<ToolbarItem>
					<p>Toolbar alignTop</p>
				</ToolbarItem>
			</ToolbarCenter>
			<ToolbarRight>
				<ToolbarItem>
					<Button type="primary" label="Save" ariaLabel="Save" />
				</ToolbarItem>
			</ToolbarRight>
		</Toolbar>
	</Fragment>
);

export const LeftToolbar = () => (
	<Toolbar>
		<ToolbarLeft>
			<ToolbarItem>
				<Icon name={IconNameSchema.chevronLeft} />
			</ToolbarItem>
		</ToolbarLeft>
	</Toolbar>
);

LeftToolbar.story = {
	name: 'Left toolbar',
};

export const CenterToolbar = () => (
	<Toolbar>
		<ToolbarCenter>
			<ToolbarItem>
				<p>Only stuff in the center</p>
			</ToolbarItem>
		</ToolbarCenter>
	</Toolbar>
);

CenterToolbar.story = {
	name: 'Center toolbar',
};

export const RightToolbar = () => (
	<Toolbar>
		<ToolbarRight>
			<ToolbarItem>
				<Button type="primary" label="Only right" ariaLabel="Only right" />
			</ToolbarItem>
		</ToolbarRight>
	</Toolbar>
);

RightToolbar.story = {
	name: 'Right toolbar',
};

export const FullToolbar = () => (
	<Toolbar justify>
		<ToolbarItem grow>
			<div
				style={{
					margin: '3.2rem 0',
					border: 'none',
					borderBottom: '1px solid #D6DEE3',
				}}
			/>
		</ToolbarItem>
		<ToolbarItem>
			<Button type="secondary" icon={IconNameSchema.add} ariaLabel="Sectie toevoegen" />
		</ToolbarItem>
		<ToolbarItem grow>
			<div
				style={{
					margin: '3.2rem 0',
					border: 'none',
					borderBottom: '1px solid #D6DEE3',
				}}
			/>
		</ToolbarItem>
	</Toolbar>
);

FullToolbar.story = {
	name: 'Full toolbar',
};
