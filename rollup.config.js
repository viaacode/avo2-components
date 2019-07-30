import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss';
import cjs from 'rollup-plugin-commonjs'

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
			extensions: ['.css'],
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
}
