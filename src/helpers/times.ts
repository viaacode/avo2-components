export function times(n: number): number[] {
	if (n < 1 || n > Number.MAX_SAFE_INTEGER) {
		return [];
	}
	let index = -1;
	const length = n;
	const result = new Array(length);
	while (++index < length) {
		result[index] = index;
	}
	return result;
}
