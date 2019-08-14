'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');
 
gulp.task('sass-01', function () {
    return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/style'));
});
 
gulp.task('watch', function () {
    gulp.watch('src/scss/*.scss', gulp.series('sass-01'));
});


