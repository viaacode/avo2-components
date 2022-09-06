/* tslint:disable */
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

export function useStateOrProps({
	isOpen,
	defaultOpen,
}: {
	isOpen?: boolean;
	defaultOpen?: boolean;
}): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
	const [open, setOpen] = useState<boolean>(defaultOpen || false);
	const definedOpen = typeof isOpen !== 'undefined' ? isOpen : open;
	return [definedOpen, setOpen];
}

export function useLayoutEffectAfterMount(cb: () => void, dependencies: any[]): void {
	const justMounted = useRef(true);
	useLayoutEffect(() => {
		if (!justMounted.current) {
			return cb();
		}
		justMounted.current = false;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);
}

function useEffectOnMount(cb: () => void): void {
	const justMounted = useRef(true);
	useEffect(() => {
		if (justMounted.current) {
			return cb();
		}
		justMounted.current = false;
	});
}

let idCounter = 0;

/**
 * This generates a unique ID for an instance of Collapse
 * @return {String} the unique ID
 */
export function useUniqueId(): number {
	let counter = useMemo(() => idCounter++, []);
	useEffectOnMount(() => {
		counter++;
	});
	return counter;
}
