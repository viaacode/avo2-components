import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

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
			output: {
				preserveModules: true,
			},
		},
		sourcemap: true,
	},
	plugins: [
		react(),
		viteTsconfigPaths(),
		svgrPlugin(),
		dts(),
		externalizeDeps(),
		cssInjectedByJsPlugin(),
	],
	resolve: {
		alias: {
			// Force vite to use the ESM build of avo2 typings
			"@viaa/avo2-types": "@viaa/avo2-types/dist/esm/index.js",
		},
	}
});
