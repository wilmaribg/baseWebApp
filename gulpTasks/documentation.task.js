'use strict';

var gulp = require( 'gulp' );


gulp.task( 'generateDocumentation', [], function () {
	var ngdocs = require("gulp-ngdocs");
	
	return gulp
			.src( [ './app/**/*.js', '! ./app/**/*.js' ] )
			.pipe( ngdocs.process() )
			.pipe( gulp.dest( './documentation' ) )
} );


gulp.task( 'viewDocumentation', [ 'generateDocumentation' ], function () {
	var browser = require("browser-sync").create();
	
	return browser
			.init({
				server: {
					baseDir: './documentation'
				}
			});
} );
