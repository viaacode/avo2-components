import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import cjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

import autoprefixer from 'autoprefixer';

export default {
	input: 'src/index.ts',
	output: [{
		file: 'dist/bundle.esm.js',
		format: 'esm'
	},
		{
			file: 'dist/bundle.cjs.js',
			format: 'cjs'
		},
	],
	plugins: [
		postcss({
			extensions: ['.scss', '.css'],
			plugins: [
				autoprefixer(),
			],
			minimize: true,
		}),
		typescript({
			clean: true,
		}),
		cjs(),
		terser(),
	],
	external: [ // Suppresses warnings about external dependencies
		'autosize',
		'classnames',
		'date-fns',
		'date-fns/locale/nl',
		'react-datepicker',
		'react-datepicker/dist/react-datepicker.css',
		'jquery',
		'marked',
		'popper.js',
		'raf',
		'react',
		'react-dom',
		'react-popper',
		'react-range',
		'react-select',
		'react-select/creatable',
		'lodash-es',
	]
}
