module.exports = {
	page: {
		lang: 'ro'
	},
	layout: 'layouts/base.njk',
	/*
		With Romanian being the default language,
		remove the `/ro/` prefix from all permalinks.
	*/
	permalink: data => {
		const stem = data.page.filePathStem.replace(/^\/ro\//, '');
		const ext = data.page.outputFileExtension;
		if (stem === 'index' || stem.match(/\/index$/)) {
			return `${stem}.${ext}`;
		}
		return `${stem}/index.${ext}`;
	}
};
