// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

//uglify CSS
gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(gulp.dest('js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/*.sass', ['sass']);
    gulp.watch('css/*.css', ['css']);
});

// Default Task
gulp.task('default', ['sass', 'css', 'scripts', 'watch']);
