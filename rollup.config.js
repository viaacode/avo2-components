import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import cjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import autoprefixer from 'autoprefixer';

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
		postcss({
			extensions: ['.scss', '.css'],
			plugins: [autoprefixer()],
			minimize: true,
		}),
		typescript({
			clean: true,
		}),
		cjs(),
		terser(),
	],
	external: [
		// Suppresses warnings about external dependencies
		'autosize',
		'braft-editor',
		'braft-extensions/dist/table.css',
		'braft-editor/dist/index.css',
		'braft-extensions/dist/table',
		'classnames',
		'date-fns',
		'date-fns/locale/nl',
		'react-datepicker',
		'react-datepicker/dist/react-datepicker.css',
		'marked',
		'moment',
		'moment/locale/nl-be',
		'popper.js',
		'raf',
		'react',
		'react-dom',
		'react-popper',
		'react-range',
		'react-select',
		'react-select/creatable',
		'lodash-es',
		'@storybook/addon-actions',
		'react-perfect-scrollbar',
		'react-perfect-scrollbar/dist/css/styles.css',
	],
};
