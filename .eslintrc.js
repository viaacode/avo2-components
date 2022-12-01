module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:storybook/recommended',
		'plugin:prettier/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 'off', // TODO re-enable once all bugs are fixed, so we can add more types
		'import/no-unresolved': [
			2,
			{
				ignore: ['@viaa', '@meemoo'],
			},
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: false,
				},
			},
		],

		'import/first': 'error',
		'import/no-duplicates': 'error',

		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				'newlines-between': 'always',
			},
		],

		'sort-imports': [
			'warn',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
	},
};
