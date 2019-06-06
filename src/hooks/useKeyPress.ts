import { useEffect, useState } from 'react';

export function useKeyPress(targetKey: string, onPressDown = () => {}, onPressUp = () => {}) {
	// State for keeping track of whether key is pressed
	const [keyPressed, setKeyPressed] = useState(false);

	// If pressed key is our target key then set to true
	function downHandler({ key }: KeyboardEvent) {
		if (key === targetKey) {
			setKeyPressed(true);
			onPressDown();
		}
	}

	// If released key is our target key then set to false
	const upHandler = ({ key }: KeyboardEvent) => {
		if (key === targetKey) {
			setKeyPressed(false);
			onPressUp();
		}
	};

	useEffect(() => {
		// Add event listeners
		window.addEventListener('keydown', downHandler);
		window.addEventListener('keyup', upHandler);

		// Remove event listeners on cleanup
		return () => {
			window.removeEventListener('keydown', downHandler);
			window.removeEventListener('keyup', upHandler);
		};
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return keyPressed;
}
