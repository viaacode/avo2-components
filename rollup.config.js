import typescript from 'rollup-plugin-typescript2';

export default {
	input: './src/index.ts',
	plugins: [
		typescript()
	],
	output: [
		{
			file: 'dist/bundle.esm.js',
			format: 'esm'
		},
		{
			file: 'dist/bundle.cjs.js',
			format: 'cjs'
		},
	]
}
