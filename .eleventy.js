module.exports = function (config) {
	config.addPassthroughCopy({ static: '.' });
	return {
		pathPrefix: '/',
		dir: {
			input: 'src',
			output: 'build'
		},
		htmlTemplateEngine: 'njk'
	};
};
