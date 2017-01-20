'use strict';

var gulp = require( 'gulp' ),
	browser = require( 'browser-sync' ).create();


gulp.task( 'serve', [ 'build' ], function () {
	return browser
			.init({
				server : {
					baseDir: './build'
				}
			});
} );

gulp.task( 'serve-dev', [ 'serve' ], function () {
	var config 	= require( './task.conf.js' );
	gulp.watch( config.sourceCSS, {}, [ 'buildCSS', 'reload' ] );
	gulp.watch( config.sourceJS, {}, [ 'buildJS', 'reload' ] );
	gulp.watch( './app/index.html', {}, [ 'copyIndex', 'reload' ] );
	gulp.watch( ['./app/**/*.html', '!./app/index.html'], {}, [ 'copyViews', 'reload' ] );
} );


gulp.task( 'reload', [ 'build' ], function () {
	browser.reload();
} );
