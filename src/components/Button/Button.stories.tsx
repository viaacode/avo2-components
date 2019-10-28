import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { COLORS } from '../../colors';
import { action } from '../../helpers/action';
import { Spacer } from '../Spacer/Spacer';
import { Button } from './Button';

storiesOf('Button', module)
	.addParameters({ jest: ['Button'] })
	.add('Buttons', () => (
		<Fragment>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					title="test button"
					label="Primary button"
					type="primary"
					onClick={action('Button clicked')}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Secondary button"
					type="secondary"
					onClick={action('Button clicked')}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Tertiary button"
					type="tertiary"
					onClick={action('Button clicked')}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Link button"
					type="link"
					onClick={action('Button clicked')}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Inline-link button"
					type="inline-link"
					onClick={action('Button clicked')}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Danger button"
					type="danger"
					onClick={action('Button clicked')}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Danger (hover) button"
					type="danger-hover"
					onClick={action('Button clicked')}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Borderless button"
					type="borderless"
					onClick={action('Button clicked')}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Disabled button"
					disabled
					title={'reason why this button is disabled'}
					onClick={action('Button clicked')}
				/>
			</Spacer>
		</Fragment>
	))
	.add('Button with icon', () => (
		<Fragment>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Primary button" type="primary" icon="plus" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Secondary button" type="secondary" icon="search" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Tertiary button" type="tertiary" icon="database" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Link button" type="link" icon="link" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Inline-link button" type="inline-link" icon="link" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Danger button" type="danger" icon="x-circle" />
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Danger (hover) button"
					type="danger-hover"
					icon="x-square"
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Borderless button" type="borderless" icon="tag" />
			</Spacer>
		</Fragment>
	))
	.add('Icon only button', () => (
		<Fragment>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" type="primary" icon="plus" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" type="secondary" icon="search" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" type="tertiary" icon="database" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" type="link" icon="link" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" type="inline-link" icon="link" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" type="danger" icon="x-circle" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" type="danger-hover" icon="x-square" />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" type="borderless" icon="tag" />
			</Spacer>
		</Fragment>
	))
	.add('Button with arrow', () => (
		<Fragment>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Primary button" type="primary" icon="plus" arrow />
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Secondary button"
					type="secondary"
					icon="search"
					arrow
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Tertiary button"
					type="tertiary"
					icon="database"
					arrow
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Link button" type="link" icon="link" arrow />
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Inline-link button"
					type="inline-link"
					icon="link"
					arrow
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Danger button" type="danger" icon="x-circle" arrow />
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Danger (hover) button"
					type="danger-hover"
					icon="x-square"
					arrow
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Borderless button"
					type="borderless"
					icon="tag"
					arrow
				/>
			</Spacer>
		</Fragment>
	))
	.add('Small buttons', () => (
		<Fragment>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Primary button"
					type="primary"
					icon="plus"
					size="small"
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Secondary button"
					type="secondary"
					icon="search"
					size="small"
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Tertiary button"
					type="tertiary"
					icon="database"
					size="small"
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Link button" type="link" icon="link" size="small" />
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Danger button"
					type="danger"
					icon="x-circle"
					size="small"
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Danger (hover) button"
					type="danger-hover"
					icon="x-square"
					size="small"
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Borderless button"
					type="borderless"
					icon="tag"
					size="small"
				/>
			</Spacer>
		</Fragment>
	))
	.add('Block buttons', () => (
		<Fragment>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Primary button"
					type="primary"
					icon="plus"
					block={true}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Secondary button"
					type="secondary"
					icon="search"
					block={true}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Tertiary button"
					type="tertiary"
					icon="database"
					block={true}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Link button" type="link" icon="link" block={true} />
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Danger button"
					type="danger"
					icon="x-circle"
					block={true}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Danger (hover) button"
					type="danger-hover"
					icon="x-square"
					block={true}
				/>
			</Spacer>
			<Spacer margin="bottom">
				<Button
					ariaLabel="test button"
					label="Borderless button"
					type="borderless"
					icon="tag"
					block={true}
				/>
			</Spacer>
		</Fragment>
	))
	.add('Inverse buttons', () => (
		<Fragment>
			<Spacer margin="bottom">
				<span style={{ padding: '20px', background: COLORS.GRAYSCALE.G800 }}>
					<Button ariaLabel="test button" label="Secondary button" type="secondary-i" icon="plus" />
				</span>
			</Spacer>
			<Spacer margin="bottom">
				<span style={{ padding: '20px', background: COLORS.GRAYSCALE.G800 }}>
					<Button
						ariaLabel="test button"
						label="Borderless button"
						type="borderless-i"
						icon="search"
					/>
				</span>
			</Spacer>
		</Fragment>
	))
	.add('Active buttons', () => (
		<Fragment>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Active button" type="secondary" active />
			</Spacer>
			<Spacer margin="bottom">
				<Button ariaLabel="test button" label="Inactive button" type="secondary" />
			</Spacer>
		</Fragment>
	));
