import type { Meta, StoryObj } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';
import { cloneElement, Fragment, type ReactElement, useState } from 'react';

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

const meta: Meta = {
	title: 'components/Modal',
	component: Modal,
	parameters: {
		jest: ['Modal', 'ModalBackdrop'],
	},
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<ModalStoryComponent>
			<Modal title="Modal title" isOpen={false}>
				<ModalBody>
					<p>
						It does not matter where this modal occurs in the source code, React automatically moves
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
	),
};

export const SmallModal: Story = {
	render: () => (
		<ModalStoryComponent>
			<Modal isOpen title="Modal title" size="small">
				<ModalBody>
					<p>
						It does not matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	),
};

export const MediumModal: Story = {
	render: () => (
		<ModalStoryComponent>
			<Modal isOpen title="Modal title" size="medium">
				<ModalBody>
					<p>
						It does not matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	),
};

export const LargeModal: Story = {
	render: () => (
		<ModalStoryComponent>
			<Modal isOpen title="Modal title" size="large">
				<ModalBody>
					<p>
						It does not matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	),
};

export const ExtraLargeModal: Story = {
	render: () => (
		<ModalStoryComponent>
			<Modal isOpen title="Modal title" size="extra-large">
				<ModalBody>
					<p>
						It does not matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	),
};

export const WideTitleModal: Story = {
	render: () => (
		<Modal isOpen title={loremIpsum({ count: 2 })} size="small">
			<ModalBody>
				<p>{loremIpsum({ count: 5 })}</p>
			</ModalBody>
			<ModalFooterRight>
				<Button type="primary" label="Ok" ariaLabel="Ok" />
			</ModalFooterRight>
		</Modal>
	),
};

export const FullscreenModal: Story = {
	render: () => (
		<ModalStoryComponent>
			<Modal isOpen title="Modal title" size="fullscreen">
				<ModalBody>
					<p>
						It does not matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	),
};

export const AutoHeightModal: Story = {
	render: () => (
		<ModalStoryComponent>
			<Modal isOpen title="Modal title" size="auto">
				<ModalBody>
					<p>
						It does not matter where this modal occurs in the source code, React automatically moves
						it to the root.
					</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	),
};

export const ScrollableModal: Story = {
	render: () => (
		<>
			<ModalStoryComponent>
				<Modal isOpen title="Modal title" size="small" scrollable>
					<ModalBody>
						<p>{loremIpsum({ count: 40 })}</p>
					</ModalBody>
					<ModalFooterRight>
						<Button type="primary" label="Ok" ariaLabel="Ok" />
					</ModalFooterRight>
				</Modal>
			</ModalStoryComponent>
			<br />
			<br />
			<div style={{ maxWidth: '200px' }}>{loremIpsum({ count: 40 })}</div>
		</>
	),
};

export const HeadlessModal: Story = {
	render: () => (
		<ModalStoryComponent>
			<Modal isOpen size="small" scrollable>
				<ModalBody>
					<p>{loremIpsum({ count: 40 })}</p>
				</ModalBody>
				<ModalFooterRight>
					<Button type="primary" label="Ok" ariaLabel="Ok" />
				</ModalFooterRight>
			</Modal>
		</ModalStoryComponent>
	),
};
