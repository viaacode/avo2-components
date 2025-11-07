import {
	type FC,
	forwardRef,
	type KeyboardEvent,
	type MouseEvent,
	type ReactNode,
	useCallback,
	useState,
} from 'react';

import { bemCls, keysEnter, keysEscape, keysSpacebar, onKey } from '../../utils/index.js';

import type { ContentInputPropsSchema, StopPropagationObject } from './ContentInput.types.js';

// Taken from viaacode/react-components/src/components/TextInput/TextInput.tsx
const TextInputDefaults = {
	disabled: false,
	iconEnd: null,
	iconStart: null,
	rootClassName: 'c-input',
	type: 'text',
	value: '',
	onChange: () => null,
	onFocus: () => null,
};

const ContentInput: FC<ContentInputPropsSchema> = forwardRef<
	HTMLInputElement,
	ContentInputPropsSchema
>(
	(
		{
			align = 'right',
			className,
			disabled = TextInputDefaults.disabled,
			iconEnd = () => TextInputDefaults.iconEnd,
			iconStart = () => TextInputDefaults.iconStart,
			nodeCancel = 'x',
			nodeSubmit = '✓',
			onCancel = () => null,
			onChange = TextInputDefaults.onChange,
			onConfirm = () => null,
			onFocus = TextInputDefaults.onFocus,
			onOpen = () => null,
			onClose = () => null,
			rootClassName: root = 'c-content-input',
			type = TextInputDefaults.type,
			value = TextInputDefaults.value,
			...inputProps
		},
		ref
	) => {
		const [editable, setEditable] = useState(false);
		const [instance, setInstance] = useState<HTMLInputElement | null>(null);

		const bem = bemCls.bind(root);

		const rootCls = [
			className,
			root,
			...[
				disabled ? [bem('', 'disabled')] : '',
				iconStart !== null ? [bem('', 'icon-start')] : '',
				iconEnd !== null ? [bem('', 'icon-end')] : '',
			],
		]
			.filter((value) => value?.length)
			.join(' ');

		/**
		 * Events
		 */

		const onOpenHandler = useCallback(
			(e: StopPropagationObject) => {
				if (!disabled && !editable) {
					e.stopPropagation();

					setEditable(true);
					onOpen();
					setTimeout(() => instance?.focus());
				}
			},
			[onOpen, disabled, editable, instance]
		);

		const onCloseHandler = useCallback(
			(e: StopPropagationObject) => {
				if (editable) {
					e.stopPropagation();

					setEditable(false);
					onClose();
				}
			},
			[onClose, editable]
		);

		const onConfirmHandler = useCallback(
			(e: StopPropagationObject) => {
				if (!disabled && editable) {
					e.stopPropagation();

					onConfirm(value);
					onCloseHandler(e);
				}
			},
			[onConfirm, onCloseHandler, value, disabled, editable]
		);

		const onCancelHandler = useCallback(
			(e: StopPropagationObject) => {
				e.stopPropagation();

				onCancel();
				onCloseHandler(e);
			},
			[onCancel, onCloseHandler]
		);

		/**
		 * Render
		 */

		const isSingleElement = (node: ReactNode) => {
			const el = node as JSX.Element;
			return !(el?.props?.children && el.props.children.length > 1);
		};

		const makeInteractionObject = (func: (e: MouseEvent | KeyboardEvent) => void) => {
			return {
				onClick: func,
				onKeyDown: (e: KeyboardEvent) => onKey(e, [...keysEnter, ...keysSpacebar], () => func(e)),
				role: 'button',
				tabIndex: 0,
			};
		};

		const renderIcon = (iconNode: ReactNode, side?: 'start' | 'end') => (
			<span
				className={`${bem('icon')}${side ? ` ${bem('icon', side)}` : ''}`}
				{...(isSingleElement(iconNode) ? makeInteractionObject(onOpenHandler) : {})}
			>
				{iconNode}
			</span>
		);

		const renderButtons = () => (
			<>
				<div
					className={bem('submit')}
					{...(isSingleElement(nodeSubmit) ? makeInteractionObject(onConfirmHandler) : {})}
				>
					{nodeSubmit}
				</div>

				<div
					className={bem('cancel')}
					{...(isSingleElement(nodeCancel) ? makeInteractionObject(onCancelHandler) : {})}
				>
					{nodeCancel}
				</div>
			</>
		);

		return (
			<div className={`${rootCls} ${editable ? bem('', 'open') : bem('', 'closed')}`}>
				{iconStart && renderIcon(iconStart(onOpenHandler), 'start')}
				{editable && align === 'left' && renderButtons()}

				<span
					role="button"
					tabIndex={0}
					onClick={onOpenHandler}
					onKeyDown={(e) => onKey(e, [...keysEnter, ...keysSpacebar], () => onConfirmHandler(e))}
					className={bem('value')}
				>
					{value}
				</span>

				<input
					{...inputProps}
					className={bem('field')}
					disabled={disabled}
					onChange={(e) => onChange(e.target.value)} // Note: adjusted from source
					onClick={onOpenHandler}
					onFocus={onFocus}
					onKeyDown={(e) => {
						onKey(e, keysEnter, () => onConfirmHandler(e));
						onKey(e, keysEscape, () => onCancelHandler(e));
					}}
					ref={(element) => {
						setInstance(element);
						return ref;
					}}
					type={type}
					value={value}
				/>

				{editable && align === 'right' && renderButtons()}
				{iconEnd && renderIcon(iconEnd(onOpenHandler), 'end')}
			</div>
		);
	}
);

export default ContentInput;
