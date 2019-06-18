import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/bundle.esm.js',
			format: 'esm'
		},
		{
			file: 'dist/bundle.cjs.js',
			format: 'cjs'
		},
	],
	plugins: [
		typescript({
			clean: true,
		}),
		copy({
			targets: [{ src: 'src/styles/main.css', dest: 'dist/styles' }],
		}),
	],
}
