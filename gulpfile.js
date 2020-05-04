const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('css', () => {
    return gulp.src('src/scss/style.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.']
        }).on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(autoprefixer())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('assets/dist/css'))
        .pipe(browserSync.stream());
});

// gulp.task('js', () => {
//     return gulp.src('src/js/**/*.js')
//         .pipe(concat('app.min.js'))
//         .pipe(minifyJS())
//         .pipe(gulp.dest('dist/js'))
//         .pipe(browserSync.stream());
// });


gulp.task('watch', () => {
    gulp.watch("src/scss/**/*.scss", ['css']);
    // gulp.watch("src/js/**/*.js", ['js']);
});

