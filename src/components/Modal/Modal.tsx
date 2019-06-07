import React, {
	Fragment,
	FunctionComponent,
	MouseEvent,
	ReactNode,
	useEffect,
	useState,
} from 'react';

import classNames from 'classnames';
import ReactDOM from 'react-dom';

import { useKeyPress } from '../../hooks/useKeyPress';

import { Button } from '../Button/Button';

import { ModalBackdrop } from './ModalBackdrop';

export interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	title?: string;
	size?: 'small' | 'medium' | 'fullscreen' | 'auto';
	renderHeaderRight?: () => ReactNode;
	renderFooterRight?: () => ReactNode;
	renderFooterLeft?: () => ReactNode;
}

export const Modal: FunctionComponent<ModalProps> = ({
	children,
	isOpen = false,
	title,
	size,
	renderHeaderRight = () => null,
	renderFooterRight = () => null,
	renderFooterLeft = () => null,
}: ModalProps) => {
	const [modalOpen, setModalOpen] = useState(isOpen);

	useKeyPress('Escape', close);

	useEffect(() => {
		// sync up `isOpen`-prop with state
		setModalOpen(isOpen);
	}, [isOpen]);

	function close() {
		setModalOpen(false);
	}

	function onContextClick(event: MouseEvent<HTMLElement>) {
		// close the modal when clicking outside the modal
		if (event.target === event.currentTarget) {
			close();
		}
	}

	return ReactDOM.createPortal(
		<Fragment>
			<div
				className={classNames('c-modal-context', { 'c-modal-context--visible': modalOpen })}
				onClick={onContextClick}
			>
				<div
					className={classNames('c-modal', {
						'c-modal--small': size === 'small',
						'c-modal--medium': size === 'medium',
						'c-modal--fullscreen': size === 'fullscreen',
						'c-modal--height-auto': size === 'auto',
					})}
				>
					<div className="c-modal__header c-modal__header--bordered">
						<div className="c-toolbar c-toolbar--spaced">
							{title && (
								<div className="c-toolbar__left">
									<div className="c-toolbar__item">
										<h2 className="c-modal__title">{title}</h2>
									</div>
								</div>
							)}
							<div className="c-toolbar__right">
								<div className="c-toolbar__item">{renderHeaderRight()}</div>
								<div className="c-toolbar__item">
									<Button onClick={close} icon="close" type="borderless" />
								</div>
							</div>
						</div>
					</div>
					<div className="c-modal__body">{children}</div>
					<div className="c-modal__footer c-modal__footer--bordered">
						<div className="c-toolbar c-toolbar--spaced">
							<div className="c-toolbar__left">
								<div className="c-toolbar__item">
									<div className="c-button-toolbar">{renderFooterLeft()}</div>
								</div>
							</div>
							<div className="c-toolbar__right">
								<div className="c-toolbar__item">
									<div className="c-button-toolbar">{renderFooterRight()}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalBackdrop visible={modalOpen} />
		</Fragment>,
		document.body
	);
};
