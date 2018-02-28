var gulp = require('gulp');
var shell = require('gulp-shell'); // Allow shell commands to be run from Gulp
var responsive = require('gulp-responsive'); // Create responsive images


// Task for building site for production:
// Start by processing images
gulp.task('images', function () {
  return gulp.src('_build/images/uploads/*.{png,jpg}')
    .pipe(responsive({

      // Resize all post images and ensure jpeg format
      '*': [{
        width: 425,
        quality: 80,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-small' },
      }, {
        width: 520,
        quality: 70,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-med' },
      }, {
        width: 768,
        quality: 70,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-large' },
      }, {
        width: 90,
        height: 90,
        quality: 90,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-thumbnail' },
      }],
    }))
    .pipe(gulp.dest('images/uploads'));
});

gulp.task('build', shell.task(['bundle exec jekyll build']));

// Task for building site for development:
// Start by processing images
gulp.task('images', function () {
  return gulp.src('_build/images/uploads/*.{png,jpg}')
    .pipe(responsive({

      // Resize all post images and ensure jpeg format
      '*': [{
        width: 425,
        quality: 80,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-small' },
      }, {
        width: 520,
        quality: 70,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-med' },
      }, {
        width: 768,
        quality: 70,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-large' },
      }, {
        width: 90,
        height: 90,
        quality: 90,
        progressive: true,
        withoutEnlargement: false,
        errorOnUnusedConfig: false,
        withMetadata: false,
        rename: { suffix: '-thumbnail' },
      }],
    }))
    .pipe(gulp.dest('images/uploads'));
});

gulp.task('serve', shell.task(['bundle exec jekyll serve']));


gulp.task('dev', ['images','serve']);
