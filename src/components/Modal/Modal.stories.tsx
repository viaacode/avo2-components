import React, { cloneElement, Fragment, ReactElement, useState } from 'react';

import { storiesOf } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { Button } from '../Button/Button';

import { Modal } from './Modal';
import { ModalBody, ModalFooterLeft, ModalFooterRight } from './Modal.slots';

const ModalStoryComponent = ({ children }: { children: ReactElement }) => {
	const [isOpen, setOpen] = useState(false);

	const childrenWithProps = cloneElement(children, { isOpen, onClose: () => setOpen(false) });

	return (
		<Fragment>
			<Button onClick={() => setOpen(true)} label="Open modal" ariaLabel="Open modal" />
			{childrenWithProps}
		</Fragment>
	);
};

storiesOf('Modal', module)
	.addParameters({ jest: ['Modal', 'ModalBackdrop'] })
	.add('Modal', () => (
		<ModalStoryComponent>
			<Modal title="Modal title" isOpen={false}>
				<ModalBody>
					<p>
						It doesn't matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterLeft>
					<Button type="secondary" label="Cancel" ariaLabel="Cancel" />
				</ModalFooterLeft>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	))
	.add('Small modal', () => (
		<ModalStoryComponent>
			<Modal isOpen={true} title="Modal title" size="small">
				<ModalBody>
					<p>
						It doesn't matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	))
	.add('Medium modal', () => (
		<ModalStoryComponent>
			<Modal isOpen={true} title="Modal title" size="medium">
				<ModalBody>
					<p>
						It doesn't matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	))
	.add('Large modal', () => (
		<ModalStoryComponent>
			<Modal isOpen={true} title="Modal title" size="large">
				<ModalBody>
					<p>
						It doesn't matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	))
	.add('Extra large modal', () => (
		<ModalStoryComponent>
			<Modal isOpen={true} title="Modal title" size="extra-large">
				<ModalBody>
					<p>
						It doesn't matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	))
	.add('Fullscreen modal', () => (
		<ModalStoryComponent>
			<Modal isOpen={true} title="Modal title" size="fullscreen">
				<ModalBody>
					<p>
						It doesn't matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	))
	.add('Auto-height modal', () => (
		<ModalStoryComponent>
			<Modal isOpen={true} title="Modal title" size="auto">
				<ModalBody>
					<p>
						It doesn't matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	))
	.add('Scrollable modal', () => (
		<Modal isOpen={true} title="Modal title" size="small" scrollable={true}>
			<ModalBody>
				<p>{loremIpsum({ count: 20 })}</p>
			</ModalBody>
			<ModalFooterRight>
				<Button type="primary" label="Ok" ariaLabel="Ok" />
			</ModalFooterRight>
		</Modal>
	))
	.add('Headless modal', () => (
		<Modal isOpen={true} size="small" scrollable={true}>
			<ModalBody>
				<p>{loremIpsum({ count: 20 })}</p>
			</ModalBody>
			<ModalFooterRight>
				<Button type="primary" label="Ok" ariaLabel="Ok" />
			</ModalFooterRight>
		</Modal>
	));
