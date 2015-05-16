var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    react = require('gulp-react'),
    paths = {
      js: ['app/main.js', 'app/react.jsx']
    };

gulp.task('scripts', function () {
  return gulp.src(paths.js)
    .pipe(react())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Finished transpiling jsx, and concatenating and minifying JavaScript'}));
});

gulp.task('watch', function(){
  gulp.watch(paths.js, ['scripts']);
});

gulp.task('build', ['scripts']);
