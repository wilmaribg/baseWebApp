'use strict';

var 
config 	   = require( './task.conf.js' ),
gulp       = require( 'gulp' )
;
	

gulp.task( 'build', [ 'injectStream' ], function () {} );


gulp.task( 'copyIndex', [], function () {
	var copy = require('gulp-copy');	
	return gulp
			.src( './app/index.html' )
			.pipe( copy( './build', { prefix: 1 } ) )
} );

gulp.task( 'copyViews', [], function () {
	var copy = require('gulp-copy');
	return gulp
			.src( './app/**/*.html' )
			.pipe( copy( './build/views', { prefix: 1 } ) )
} );


gulp.task( 'buildCSS', [], function () {
	var	uglifycss  = require( 'gulp-uglifycss' ),
		sass 	   = require( 'gulp-sass' ),
		sourcemaps = require( 'gulp-sourcemaps' ),
		concat     = require( 'gulp-concat' );
	return gulp
			.src( config.sourceCSS )
			.pipe( sass() )
			.pipe( gulp.dest( './build/css/app' ) )
			.pipe( concat( 'app.min.css' ) )
			.pipe( sourcemaps.init() )
			.pipe( uglifycss() )
			.pipe( sourcemaps.write() )
			.pipe( gulp.dest( './build/css' ) )
} );


gulp.task( 'buildJS', [], function () {
	var	uglify     = require( 'gulp-uglify' ),
		browser    = require( 'browser-sync' ),
		sourcemaps = require( 'gulp-sourcemaps' ),
		concat     = require( 'gulp-concat' );
	return gulp
			.src( config.sourceJS )
			.pipe( gulp.dest( './build/js/app' ) )
			.pipe( concat( 'app.min.js' ) )
			.pipe( sourcemaps.init() )
			.pipe( uglify() )
			.pipe( sourcemaps.write() )
			.pipe( gulp.dest( './build/js' ) )
			.pipe( browser.stream() )
} );