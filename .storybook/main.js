module.exports = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: ['@storybook/preset-create-react-app', '@storybook/addon-essentials'],
	staticDirs: [{ from: './static', to: './' }],
	typescript: {
		check: false,
		checkOptions: {},
	},
	core: {
		builder: 'webpack5',
	},
};
