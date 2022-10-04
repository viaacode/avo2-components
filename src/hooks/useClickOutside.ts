import { useEffect } from 'react';

export function useClickOutside(
	ref: Element,
	onClickOutside: (event: MouseEvent | TouchEvent) => void,
	exemptions: Element[] = []
): void {
	useEffect(() => {
		function clickOutsideHandler(event: MouseEvent | TouchEvent) {
			if (
				ref !== event.target &&
				!ref.contains(event.target as Node) &&
				!exemptions.some(
					(element: Element) =>
						element === event.target || element.contains(event.target as Node)
				)
			) {
				// Allow the click handler on the element to trigger before closing the dropdown menu
				setTimeout(() => {
					onClickOutside(event);
				}, 100);
			}
		}

		if (ref) {
			// Add event listeners
			document.addEventListener('mousedown', clickOutsideHandler);
			document.addEventListener('touchstart', clickOutsideHandler);

			// Remove event listeners on cleanup
			return () => {
				document.removeEventListener('mousedown', clickOutsideHandler);
				document.removeEventListener('touchstart', clickOutsideHandler);
			};
		}
	}, [ref, onClickOutside, exemptions]);
}
