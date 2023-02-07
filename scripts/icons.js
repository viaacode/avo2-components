// This scripts generate a .json-file with metadata for the icons
const fs = require('fs');

const glob = require('glob');
const _ = require('lodash');

const directory = process.argv[2];

function getFileName(path) {
	return path.split('/').pop();
}

function stripExtension(fileName) {
	return fileName.split('.').slice(0, -1).join('.');
}

function getCategory(path, fileName) {
	// the type is the foldername above the file
	return path.replace(fileName, '').replace(directory, '').replace(/\//g, '');
}

function definedAndUnique(arr) {
	return arr.filter(function (elem, pos) {
		return elem && arr.indexOf(elem) === pos;
	});
}

glob(`${directory}/**/*.svg`, function (err, res) {
	if (err) {
		console.error(err);
	} else {
		const icons = res.map((path) => {
			const fileName = getFileName(path);
			const name = stripExtension(fileName);
			const type = getCategory(path, fileName);

			return {
				fileName,
				name,
				type,
			};
		});
		const data = JSON.stringify(icons, null, 2);

		const iconNames = res
			.map((path) => {
				const fileName = getFileName(path);
				return stripExtension(fileName);
			})
			.map((iconName) => `\t${_.camelCase(iconName)} = '${_.kebabCase(iconName)}',\n`)
			.join('');

		const iconTypeNames = definedAndUnique(
			res.map((path) => {
				const fileName = getFileName(path);
				return getCategory(path, fileName);
			})
		);

		let iconTypeFileContent = `export enum IconNameSchema {
${iconNames}}

export type IconTypeSchema = '${iconTypeNames.join("' | '")}';
`;

		fs.writeFileSync(`${process.cwd()}/${directory}/icons.json`, data);

		fs.writeFileSync(
			`${process.cwd()}/${directory}/../components/Icon/Icon.types.ts`,
			iconTypeFileContent
		);
	}
});
