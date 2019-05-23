// this scripts generate a .json-file with metadata for the icons
const fs = require('fs');
const glob = require('glob');

const directory = process.argv[2];

function getFileName(path) {
	return path.split("/").pop();
}

function getCategory(path, fileName) {
	// the category is the foldername above the file
	return path
		.replace(fileName, "")
		.replace(directory, "")
		.replace(/\//g, "");
}

glob(`${directory}/**/*`, function (err, res) {
	if (err) {
		console.log('Error', err);
	} else {
		const icons = res.map((path) => {
			const name = getFileName(path);
			const category = getCategory(path, name);

			return {
				name,
				category
			};
		})

		const data = JSON.stringify(icons, null, 2);

		fs.writeFileSync(`${process.cwd()}/${directory}/icons.json`, data);
	}
});
