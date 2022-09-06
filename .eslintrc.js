module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'next/core-web-vitals',
		'plugin:storybook/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off', // TODO re-enable once all bugs are fixed, so we can add more types
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
		'react/self-closing-comp': 'warn',

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
