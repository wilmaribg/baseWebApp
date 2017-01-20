var taskConfig = {
	mode: 'developoment', //developoment, production
	sourceJS: [ './app/**/*.js', '!./app/**/*.min.js', '!./app/**/*.spec.js' ],
	sourceCSS: [ './app/**/*.scss', '!./app/**/*.min.scss' ],
	sourceStreamJS: function () {
		if( this.mode === 'production' ) {
			return [ '!./build/js/app/**/*.js', './build/js/app.min.js', '!./app/**/*.spec.js' ];
		} else {
			return [ './build/js/app/**/*.js', '!./build/js/app.min.js', '!./app/**/*.spec.js' ];
		}
	},
	sourceStreamCSS: function () {
		if( this.mode === 'production' ) {
			return [ '!./build/css/app/**/*.css', './build/css/app.min.css' ];
		} else {
			return [ './build/css/app/**/*.css', '!./build/css/app.min.css' ];
		}
	},
};

module.exports = taskConfig;