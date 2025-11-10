import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	framework: '@storybook/react-vite',
	addons: ['@storybook/react'],
	staticDirs: [{ from: '../static', to: './' }],
};

export default config;
