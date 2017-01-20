'use strict';

var gulp = require( 'gulp' ),
	templateCache = require( 'gulp-angular-templatecache' );

gulp.task( 'templateCache', [], function () {
	return gulp
			.src( './app/**/*.template.html' )
			.pipe( templateCache( {standalone: true} ) )
			.pipe( gulp.dest( './build/js' ) )
} );