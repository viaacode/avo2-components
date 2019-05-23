module.exports = {
	template({ template }, opts, { componentName, jsx }) {
		const typeScriptTpl = template.smart({ plugins: ['typescript'] });

		// remove "Svg" from the start of each component-name
		const name = componentName.name.substring(3);

		return typeScriptTpl.ast`
			import React, { SVGProps } from 'react';
			export const ${name} = (props: SVGProps<SVGSVGElement>) => ${jsx};
		`;
	},
	svgoConfig: {
		plugins: {
			removeViewBox: false
		}
	}
};
