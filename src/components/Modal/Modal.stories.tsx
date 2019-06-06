import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from '../Button/Button';

import { Modal } from './Modal';

storiesOf('Modal', module)
	.addParameters({ jest: ['Modal', 'ModalBackdrop'] })
	.add('Modal', () => (
		<Modal
			isOpen={true}
			title="Modal title"
			renderOptions={() => (
				<Fragment>
					<Button type="secondary" label="Cancel" />
					<Button type="primary" label="Ok" />
				</Fragment>
			)}
		>
			<p>
				It doesn't matter where this modal occurs in the source code, React automatically moves it
				to the root.
			</p>
		</Modal>
	))
	.add('Small modal', () => (
		<Modal
			isOpen={true}
			title="Modal title"
			size="small"
			renderOptions={() => <Button type="primary" label="Ok" />}
		>
			<p>
				It doesn't matter where this modal occurs in the source code, React automatically moves it
				to the root.
			</p>
		</Modal>
	))
	.add('Medium modal', () => (
		<Modal
			isOpen={true}
			title="Modal title"
			size="medium"
			renderOptions={() => <Button type="primary" label="Ok" />}
		>
			<p>
				It doesn't matter where this modal occurs in the source code, React automatically moves it
				to the root.
			</p>
		</Modal>
	))
	.add('Fullscreen modal', () => (
		<Modal
			isOpen={true}
			title="Modal title"
			size="fullscreen"
			renderOptions={() => <Button type="primary" label="Ok" />}
		>
			<p>
				It doesn't matter where this modal occurs in the source code, React automatically moves it
				to the root.
			</p>
		</Modal>
	))
	.add('Auto-height modal', () => (
		<Modal
			isOpen={true}
			title="Modal title"
			size="auto"
			renderOptions={() => <Button type="primary" label="Ok" />}
		>
			<p>
				It doesn't matter where this modal occurs in the source code, React automatically moves it
				to the root.
			</p>
		</Modal>
	));
