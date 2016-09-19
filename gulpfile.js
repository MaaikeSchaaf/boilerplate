const gulp = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");

gulp.task("run", function() {
    var bundler = browserify('./src/script.es6')
        .transform(babelify, {presets: ['es2015']})
        .bundle();

    return bundler
        .pipe(source('script.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', ['run']);
});

gulp.task('default', ['watch', 'run']);