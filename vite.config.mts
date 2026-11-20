import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgrPlugin from 'vite-plugin-svgr';
import pkg from './package.json';

const peerDependencies: string[] = Object.keys(pkg.peerDependencies);

const external = [
	...peerDependencies,
	'react/jsx-runtime',
	'react/jsx-dev-runtime',
];

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: '@viaa/avo2-components',
			fileName: (_, entryName) => {
				if (entryName === 'src/index') {
					return `index.js`;
				}
				return `${entryName}.js`;
			},
			formats: ['es'],
		},
		rolldownOptions: {
			external,
			output: {
				// One file per source module (instead of one big index.js), so the consuming apps
				// can tree-shake the components, icons and dependencies they don't use.
				preserveModules: true,
				preserveModulesRoot: 'src',
				// npm publish always drops nested node_modules folders, so bundled dependencies
				// must not end up in dist/**/node_modules. A ? (eg: from svgr's icon.svg?react) would be read as a query string by webpack
				entryFileNames: (chunk) =>
					`${chunk.name.replace(/node_modules/g, 'vendor').replace(/\?/g, '_')}.js`,
			},
		},
		sourcemap: true,
	},
	plugins: [
		react(),
		svgrPlugin(),
		dts(),
	],
});
