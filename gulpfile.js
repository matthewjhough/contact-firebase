var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('browserify', function() {
    browserify('./src/scripts/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(babel())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/styles/*.*')
        .pipe(gulp.dest('dist'));
    gulp.src('src/scripts/vendors/**/*.*')
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('default', ['browserify', 'copy'], function() {
    return gulp.watch('src/**/*.*', ['browserify', 'copy'] )
});
