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
		rollupOptions: {
			external,
			output: {
				preserveModules: true,
			},
		},
		sourcemap: true,
	},
	plugins: [
		react(),
		svgrPlugin(),
		dts(),
	],
	resolve: {
		alias: {
			// Force vite to use the ESM build of avo2 typings
			"@viaa/avo2-types": "@viaa/avo2-types/dist/esm/index.js",
		},
	}
});
