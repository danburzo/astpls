const path = require('path');

function replaceLocales(inputPath, locales, placeholder) {
	let locale;
	const result = inputPath
		.split(path.sep)
		.map(function (seg) {
			if (locales.includes(seg)) {
				if (!locale) locale = seg;
				return placeholder;
			}
			return seg;
		})
		.filter(Boolean)
		.join(path.sep);
	return { locale, result };
}

module.exports = function EleventyPlugin(config, opts = {}) {
	let options = {
		defaultLocale: 'en',
		locales: ['en'],
		placeholder: ':locale:',
		...opts
	};

	let byCanonicalPath = {};
	let byUrl = {};
	config.on('eleventy.contentMap', function (map) {
		Object.entries(map.urlToInputPath)
			.map(function (entry) {
				const [url, inputPath] = entry;
				const { locale, result } = replaceLocales(
					inputPath,
					options.locales,
					options.placeholder
				);
				return {
					url,
					canonicalPath: result,
					lang: locale || options.defaultLocale
				};
			})
			.forEach(function (entry) {
				if (!byCanonicalPath[entry.canonicalPath]) {
					byCanonicalPath[entry.canonicalPath] = {};
				}
				byCanonicalPath[entry.canonicalPath][entry.lang] = entry;
				byUrl[entry.url] = entry;
			});
	});

	config.addFilter('locale_url', function (url, overrideLang) {
		const lang = overrideLang || this.page?.lang || options.defaultLocale;
		const canonicalPath = byUrl[url].canonicalPath;
		return byCanonicalPath[canonicalPath][lang]?.url || url;
	});

	/*
		includeMissing:
			- true: return empty objects for languages that don’t have a corresponding page
			- false: only return for languages that have a corresponding page
	*/
	config.addFilter('locale_links', function (url, includeMissing = false) {
		const canonicalPath = byUrl[url].canonicalPath;
		const pages = byCanonicalPath[canonicalPath];
		if (!includeMissing) {
			return Object.values(pages);
		}
		return options.locales.map(lang => pages[lang] ?? { lang });
	});
};
