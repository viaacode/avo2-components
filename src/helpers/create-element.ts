export const createElement = <T extends keyof HTMLElementTagNameMap>(
	tag: T,
	className?: string | string[]
): HTMLElementTagNameMap[T] => {
	const el = document.createElement(tag);

	if (className) {
		if (Array.isArray(className)) {
			className.forEach(c => el.classList.add(c));
		} else {
			el.classList.add(className);
		}
	}

	return el;
};
