module.exports = {
	template({ template }, opts, { componentName, jsx }) {
		const typeScriptTpl = template.smart({ plugins: ['typescript'] });

		// remove "Svg" from the start of each component-name
		const name = componentName.name.substring('Svg'.length);

		return typeScriptTpl.ast`
			import { SVGProps } from 'react';
			const ${name} = (props: SVGProps<SVGSVGElement>) => ${jsx};
			export default ${name};
		`;
	},
	svgoConfig: {
		plugins: {
			removeViewBox: false
		}
	}
};
