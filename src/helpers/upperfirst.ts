export function upperFirst(text: string): string {
	if (!text) {
		return '';
	}

	return text.slice(0, 1).toUpperCase() + text.slice(1);
}
