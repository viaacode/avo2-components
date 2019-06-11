import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '../../helpers/action';

import { Button } from '../Button/Button';

import { Modal } from './Modal';

storiesOf('Modal', module)
	.addParameters({ jest: ['Modal', 'ModalBackdrop'] })
	.add('Modal', () => (
		<Modal
			isOpen={true}
			title="Modal title"
			renderFooterLeft={() => <Button type="secondary" label="Cancel" />}
			renderFooterRight={() => <Button type="primary" label="Ok" />}
			onClose={action('closed')}
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
			renderFooterRight={() => <Button type="primary" label="Ok" />}
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
			renderFooterRight={() => <Button type="primary" label="Ok" />}
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
			renderFooterRight={() => <Button type="primary" label="Ok" />}
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
			renderFooterRight={() => <Button type="primary" label="Ok" />}
		>
			<p>
				It doesn't matter where this modal occurs in the source code, React automatically moves it
				to the root.
			</p>
		</Modal>
	));
