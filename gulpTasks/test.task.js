'use strict';

var gulp = require( 'gulp' );


gulp.task( 'test', [], function ( done ) {
	var Server = require( 'karma' ).Server;
	
	return new Server( {
					configFile: __dirname + '/karma.conf.js',
    				singleRun: true
				}, done() ).start();
} );


gulp.task( 'testViewUnits', [], function () {
	var browser = require( 'browser-sync' ).create();
	
	return browser
			.init({
				server : {
					baseDir: './tests/units/'
				}
			});
} );


gulp.task( 'testViewCoverage', [], function () {
	var browser = require( 'browser-sync' ).create();
	
	return browser
			.init({
				server : {
					baseDir: './tests/coverage/Chrome 55.0.2883 (Linux 0.0.0)'
				}
			});
} );
