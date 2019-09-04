import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss';
import cjs from 'rollup-plugin-commonjs'

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
		}),
		cjs(),
		typescript({
			clean: true,
		}),
		copy({
			targets: [{
				src: 'src/styles/main.css',
				dest: 'dist/styles'
			}],
		}),
	],
	external: [ // Suppresses warnings about external dependencies
		'jquery',
		'react',
		'classnames',
		'marked',
		'popper.js',
		'react-popper',
		'react-dom',
		'autosize',
		'react-trumbowyg/dist/trumbowyg.min.css',
		'raf',
	]
}
