module.exports = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-essentials',
	],
	typescript: {
		check: false,
		checkOptions: {},
	},
};
