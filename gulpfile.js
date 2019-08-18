'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('scss', function () {
    return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/style'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('browser-sync', function(done) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    });
    done();
});
gulp.task('uglify', function(done){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    done()
});
gulp.task('dev', gulp.parallel('browser-sync',  function () {
    gulp.watch('src/scss/*.scss', gulp.series('scss'))
}))