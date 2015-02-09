var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var libs = [
  'js/libs/jquery.min.js',
  'js/libs/fancybox.js',
  'js/libs/fancybox-media.js',
  'js/libs/bootstrap.min.js',
  'js/libs/sweet-alert.min.js',
  'js/custom.js',
  'js/libs/flickity.js'
];

gulp.task('default', function() {
  gulp.src(libs)
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/dist/'));
});

