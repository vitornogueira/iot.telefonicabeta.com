var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var libs = [
  'assets/js/libs/jquery.min.js',
  'assets/js/libs/fancybox.js',
  'assets/js/libs/fancybox-media.js',
  'assets/js/libs/bootstrap.min.js',
  'assets/js/libs/sweet-alert.min.js',
  'assets/js/custom.js',
  'assets/js/libs/flickity.js'
];

gulp.task('default', function() {
  gulp.src(libs)
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/dist/'));
});

