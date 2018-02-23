var gulp = require('gulp');
var shell = require('gulp-shell'); // Allow shell commands to be run from Gulp



// Task for building site for production:
gulp.task('build', shell.task(['bundle exec jekyll build']));

// Task for building site for development:
gulp.task('serve', shell.task(['bundle exec jekyll serve']));
