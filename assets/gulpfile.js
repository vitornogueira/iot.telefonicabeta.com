var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

var libs = [
  'js/libs/jquery.min.js',
  'js/libs/fancybox.js',
  'js/libs/fancybox-media.js',
  'js/libs/bootstrap.min.js',
  'js/libs/sweet-alert.min.js',
  'js/custom.js',
  'js/libs/flickity.js'
];

var css = [
  'css/libs/bootstrap.css',
  'css/libs/fancybox.css',
  'css/libs/flickity.css',
  'css/libs/sweet-alert.css'
];

gulp.task('default', function() {
  gulp.src(libs)
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/dist/'));

  gulp.src(css)
    .pipe(concat('libs.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css/dist/'));
});

