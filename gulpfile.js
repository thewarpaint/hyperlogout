var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    react = require('gulp-react'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    paths = {
      js: ['app/main.js', 'app/react.jsx'],
      jsMin: 'app.min.js',
      css: ['app/main.scss'],
      cssMin: 'app.min.css',
      dist: 'dist'
    };

gulp.task('scripts', function () {
  return gulp.src(paths.js)
    .pipe(react())
    .pipe(concat(paths.jsMin))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist))
    .pipe(notify({ message: 'Finished transpiling jsx, and concatenating and minifying JavaScript'}));
});

gulp.task('styles', function () {
  return gulp.src(paths.css)
    .pipe(sass())
    .pipe(concat(paths.cssMin))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.dist))
    .pipe(notify({ message: 'Finished compiling SASS and minifying CSS'}));
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.css, ['styles']);
});

gulp.task('build', ['scripts', 'styles']);
