import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	framework: '@storybook/react-vite',
	staticDirs: [{ from: '../static', to: './' }],
};

export default config;
