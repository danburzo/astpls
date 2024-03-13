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
	},
	strings: {
		tagline: 'Fițuică tipografică pentru limba română',
		footer: "<strong>ășț pls</strong> este un lucru făcut de <a href='https://danburzo.ro'>Dan Cătălin Burzo</a>. Te-ar mai putea interesa și <a href='https://llll.ro/typographica/'>Typographica</a>."
	}
};
