'use strict';

var 
gulp            = require( 'gulp' ),
inject          = require( 'gulp-inject' ),
bowerFiles      = require( 'main-bower-files' ),
angularFilesort = require('gulp-angular-filesort'),
taskConfig      = require( './task.conf.js' )
;


gulp.task( 'injectStream', [ 'copyIndex', 'copyViews', 'templateCache', 'buildCSS', 'buildJS' ], function () {
  return gulp
  			.src( './build/index.html' )
  			.pipe( inject( gulp.src(taskConfig.sourceStreamCSS(), {read: false} ), {name: 'app', relative: true} ) )
  			.pipe( inject( gulp.src(['./build/js/*.js', '!./build/js/app.min.js'], {read: false} ), {relative: true} ) )
  			.pipe( inject( gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true} ) )
  			.pipe( inject( gulp.src(taskConfig.sourceStreamJS()).pipe( angularFilesort() ), {name: 'app', relative: true} ) )
        	.pipe(gulp.dest('./build'));
} );




