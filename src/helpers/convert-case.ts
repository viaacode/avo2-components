// converts kebab-case to PascalCase
export const toPascalCase = (string: string) => {
	return string
		.replace(/(^\w)/, first => first.toUpperCase())
		.replace(/(-\w)/g, match => match[1].toUpperCase());
};

// converts PascalCase to kebab-case
export const toKebabCase = (string: string) => {
	return string
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
		.toLowerCase();
};
