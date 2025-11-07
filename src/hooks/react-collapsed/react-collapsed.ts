/* tslint:disable */

import raf from 'raf';

/* eslint-disable */
import type React from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { noop } from '../../helpers/noop.js';
import { useLayoutEffectAfterMount, useStateOrProps, useUniqueId } from './hooks.js';
import {
	callAll,
	defaultTransitionStyles,
	getElementHeight,
	joinTransitionProperties,
	makeTransitionStyles,
} from './utils.js';

interface UseCollapseInitialConfig {
	collapsedHeight: number;
	defaultOpen?: boolean;
	onChange?: (isOpen: boolean) => void;
	onTransitionEnd?: (isOpen: boolean) => void;
	expandStyles?: React.CSSProperties;
	collapseStyles?: React.CSSProperties;
}

export default function useCollapsed(initialConfig: UseCollapseInitialConfig) {
	const uniqueId = useUniqueId();
	const el = useRef<HTMLElement | null>(null);
	const [isOpen, setOpen] = useStateOrProps(initialConfig as any);
	const [shouldAnimateOpen, setShouldAnimateOpen] = useState(null as boolean | null);
	const [heightAtTransition, setHeightAtTransition] = useState<number | 'auto'>(0);
	const { expandStyles, collapseStyles } = useMemo(
		() => makeTransitionStyles(initialConfig),
		[initialConfig]
	);
	const getCollapsedHeightStyle = () => {
		return `${initialConfig.collapsedHeight}px`;
	};
	const [styles, setStyles] = useState(
		isOpen
			? null
			: {
					display: getCollapsedHeightStyle() === '0px' ? 'none' : 'block',
					height: getCollapsedHeightStyle(),
					overflow: 'hidden',
				}
	);
	const [mountChildren, setMountChildren] = useState(isOpen);
	const [buttonVisible, setButtonVisible] = useState(true);

	// biome-ignore lint/correctness/useExhaustiveDependencies: check if this is intended
	const toggleOpen = useCallback(
		() =>
			setOpen((oldOpen: boolean) => {
				initialConfig.onChange?.(!oldOpen);
				return !oldOpen;
			}),
		[]
	);

	useLayoutEffectAfterMount(() => {
		if (isOpen) {
			setMountChildren(true);
			setStyles(
				(oldStyles) =>
					({
						...oldStyles,
						...expandStyles,
						display: 'block',
						overflow: 'hidden',
					}) as any
			);
			setShouldAnimateOpen(true);
		} else {
			const height = getElementHeight(el);
			setStyles((oldStyles) => ({ ...oldStyles, ...collapseStyles, height }) as any);
			setShouldAnimateOpen(false);
		}
	}, [isOpen, initialConfig.collapsedHeight, el]);

	useLayoutEffectAfterMount(() => {
		const height = getElementHeight(el);
		if (shouldAnimateOpen) {
			setStyles((oldStyles) => ({ ...oldStyles, height }) as any);
			setHeightAtTransition(height);
		} else {
			// requestAnimationFrame required to transition, otherwise will flash closed
			raf(() => {
				setStyles(
					(oldStyles) =>
						({
							...oldStyles,
							height: getCollapsedHeightStyle(),
							overflow: 'hidden',
						}) as any
				);
				setHeightAtTransition(height);
			});
		}
	}, [shouldAnimateOpen, initialConfig.collapsedHeight, el]);

	/**
	 * Show/hide button if content fits in collapsedHeight
	 */

	// biome-ignore lint/correctness/useExhaustiveDependencies: TODO check which deps are required for this to function properly
	useEffect(() => {
		if (el && !isOpen) {
			// We assume the children are always wrapped in a single html element for easy height calculation
			const contentFitsInsideContainer =
				(el.current as any).children[0].getBoundingClientRect().height <
				initialConfig.collapsedHeight;
			if (contentFitsInsideContainer) {
				setButtonVisible(false);
			} else {
				setButtonVisible(true);
			}
		} else {
			setButtonVisible(true);
		}
	}, [el]);

	const handleTransitionEnd = (e: any) => {
		// Sometimes onTransitionEnd is triggered by another transition,
		// such as a nested collapse panel transitioning. But we only
		// want to handle this if this component's element is transitioning
		if (e.target !== el.current) {
			return;
		}

		const height = getElementHeight(el);
		if (isOpen && height !== heightAtTransition) {
			setHeightAtTransition(height);
			setStyles((oldStyles) => ({ ...oldStyles, height }) as any);
			return;
		}

		if (isOpen) {
			setStyles(null);
		} else {
			setMountChildren(false);
			setStyles({
				overflow: 'hidden',
				display: getCollapsedHeightStyle() === '0px' ? 'none' : 'block',
				height: getCollapsedHeightStyle(),
			});
		}
		initialConfig.onTransitionEnd?.(isOpen);
	};

	return {
		getToggleProps(
			{ disabled, onClick, ...rest } = {
				disabled: false,
				onClick: noop,
			}
		) {
			return {
				type: 'button',
				role: 'button',
				id: `react-collapsed-toggle-${uniqueId}`,
				'aria-controls': `react-collapsed-panel-${uniqueId}`,
				'aria-expanded': isOpen ? 'true' : 'false',
				tabIndex: 0,
				style: buttonVisible ? {} : { display: 'none' },
				...rest,
				onClick: disabled ? noop : callAll(onClick, toggleOpen),
			};
		},
		getCollapseProps(
			{ style, onTransitionEnd, ...rest }: any = { style: {}, onTransitionEnd: noop }
		) {
			return {
				id: `react-collapsed-panel-${uniqueId}`,
				'aria-hidden': isOpen ? null : 'true',
				...rest,
				ref: el,
				onTransitionEnd: callAll(handleTransitionEnd, onTransitionEnd),
				style: {
					// Default transition duration and timing function, so height will transition
					// when resting and the height of the collapse changes
					...defaultTransitionStyles,
					// additional styles passed, e.g. getCollapseProps({style: {}})
					...style,
					// combine any additional transition properties with height
					transitionProperty: joinTransitionProperties(style.transitionProperty),
					// style overrides from state
					...styles,
				},
			};
		},
		isOpen,
		toggleOpen,
		mountChildren,
	};
}
