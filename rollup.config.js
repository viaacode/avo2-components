import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';

export default {
	input: ['src/index.ts', 'src/wysiwyg.ts'],
	output: [
		{
			dir: 'dist/esm',
			format: 'esm',
		},
		{
			dir: 'dist/cjs',
			format: 'cjs',
		},
	],
	plugins: [
		builtins(),
		postcss({
			extensions: ['.scss', '.css'],
			plugins: [autoprefixer()],
			minimize: true,
		}),
		nodeResolve(),
		typescript({
			clean: true,
			tsconfigOverride: {
				exclude: [
					'**/*.stories.tsx',
					'**/*.stories.ts',
					'**/*.test.tsx',
					'**/*.test.ts',
					'**/*.mock.tsx',
					'**/*.mock.ts',
				],
			},
		}),
		commonjs(),
		cjs(),
		terser(),
	],
	external: [
		// Suppresses warnings about external dependencies
		'autosize',
		'classnames',
		'date-fns',
		'date-fns/locale/nl',
		'react-datepicker',
		'react-datepicker/dist/react-datepicker.css',
		'marked',
		'moment',
		'moment/locale/nl-be',
		'raf',
		'react',
		'react-dom',
		'react-range',
		'react-select',
		'react-select/creatable',
		'lodash-es',
		'@storybook/addon-actions',
		'react-perfect-scrollbar',
		'react-perfect-scrollbar/dist/css/styles.css',
		'react-popper',
	],
};
