import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import autoprefixer from 'autoprefixer';
import cjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

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
		'autosize',
		'classnames',
		'date-fns',
		'date-fns/locale/nl',
		'lodash-es',
		'marked',
		'moment',
		'moment/locale/nl-be',
		'raf',
		'react',
		'react-dom',
		'react-perfect-scrollbar',
		'react-popper',
		'react-range',
		'react-select',
		'react-select/creatable',
	],
};
