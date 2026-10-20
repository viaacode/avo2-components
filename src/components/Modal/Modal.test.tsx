import { fireEvent, render, screen } from '@testing-library/react';
import { Fragment } from 'react';

import { Modal } from './Modal';
import {
	ModalBody,
	ModalFooterLeft,
	ModalFooterRight,
	ModalHeaderRight,
	ModalSubHeader,
} from './Modal.slots';

// Modal renders through a portal into document.body
const q = (selector: string) => document.body.querySelector(selector);
const qa = (selector: string) => document.body.querySelectorAll(selector);

describe('<Modal />', () => {
	it('Should be able to render', () => {
		render(
			<Modal isOpen={false}>
				<Fragment />
			</Modal>
		);
	});

	it('Should set the correct className(s)', () => {
		const customClassName = 'c-modal-custom';
		render(
			<Modal className={customClassName} isOpen={false}>
				<Fragment />
			</Modal>
		);

		const modalWrapperElement = q('.c-modal-context');
		const modalInnerElement = modalWrapperElement?.firstElementChild;

		expect(modalWrapperElement).toBeInTheDocument();
		expect(modalWrapperElement).toHaveClass('c-modal-context');
		expect(modalWrapperElement).toHaveClass(customClassName);
		expect(modalInnerElement).toBeInTheDocument();
		expect(modalInnerElement).toHaveClass('c-modal');
	});

	it('Should set the correct className for every size', () => {
		const sizes = [
			['small', 'c-modal--small'],
			['medium', 'c-modal--medium'],
			['large', 'c-modal--large'],
			['extra-large', 'c-modal--extra-large'],
			['fullscreen', 'c-modal--fullscreen'],
			['fullwidth', 'c-modal--fullwidth'],
			['auto', 'c-modal--height-auto'],
		] as const;

		sizes.forEach(([size, className]) => {
			const { unmount } = render(
				<Modal isOpen={false} size={size}>
					<Fragment />
				</Modal>
			);

			expect(q('.c-modal')).toHaveClass(className);
			unmount();
		});
	});

	it('Should set the correct className for scrollable modals', () => {
		render(
			<Modal isOpen={false} size="small" scrollable={true}>
				<Fragment />
			</Modal>
		);

		expect(q('.c-modal')).toHaveClass('c-modal--scrollable');
	});

	it('Should be able to render with a title', () => {
		const title = 'Modal test';

		render(
			<Modal isOpen={false} title={title}>
				<Fragment />
			</Modal>
		);

		expect(screen.getByRole('heading', { name: title })).toHaveClass('c-modal__title');
	});

	it('Should be able to render without a title', () => {
		render(
			<Modal isOpen={false}>
				<Fragment />
			</Modal>
		);

		expect(qa('.c-modal__title')).toHaveLength(0);
	});

	it('Should be able to be rendered invisible', () => {
		render(
			<Modal isOpen={false}>
				<Fragment />
			</Modal>
		);

		expect(q('.c-modal-context')).not.toHaveClass('c-modal-context--visible');
	});

	it('Should be able to be rendered visible ', () => {
		render(
			<Modal isOpen={true}>
				<Fragment />
			</Modal>
		);

		expect(q('.c-modal-context')).toHaveClass('c-modal-context--visible');
	});

	it('Should not show the backdrop when invisible', () => {
		render(
			<Modal isOpen={false}>
				<Fragment />
			</Modal>
		);

		expect(q('.c-modal-backdrop')).toBeInTheDocument();
		expect(q('.c-modal-backdrop')).not.toHaveClass('c-modal-backdrop--visible');
	});

	it('Should show the backdrop when visible', () => {
		render(
			<Modal isOpen={true}>
				<Fragment />
			</Modal>
		);

		expect(q('.c-modal-backdrop')).toHaveClass('c-modal-backdrop--visible');
	});

	it('Should call the onClose handler when closing the modal', () => {
		const onCloseHandler = jest.fn();

		render(
			<Modal isOpen={true} onClose={onCloseHandler}>
				<Fragment />
			</Modal>
		);

		const modalWrapperElement = q('.c-modal-context') as HTMLElement;

		fireEvent.mouseDown(modalWrapperElement, { clientX: 10, clientY: 10 });
		fireEvent.mouseUp(modalWrapperElement, { clientX: 10, clientY: 10 });

		expect(onCloseHandler).toHaveBeenCalled();
		expect(onCloseHandler).toHaveBeenCalledTimes(1);
	});

	it('Should not call `onClose` when clicking inside the modal ', () => {
		const onCloseHandler = jest.fn();

		render(
			<Modal isOpen={true} onClose={onCloseHandler}>
				<Fragment />
			</Modal>
		);

		const modalInnerElement = q('.c-modal') as HTMLElement;

		fireEvent.mouseDown(modalInnerElement, { clientX: 10, clientY: 10 });
		fireEvent.mouseUp(modalInnerElement, { clientX: 10, clientY: 10 });

		expect(onCloseHandler).toHaveBeenCalledTimes(0);
	});

	it('Should correctly render the body', () => {
		render(
			<Modal isOpen={true}>
				<ModalBody>
					<p id="test">Hello!</p>
				</ModalBody>
			</Modal>
		);

		expect(q('.c-modal__body')?.innerHTML).toEqual('<p id="test">Hello!</p>');
	});

	it('Should be able to render items in the header (right)', () => {
		render(
			<Modal isOpen={true}>
				<ModalHeaderRight>
					<p>Test (right)</p>
				</ModalHeaderRight>
			</Modal>
		);

		const headerRightElement = q('.c-modal__header .c-toolbar__right .c-toolbar__item');

		expect(headerRightElement?.innerHTML).toEqual('<p>Test (right)</p>');
	});

	it('Should be able to render items in the footer (left)', () => {
		render(
			<Modal isOpen={true}>
				<ModalFooterLeft>
					<p>Test (left)</p>
				</ModalFooterLeft>
			</Modal>
		);

		const footerLeftElement = qa('.c-modal__footer .c-toolbar__left .c-button-toolbar');

		expect(footerLeftElement).toHaveLength(1);
		expect(footerLeftElement[0].innerHTML).toEqual('<p>Test (left)</p>');
	});

	it('Should be able to render items in the footer (right)', () => {
		render(
			<Modal isOpen={true}>
				<ModalFooterRight>
					<p>Test (right)</p>
				</ModalFooterRight>
			</Modal>
		);

		const footerRightElement = qa('.c-modal__footer .c-toolbar__right .c-button-toolbar');

		expect(footerRightElement).toHaveLength(1);
		expect(footerRightElement[0].innerHTML).toEqual('<p>Test (right)</p>');
	});

	it('Should not render the footer when no footer render props are passed', () => {
		render(
			<Modal isOpen={true}>
				<Fragment />
			</Modal>
		);

		expect(qa('.c-modal__footer')).toHaveLength(0);
	});

	it('Should not render the left side of the footer when no ModalFooterLeft-slot is passed', () => {
		render(
			<Modal isOpen={true}>
				<ModalFooterRight>
					<div />
				</ModalFooterRight>
			</Modal>
		);

		expect(qa('.c-modal__footer .c-toolbar__left')).toHaveLength(0);
	});

	it('Should not render the right side of the footer when no ModalFooterRight-slot is passed', () => {
		render(
			<Modal isOpen={true}>
				<ModalFooterLeft>
					<div />
				</ModalFooterLeft>
			</Modal>
		);

		expect(qa('.c-modal__footer .c-toolbar__right')).toHaveLength(0);
	});

	it('Should be able to render items in the subheader', () => {
		render(
			<Modal isOpen={true}>
				<ModalSubHeader>
					<p>Test</p>
				</ModalSubHeader>
			</Modal>
		);

		const subheaderElement = qa('.c-modal__subheader');

		expect(subheaderElement).toHaveLength(1);
		expect(subheaderElement[0].innerHTML).toEqual('<p>Test</p>');
	});
});
