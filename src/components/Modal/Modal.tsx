import clsx from 'clsx';
import React, {
	createRef,
	forwardRef,
	Fragment,
	MouseEvent,
	ReactNode,
	useEffect,
	useImperativeHandle,
	useState,
} from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from 'react-perfect-scrollbar';

import { useKeyPress } from '../../hooks/useKeyPress';
import { useSlot } from '../../hooks/useSlot';
import { DefaultProps } from '../../types';
import { Button } from '../Button/Button';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';
import { IconNameSchema } from '../Icon/Icon.types';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarLeft, ToolbarRight } from '../Toolbar/Toolbar.slots';
import { ToolbarItem } from '../Toolbar/ToolbarItem/ToolbarItem';

import './Modal.scss';
import {
	ModalBody,
	ModalFooterLeft,
	ModalFooterRight,
	ModalHeaderRight,
	ModalSubHeader,
} from './Modal.slots';
import { ModalBackdrop } from './ModalBackdrop';

export interface ModalPropsSchema extends DefaultProps {
	children: ReactNode;
	ref: React.Ref<{
		updateSize: () => void;
	}>;

	/**
	 * false: enables the closing of the modal by clicking the backdrop (grey area around the modal)
	 * true: modal will not close when clicking the backdrop
	 */
	disableContextClick?: boolean;
	disablePageScroll?: boolean;
	isOpen: boolean;
	title?: string | ReactNode;
	size?: 'small' | 'medium' | 'large' | 'extra-large' | 'fullscreen' | 'fullwidth' | 'auto';
	scrollable?: boolean;
	onClose?: () => void;
}

export interface ModalRefSchema {
	updateSize: () => void;
}

const ModalInternal = forwardRef<ModalRefSchema, ModalPropsSchema>(
	(
		{
			children,
			className,
			disableContextClick = false,
			disablePageScroll = false,
			isOpen,
			title,
			size,
			scrollable,
			onClose,
		},
		ref
	) => {
		const body = useSlot(ModalBody, children);
		const headerRight = useSlot(ModalHeaderRight, children);
		const subheader = useSlot(ModalSubHeader, children);
		const footerRight = useSlot(ModalFooterRight, children);
		const footerLeft = useSlot(ModalFooterLeft, children);
		const [mouseDownLocation, setMouseDownLocation] = useState<{ x: number; y: number } | null>(
			null
		);
		const scrollbarRef = createRef<typeof Scrollbar>();
		const updateSize = () => {
			scrollbarRef?.current?.updateScroll();
		};

		useKeyPress('Escape', close);

		useEffect(() => {
			if (isOpen) {
				document.body.classList.add('modal-open');
				if (disablePageScroll) {
					document.documentElement.classList.add('disable-document-scroll');
				}
			} else {
				document.body.classList.remove('modal-open');
				document.documentElement.classList.remove('disable-document-scroll');
			}
		}, [isOpen]);

		useImperativeHandle(ref, () => ({
			updateSize,
		}));

		function close() {
			onClose?.();
		}

		function onContextMouseDown(event: MouseEvent<HTMLElement>) {
			setMouseDownLocation({ x: event.clientX, y: event.clientY });
		}

		function onContextMouseUp(event: MouseEvent<HTMLElement>) {
			if (
				mouseDownLocation &&
				Math.abs(event.clientX - mouseDownLocation.x) < 5 &&
				Math.abs(event.clientY - mouseDownLocation.y) < 5
			) {
				// user performed a click
				// close the modal when clicking outside the modal
				if (!disableContextClick && event.target === event.currentTarget) {
					close();
				}
			} // else: User performed a drag
			setMouseDownLocation(null);
		}

		const renderModalContent = () => {
			const bodyClassNames = clsx('c-modal__body', {
				'c-modal__body--no-padding-top': !!subheader,
			});
			return (
				<>
					{(!!title || !!headerRight || !!onClose) && (
						<div className="c-modal__header c-modal__header--bordered">
							<Toolbar autoHeight spaced>
								{title && (
									<ToolbarLeft>
										<ToolbarItem>
											<h2 className="c-modal__title">{title}</h2>
										</ToolbarItem>
									</ToolbarLeft>
								)}
								<ToolbarRight>
									{headerRight && <ToolbarItem>{headerRight}</ToolbarItem>}
									{!!onClose && (
										<ToolbarItem>
											<Button
												onClick={close}
												icon={IconNameSchema.close}
												type="borderless"
												ariaLabel="close modal"
											/>
										</ToolbarItem>
									)}
								</ToolbarRight>
							</Toolbar>
						</div>
					)}
					{subheader && <div className="c-modal__subheader">{subheader}</div>}
					{scrollable && !!body && (
						<Scrollbar
							ref={scrollbarRef}
							className={bodyClassNames}
							options={{
								wheelPropagation: false,
								suppressScrollX: true,
							}}
						>
							{body}
						</Scrollbar>
					)}
					{!scrollable && <div className={bodyClassNames}>{body}</div>}
					{(footerLeft || footerRight) && (
						<div className="c-modal__footer c-modal__footer--bordered">
							<Toolbar spaced>
								{footerLeft && (
									<ToolbarLeft>
										<ToolbarItem>
											<ButtonToolbar>{footerLeft}</ButtonToolbar>
										</ToolbarItem>
									</ToolbarLeft>
								)}
								{footerRight && (
									<ToolbarRight>
										<ToolbarItem>
											<ButtonToolbar>{footerRight}</ButtonToolbar>
										</ToolbarItem>
									</ToolbarRight>
								)}
							</Toolbar>
						</div>
					)}
				</>
			);
		};

		const classNames = clsx('c-modal', {
			'c-modal--small': size === 'small',
			'c-modal--medium': size === 'medium',
			'c-modal--large': size === 'large',
			'c-modal--extra-large': size === 'extra-large',
			'c-modal--fullscreen': size === 'fullscreen',
			'c-modal--fullwidth': size === 'fullwidth',
			'c-modal--height-auto': size === 'auto',
			'c-modal--scrollable': scrollable,
		});
		return ReactDOM.createPortal(
			<Fragment>
				<div
					className={clsx(className, 'c-modal-context', {
						'c-modal-context--visible': isOpen,
					})}
					onMouseDown={onContextMouseDown}
					onMouseUp={onContextMouseUp}
				>
					<div className={classNames}>{renderModalContent()}</div>
				</div>
				<ModalBackdrop visible={isOpen} />
			</Fragment>,
			document.body
		);
	}
);

ModalInternal.displayName = 'Modal';

export const Modal = ModalInternal;
