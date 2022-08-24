export function pad(num: number, size: number): string {
	let output = String(num);
	while (output.length < size) {
		output = `0${output}`;
	}
	return output;
}
